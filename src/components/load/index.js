import './style.css';

const Load = () => {

    return(
        <div className="load-container">
            <div className="dots">
                <span className="mdi mdi-dots-vertical" />
            </div>
            <div className="load-btn-container">
                <button className="btn btn-load-more">Carregar Mais</button>
            </div>
        </div>
    );
};

export default Load;