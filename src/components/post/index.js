import './style.css';

import { useEffect, useState } from 'react';

const Post = (props) => {
    const date = new Date(props.publishedAt);
    const formatedDate = ((date.getDate() )) + "/" + ((date.getMonth() + 1)) + "/" + (date.getFullYear());

    const [order, setOrder] = useState("image-left");
    const setOrderLeft = () => {
        setOrder("image-left")
    };
    const setOrderRight = () => {
       setOrder("image-right")
    };
    useEffect(() => {
        if(props.order % 2 === 0) {
            setOrderLeft();
        }else {
            setOrderRight();
        }
    }, [props.order]);
    
    return(
        <div className="post">
            {
                order === "image-left" ?
                <>
                    <div className="post-image-container left-container">
                        <img
                            src={props.imageUrl}
                            alt="Post"
                        />
                    </div>
                    <div className="post-infos-container">
                        <div className="post-title">
                            <h2 className="bold-text">{props.title}</h2>
                        </div>
                        <div className="post-badges">
                            <span>{formatedDate}</span>
                            <span className="newsSite" >{props.newsSite}</span>
                        </div>
                        <div className="post-summary">
                            {props.summary}
                        </div>
                        <div className="post-see-more">
                            <a className="btn btn-more" href={props.url} target="_blank" rel="noreferrer">Ver Mais</a>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="post-infos-container  left-container">
                        <div className="post-title">
                            <h2 className="bold-text">{props.title}</h2>
                        </div>
                        <div className="post-badges">
                            <span>{formatedDate}</span>
                            <span className="newsSite" >{props.newsSite}</span>
                        </div>
                        <div className="post-summary">
                            {props.summary}
                        </div>
                        <div className="post-see-more">
                            <a className="btn btn-more" href={props.url} target="_blank" rel="noreferrer">Ver Mais</a>
                        </div>
                    </div>
                    <div className="post-image-container">
                        <img
                            src={props.imageUrl}
                            alt="Post"
                        />
                    </div>
                </>
            }
        </div>
    );
};

export default Post;