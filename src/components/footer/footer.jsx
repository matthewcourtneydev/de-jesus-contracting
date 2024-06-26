import { React, useRef, useState } from "react";
import "./footer.css";
import logo from "../../imgs/logo.png";
import { FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import { FaLongArrowAltUp, FaFacebookF } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";

const Footer = (props) => {
  const form = useRef();
  const [isEmailSent, toggleEmail] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_8dlalvd", "template_7h3bqli", form.current, {
        publicKey: "aPDvLUxmq4l6nCZmW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    toggleEmail((prev) => !prev);
  }

  return (
    <footer className="bg-blue relative m-h-200 pb-20 md:pb-10 gap-5 flex flex-col pl-5 pr-5 md:pl-20 md:pr-20 md:pt-5 md:text-xs lg:pl-28 lg:pr-28">
      <section className="upper pt-5 w-full justify-between flex flex-col md:flex-row">
        <section className="footer-section w-1/3 md:max-w-20 h-full mb-2">
          <img src={logo} alt="" className="w-full" />
        </section>
        <section className="footer-section w-100 md:w-1/6 md:pr-2 h-full mb-10">
          <h3 className="font-bold md:text-xxs pre-text sans-font text-lg  mb-8">GET IN TOUCH</h3>
          <div className="container w-full md:w-5/6">
            <div className="item w-full flex flex-row mb-3">
              <span className=" w-1/6 mt-1">
                <FaLocationDot className="m" />
              </span>
              <span className="info font-light sans-font md:w-5/6">
                <p className="text-light md:text-xxs">123 Main St,</p>
                <p className="text-light md:text-xxs">Rock Hill, SC 111111</p>
              </span>
            </div>
            <div className="item w-full flex flex-row mb-3">
              <span className=" w-1/6 mt-1">
                <FaPhone />
              </span>
              <span className="info font-light sans-font w-5/6">
                <a className="text-light md:text-xxs" href="tel:6072064901">(803) 444 0118</a>
              </span>
            </div>
            <div className="item w-full flex flex-row mb-3">
              <span className=" w-1/6 mt-1">
                <IoMdMail className="text-light md:text-xs" />
              </span>
              <span className="info font-light sans-font text-wrap md:w-5/6">
                <a className="text-wrap text-light word-wrap md:text-xxs text-base w-1/3" href="mailTo: mdcdev23@gmail.com">
                  dejesuscontractingllc@gmail.com
                </a>
              </span>
            </div>
          </div>
        </section>
        <section className="footer-section w-100 md:w-1/5 h-full md:pl-1 mb-10">
          <h3 className="font-bold md:text-xxs pre-text sans-font text-lg md:text-sm mb-8">
            SEND US A MESSAGE
          </h3>
          <div className="container w-full lg:w-5/6">
            {isEmailSent ? (
              <div>
                <h4 className="text-sm">We have received your email and will be in touch with you shortly. We appreciate you reaching out!</h4>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                ref={form}
                className="contact-footer md:text-xxs"
              >
                <input
                  type="text"
                  id="name"
                  name="first"
                  placeholder="Name"
                  className="w-full mb-7 bg-transparent border-b-white border-b pb-2 text-light"
                />
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  className="w-full mb-7 bg-transparent border-b-white border-b pb-2 text-light"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full mb-7 bg-transparent border-b-white border-b pb-2 text-light"
                />
                <input
                  type="text"
                  id="message"
                  name="comments"
                  placeholder="Your Message"
                  className="w-full mb-7 bg-transparent border-b-white border-b pb-2 text-light"
                />
                <button className="submit bg-white w-full md:p-2 p-5 mt-5 text-black font-bold">
                  SUBMIT
                </button>
              </form>
            )}
          </div>
        </section>
        <section className="footer-section w-100 md:w-1/5 h-full mb-10">
          <h3 className="font-bold md:text-xxs pre-text sans-font text-lg md:text-sm mb-8">SERVICES</h3>
          <div className="container flex flex-col text-left">
            <button onClick={() => props.navigateTo("/interior")} className="link md:text-xxs md:mb-3 text-light underline font-light sans-font text-left mb-5 text-lg">
              Interior Services
            </button>
            <button onClick={() => props.navigateTo("/exterior")} className="link md:text-xxs md:mb-3 text-light underline font-light sans-font text-left mb-5 text-lg">
              Exterior Services
            </button>
            <button onClick={() => props.navigateTo("/patios")} className="link md:text-xxs md:mb-3 text-light underline font-light sans-font text-left mb-5 text-lg">
              Patios and Decks
            </button>
            <button onClick={() => props.navigateTo("/backyard")} className="link md:text-xxs md:mb-3 text-light underline font-light sans-font text-left mb-5 text-lg">
              Backyard Projects
            </button>
            <button onClick={() => props.navigateTo("/fencing")} className="link md:text-xxs md:mb-3 text-light underline font-light sans-font text-left mb-5 text-lg">
              Fencing
            </button>
          </div>
        </section>
        <section className="footer-section w-100 md:w-1/5 h-full mb-10">
          <h3 className="pre-text sans-font font-bold text-lg md:text-xxs md:mb-4 mb-8 text-dark">SOCIAL NETWORKS</h3>

          <div className="container flex w-full mb-20">
          <a target="_blank" href="https://www.instagram.com/dejesuscontractingllc?igsh=MW42c3o1aG91dmY1Yg=="><button className="social mr-2 p-4 md:p-2 rounded-full text-dark aspect-square">
              <RiInstagramFill />
            </button></a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61560002617270"><button className="social mr-2 p-4 md:p-2 rounded-full text-dark aspect-square">
              <FaFacebookF />
            </button></a>
            <a target="_blank" href="https://x.com/DeJesusRockHill"><button className="social mr-2 p-4 md:p-2 rounded-full text-dark aspect-square">
              <FaTwitter />
            </button></a>
          </div>
          <h3 className="font-bold md:text-xxs pre-text sans-font text-lg md:text-sm mb-8 flex content-center">
            BACK TO TOP <FaLongArrowAltUp className="mt-1 ml-2" />
          </h3>
        </section>
      </section>
      <section className="lower lg:min-w-screen bg-white md:text-xxs md:pt-5 md:pb-5 text-black text-xs absolute bottom-0 left-0 w-screen p-5 pt-10 pb-10 text-center font-bold">
        Copyright 2024 | De Jesus Contracting LLC All Rights Reserved SC License
        111111
      </section>
    </footer>
  );
};

export default Footer;
