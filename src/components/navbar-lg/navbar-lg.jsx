import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import "./navbar-lg.css"

const NavbarLg = (props) => {
    return (
        <nav className="nav-lg hidden z-40 md:flex w-1/2 absolute  right-0 xl:pr-52  top-10 pl-5 pr-10 text-xxs justify-between items-center text-light">
{props.isMenuOpen ? (
        <span className="nav-left flex text-light items-center" onClick={() => props.toggleMenu((prev) => !prev)}>
          <IoMdClose className="mr-2 text-light" /> CLOSE
        </span>
      ) : (
        <span className="nav-left flex items-center text-light" onClick={() => props.toggleMenu((prev) => !prev)}>
          <RxHamburgerMenu className="mr-2 text-light" /> MENU
        </span>
      )}
            <span className="w-fit nav-lg-middle"><button onClick={() => props.navigateTo("/estimates")} className="get-started-btn text-light border p-1 pl-3 pr-3 border-solid border-white">START MY PROJECT</button></span>
            <span className="w-fit nav-lg-right max-h-10">
            <a target="_blank" href="https://www.instagram.com/dejesuscontractingllc?igsh=MW42c3o1aG91dmY1Yg=="><button className="social mr-2 p-1 text-xs rounded-full text-dark aspect-square"><RiInstagramFill /></button></a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61560002617270"><button className="social mr-2 p-1 text-xs rounded-full text-dark aspect-square"><FaFacebookF /></button></a>
            <a target="_blank" href="https://x.com/DeJesusRockHill"><button className="social mr-2 p-1 text-xs rounded-full text-dark aspect-square"><FaTwitter /></button></a>
            </span>
        </nav>
    );
}

export default NavbarLg;
