import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Post from '../../components/post';
import Load from '../../components/load';

/* TO-DO:
    • Add ClassNames to divs
    • Add CSS file at the file dir (only to exclusive CSS - not exclusive should be at global.css)

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

                <Load />
            </div>
            
        </div>
    );
};

export default Home;