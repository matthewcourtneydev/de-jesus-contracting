import React from "react";
import "./navbar-sm.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


const NavbarSm = (props) => {
  return (
    <nav className="nav-sm pl-5 pt-5 pr-5 pb-2 z-20 flex justify-between flex-row w-full text-light fixed top-0 md:hidden">
      {props.isMenuOpen ? (
        <span className="nav-left flex text-light items-center" onClick={() => props.toggleMenu((prev) => !prev)}>
          <IoMdClose className="mr-2 text-light" /> CLOSE
        </span>
      ) : (
        <span className="nav-left flex text-light items-center text-xs" onClick={() => props.toggleMenu((prev) => !prev)}>
          <RxHamburgerMenu className="mr-2 text-bold text-light text-base" /> MENU
        </span>
      )}
      <span className="nav-right">
        <button
          onClick={() => props.navigateTo("/estimates")}
          className="get-started sans-font text-light text-xs border p-2 border-solid border-white"
        >
          START MY PROJECT
        </button>
      </span>
    </nav>
  );
};

export default NavbarSm;
