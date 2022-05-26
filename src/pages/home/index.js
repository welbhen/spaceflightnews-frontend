import './style.css';

import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Post from '../../components/post';
import Footer from '../../components/footer';

import api from '../../services/api';

import { useEffect, useState } from 'react';

const Home = () => {
    const [searchParam, setSearchParam] = useState("");
    const search = () => {
        setNewArticles(
            newArticles.filter((article) => 
                article.title.toLowerCase().includes(searchParam.toLowerCase())
            )
        );
    };

    const [newArticles, setNewArticles] = useState([]);

    const [postOrder, setPostOrder] = useState("desc");

    const [limit, setLimit] = useState(5);
    const loadMore = async () => {        
        setLimit(limit + 5);
    };
    
    useEffect(() => {
        let limitParams = "&limit=" + limit;
        let orderParams = "&order=" + postOrder;
        
        api.get("/articles?page=1" + limitParams + orderParams)
        .then((response) => {
            const res = (response.data).articles;
            setNewArticles(res);
        })
        .catch((err) => {
            console.log("Error: " + err.message);
        })
    }, [limit, postOrder]);

    return(
        <div className="home-page">
            <Navbar setPostOrder={setPostOrder} setSearchParam={setSearchParam} search={search}/>
            <Header />
            <div className="posts-container">

                {newArticles.map((article, i) => (
                    <Post key={'article_' + i} {...article} order={i}/>
                ))}

                <div className="load-container">
                    <div className="dots">
                        <span className="mdi mdi-dots-vertical" />
                    </div>
                    <div className="load-btn-container">
                        <button onClick={() => loadMore()} className="btn btn-load-more">Carregar Mais</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;