import './style.css';

const Navbar = () => {

    return(
        <div>
            <div className="nav-container">
                <div className="search-box">
                    <input placeholder="Search"/>
                    <button className="btn">
                        <span className="mdi mdi-card-search" />
                    </button>
                </div>
                <div className="sort-box">
                    <button className="btn">
                        <span>Sort</span>
                        <span className="mdi mdi-sort" />
                    </button>
                </div>
                
            </div>
            <div className="sort-items">
                <button className="btn btn-no-border">Mais antigas</button>
                <button className="btn btn-no-border btn-last">Mais novas</button>
            </div>
        </div>
    );
};

export default Navbar;