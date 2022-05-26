import './style.css';

import { useState } from 'react';

const Navbar = (props) => {
    const [menu, setMenu] = useState("closed");
    const switchMenu = () => {
            if(menu === "closed"){
                setMenu("open");
            }
            if(menu === "open"){
                setMenu("closed");
            }
    }

    return(
        <div>
            <div className="nav-container">
                <div>                
                    <div className="search-box">
                        <input onChange={(e) => props.setSearchParam(e.target.value)} placeholder="Search"/>
                        <button onClick={props.search} className="btn">
                            <span className="mdi mdi-card-search" />
                        </button>
                    </div>
                </div>

                <div className="sort-container">
                    <div className="sort-box">
                        <button onClick={switchMenu} className="btn btn-sort">
                            <span>Sort</span>
                            <span className="mdi mdi-sort" /> 
                        </button>
                    </div>
                    {
                        menu === "closed" ?
                        <div className="sort-hidden"></div>
                        :
                        <div className="sort-box sort-hidden">
                            <button onClick={() => props.setPostOrder("asc")} className="btn btn-sort-box">Mais antigas</button>
                            <button onClick={() => props.setPostOrder("desc")} className="btn btn-sort-box">Mais novas</button>
                        </div>
                    }
                    
                </div>

            </div>
            
        </div>
    );
};

export default Navbar;