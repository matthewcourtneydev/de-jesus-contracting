import React from 'react';
import "./nav-menu.css"

const NavMenu = (props) => {
    function handleSelect(route) {
        props.navigateTo(route);
        props.toggleMenu((prev) => !prev);
    }

    return (
        <div className={props.isMenuOpen ? "nav-menu z-30 md:pr-20 md:pl-20 xl:pl-52 xl:pr-52 text-light md:flex md:flex-row fixed left-0 top-0 p-5 pt-20 h-screen w-screen" : "hidden"}>
            <div className="left-menu hidden md:flex md:w-1/2 h-full pt-10">
                <div className="menu-image max-h-80 h-3/4 w-3/4 bg-blue-300"></div>
            </div>
            <div className="right-menu text-4xl md:text-3xl md:leading-9 md:w-1/2 font-thin leading-10">
                <ul>
                    <li className={props.currentPage === "/" ? "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8 active-tab" : "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/")}>HOME</li>
                    <li className={props.currentPage === "/about" ? "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8 active-tab" : "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/about")}>ABOUT</li>
                    <li className={props.currentPage === "/interior" ? "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8 active-tab" : "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/interior")}>INTERIOR</li>
                    <li className={props.currentPage === "/exterior" ? "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8 active-tab" : "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/exterior")}>EXTERIOR</li>
                    <li className={props.currentPage === "/patios" ? "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8 active-tab" : "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/patios")}>PATIOS AND DECKS</li>
                    <li className={props.currentPage === "/backyard" ? "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8 active-tab" : "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/backyard")}>BACKYARD</li>
                    <li className={props.currentPage === "/fencing" ? "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8 active-tab" : "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/fencing")}>FENCING</li>
                    <li className={props.currentPage === "/portfolio" ? "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8 active-tab" : "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/portfolio")}>PORTFOLIO</li>
                    <li className={props.currentPage === "/testimonials" ? "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8 active-tab" : "item mt-3 md:mt-0 md:text-2xl xl:text-6xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/testimonials")}>TESTIMONIALS</li>
                </ul>
            </div>
        </div>
    );
}

export default NavMenu;
