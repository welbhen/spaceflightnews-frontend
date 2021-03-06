import './style.css';

const Header = () => {

    return(
        <header className="header-container">
            <div className="logo-container">
                <div className="logo">
                    <span className="rocket mdi mdi-rocket-launch" />
                </div>
            </div>
            <div className="title">
                <h2><a href="/">Space Flight News</a></h2>
            </div>          
        </header>
    );
};

export default Header;