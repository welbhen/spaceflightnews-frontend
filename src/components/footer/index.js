import './style.css';

const Footer = () => {
    return(
        <footer className="footer-container">
            <div className="footer-element">
                <h5>&#169; Welberth Marques</h5>
            </div>
            <div className="footer-element">
                <h5> This is a challenge by</h5>
                <h5>&nbsp;<a href="https://coodesh.com/" target="_blank" rel="noreferrer">Coodesh</a></h5>
            </div>        
        </footer>
    );
};

export default Footer;