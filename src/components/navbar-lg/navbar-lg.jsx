import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import "./navbar-lg.css"

const NavbarLg = (props) => {
    return (
        <nav className="nav-lg hidden z-20 md:flex w-1/2 absolute right-0 top-10 pl-5 pr-10 text-xxs justify-between items-center text-white">
{props.isMenuOpen ? (
        <span className="nav-left flex items-center" onClick={() => props.toggleMenu((prev) => !prev)}>
          <IoMdClose className="mr-2" /> CLOSE
        </span>
      ) : (
        <span className="nav-left flex items-center" onClick={() => props.toggleMenu((prev) => !prev)}>
          <RxHamburgerMenu className="mr-2" /> MENU
        </span>
      )}
            <span className="w-fit nav-lg-middle"><button onClick={() => props.navigateTo("/estimates")} className="get-started-btn border p-1 pl-3 pr-3 border-solid border-white">START MY PROJECT</button></span>
            <span className="w-fit nav-lg-right max-h-10">
            <button className="social bg-amber-400 mr-2 p-1 text-xs rounded-full aspect-square"><RiInstagramFill /></button>
            <button className="social bg-amber-400 mr-2 p-1 text-xs rounded-full aspect-square"><FaFacebookF /></button>
            <button className="social bg-amber-400 mr-2 p-1 text-xs rounded-full aspect-square"><FaTwitter /></button>
            </span>
        </nav>
    );
}

export default NavbarLg;
