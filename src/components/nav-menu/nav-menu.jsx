import React from 'react';
import "./nav-menu.css"

const NavMenu = (props) => {
    function handleSelect(route) {
        props.navigateTo(route);
        props.toggleMenu((prev) => !prev);
    }

    return (
        <div className={props.isMenuOpen ? "nav-menu  z-30 md:pr-20 md:pl-20 xl:pl-52 xl:pr-52 text-light md:flex md:flex-row fixed left-0 top-0 p-5 pt-20 h-screen w-screen" : "hidden"}>
            <div className="left-menu hidden md:flex md:w-1/2 h-full pt-10">
                <div className="menu-image max-h-80 h-3/4 w-3/4 bg-blue-300"></div>
            </div>
            <div className="right-menu text-4xl md:text-3xl md:leading-9 md:w-1/2 font-thin leading-10">
                <ul>
                    <li className={props.currentPage === "/" ? "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8 active-tab" : "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/")}> {props.isSpanish ? "HOGAR" : "HOME"}</li>
                    <li className={props.currentPage === "/about" ? "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8 active-tab" : "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/about")}> {props.isSpanish ? "SOMBRE NOSOTROS" : "ABOUT"}</li>
                    <li className={props.currentPage === "/interior" ? "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8 active-tab" : "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/interior")}> {props.isSpanish ? "INTERIOR" : "INTERIOR"}</li>
                    <li className={props.currentPage === "/exterior" ? "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8 active-tab" : "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/exterior")}> {props.isSpanish ? "EXTERIOR" : "EXTERIOR"}</li>
                    <li className={props.currentPage === "/patios" ? "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8 active-tab" : "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/patios")}> {props.isSpanish ? "PATIOS Y CUBIERTAS" : "PATIOS AND DECKS"}</li>
                    <li className={props.currentPage === "/backyard" ? "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8 active-tab" : "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/backyard")}> {props.isSpanish ? "PATIO INTERIOR" : "BACKYARD"}</li>
                    <li className={props.currentPage === "/fencing" ? "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8 active-tab" : "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/fencing")}> {props.isSpanish ? "CERCA" : "FENCING"}</li>
                    <li className={props.currentPage === "/portfolio" ? "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8 active-tab" : "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/portfolio")}> {props.isSpanish ? "PORTAFOLIO" : "PORTFOLIO"}</li>
                    <li className={props.currentPage === "/testimonials" ? "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8 active-tab" : "item xl:text-4xl mt-3 md:mt-0 md:text-2xl xl:leading-none md:leading-8"} onClick={() => handleSelect("/testimonials")}> {props.isSpanish ? "TESTIMONIOS" : "TESTIMONIALS"}</li>
                </ul>
            </div>
        </div>
    );
}

export default NavMenu;
