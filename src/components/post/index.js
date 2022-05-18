import './style.css';

/* TO-DO:
    • Add display-flex to align image with post text
    
**************************/

const Post = () => {

    return(
        <div className="post">
            <div className="post-image-container">
                <img
                    src="https://www.nasaspaceflight.com/wp-content/uploads/2022/05/article-lead-051422-1170x658.jpg"
                    alt="Post"
                />
            </div>
            <div className="post-infos-container">
                <div className="post-title">
                    <h2 className="bold-text">Tenete ergo quod si servitus</h2>
                </div>
                <div className="post-badges">
                    <span>dd/mm/yyyy</span>
                    <button className="btn">newsSite</button>
                </div>
                <div className="post-summary">
                    ajsbdjbaubsduabd jasudbabda
                </div>
                <div className="post-see-more">
                    <button className="btn">Ver Mais</button>
                </div>
            </div>
        </div>
    );
};

export default Post;