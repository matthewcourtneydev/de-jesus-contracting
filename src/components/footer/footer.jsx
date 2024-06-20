import React from "react";
import "./footer.css";
import logo from "../../imgs/logo.png";
import { FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import { FaLongArrowAltUp, FaFacebookF } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-blue m-h-200 flex flex-col">
      <section className="upper p-5 flex flex-col md:flex-row">
        <section className="footer-section w-100 md:w-1/5 h-full mb-10">
          <img src={logo} alt="" className="w-1/3" />
        </section>
        <section className="footer-section w-100 md:w-1/5 h-full mb-10">
          <h3 className="font-bold text-lg mb-8">GET IN TOUCH</h3>
          <div className="container w-full">
            <div className="item w-full flex flex-row mb-3">
              <span className="icon w-1/6 mt-1">
                <FaLocationDot className="m" />
              </span>
              <span className="info w-5/6">
                <p>123 Main St,</p>
                <p>Rock Hill, SC 111111</p>
              </span>
            </div>
            <div className="item w-full flex flex-row mb-3">
              <span className="icon w-1/6 mt-1">
                <FaPhone />
              </span>
              <span className="info w-5/6">
                <a href="tel:6072064901">(803) 444 0118</a>
              </span>
            </div>
            <div className="item w-full flex flex-row mb-3">
              <span className="icon w-1/6 mt-1">
                <IoMdMail />
              </span>
              <span className="info w-5/6">
                <a href="mailTo: mdcdev23@gmail.com">
                  dejesuscontractingllc@gmail.com
                </a>
              </span>
            </div>
          </div>
        </section>
        <section className="footer-section w-100 md:w-1/5 h-full mb-10">
          <h3 className="font-bold text-lg mb-8">SEND US A MESSAGE</h3>
          <div className="container w-full">
            <form action="" className="contact-footer">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full mb-7 bg-transparent border-b-white border-b pb-2 text-white"
              />
              <input
                type="phone"
                id="phone"
                placeholder="Phone"
                className="w-full mb-7 bg-transparent border-b-white border-b pb-2 text-white"
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full mb-7 bg-transparent border-b-white border-b pb-2 text-white"
              />
              <input
                type="text"
                id="message"
                placeholder="Your Message"
                className="w-full mb-7 bg-transparent border-b-white border-b pb-2 text-white"
              />
              <button className="submit bg-white w-full p-5 mt-5 text-black font-bold">SUBMIT</button>
            </form>
          </div>
        </section>
        <section className="footer-section w-100 md:w-1/5 h-full mb-10">
          <h3 className="font-bold text-lg mb-8">SERVICES</h3>
          <div className="container flex flex-col text-left">
            <button className="link underline font-thin text-left mb-5 text-lg">Interior Services</button>
            <button className="link underline font-thin text-left mb-5 text-lg">Exterior Services</button>
            <button className="link underline font-thin text-left mb-5 text-lg">Patios and Decks</button>
            <button className="link underline font-thin text-left mb-5 text-lg">Hardscape and Irrigation</button>
            <button className="link underline font-thin text-left mb-5 text-lg">Fencing</button>
          </div>
        </section>
        <section className="footer-section w-100 md:w-1/5 h-full mb-10">
          <h3 className="font-bold text-lg mb-8">SOCIAL NETWORKS</h3>

          <div className="container flex w-full mb-20">
            <button className="social bg-amber-400 mr-4 p-4 rounded-full aspect-square"><RiInstagramFill /></button>
            <button className="social bg-amber-400 mr-4 p-4 rounded-full aspect-square"><FaFacebookF /></button>
            <button className="social bg-amber-400 mr-4 p-4 rounded-full aspect-square"><FaTwitter /></button>
          </div>
          <h3 className="font-bold text-lg mb-8 flex content-center">BACK TO TOP  <FaLongArrowAltUp className="mt-1 ml-2" /></h3>
        </section>
      </section>
      <section className="lower bg-white text-black text-xs w-full p-5 pt-10 pb-10 text-center font-bold">
        Copyright 2024 | De Jesus Contracting LLC All Rights Reserved SC License
        111111
      </section>
    </footer>
  );
};

export default Footer;
