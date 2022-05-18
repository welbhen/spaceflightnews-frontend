import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Post from '../../components/post';

/* TO-DO:
    • Add ClassNames to divs
    • Add CSS file at thi file dir (only to exclusive CSS - not exclusive should be at global.css)

    • Responsive CSS
        ► Alter posts layout (image top for ex.)
        ► Search, sort, logo and title on top of each others

**************************/

const Home = () => {

    return(
        <div className="home-page">
            <Navbar />
            <Header />
            <div className="posts-container">
                <Post />
                <Post />
            </div>
            
        </div>
    );
};

export default Home;