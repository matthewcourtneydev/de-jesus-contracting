import React from 'react';
import "./nav-menu.css"

const NavMenu = (props) => {
    function handleSelect(route) {
        props.navigateTo(route);
        props.toggleMenu((prev) => !prev);
    }

    return (
        <div className={props.isMenuOpen ? "nav-menu fixed left-0 top-0 p-5 pt-20 h-screen w-screen bg-green-200" : "hidden"}>
            <div className="left-menu hidden sm:flex">
                <div className="menu-image h-3/4 w-3/4 bg-blue-300"></div>
            </div>
            <div className="right-menu text-4xl font-thin leading-10">
                <ul>
                    <li className={props.currentPage === "/" ? "item mt-1 text-red-400" : "item mt-1"} onClick={() => handleSelect("/")}>HOME</li>
                    <li className={props.currentPage === "/about" ? "item mt-1 text-red-400" : "item mt-1"} onClick={() => handleSelect("/about")}>ABOUT</li>
                    <li className={props.currentPage === "/interior" ? "item mt-1 text-red-400" : "item mt-1"} onClick={() => handleSelect("/interior")}>INTERIOR</li>
                    <li className={props.currentPage === "/exterior" ? "item mt-1 text-red-400" : "item mt-1"} onClick={() => handleSelect("/exterior")}>EXTERIOR</li>
                    <li className={props.currentPage === "/patios" ? "item mt-1 text-red-400" : "item mt-1"} onClick={() => handleSelect("/patios")}>PATIOS AND DECKS</li>
                    <li className={props.currentPage === "/backyard" ? "item mt-1 text-red-400" : "item mt-1"} onClick={() => handleSelect("/backyard")}>BACKYARD</li>
                    <li className={props.currentPage === "/portfolio" ? "item mt-1 text-red-400" : "item mt-1"} onClick={() => handleSelect("/portfolio")}>PORTFOLIO</li>
                    <li className={props.currentPage === "/testimonials" ? "item mt-1 text-red-400" : "item mt-1"} onClick={() => handleSelect("/testimonials")}>TESTIMONIALS</li>
                </ul>
            </div>
        </div>
    );
}

export default NavMenu;
