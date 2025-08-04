 
import React from "react";
import './burger.css';

const Burger = () => {
    return (
        <div className="burger">
            <div className="top-bun">
                <div className="seeds1"></div>
                <div className="seeds2"></div>
                <div className="seeds3"></div>
            </div> 
            <div className="meat">Meat</div>
            <div className="cheese">Cheese</div>
            <div className="lettuce">Lettuce</div>
            <div className="tomato">Tomato</div>
            
            <div className="bottom-bun"></div>
        </div>
    );  
};

export default Burger;
