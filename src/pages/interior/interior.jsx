import React from "react";
import "./interior.css";
import logo from "../../imgs/logo.png";

const Interior = (props) => {
  return (
    <div className="page" id="interior-page">
      <div className="med-header-interior w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-12 sm:pl-20 sm:pr-20 text-white">
        <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col sm:w-3/6">
          <span className="sm:mt-0">INTERIOR </span>
          <span className="mt-2 sm:mt-2">SERVICES</span>
        </h2>
        <div className="top-section-img sm:mb-20 sm:mt-12 w-full h-60 sm:order-3 bg-slate-100"></div>
        <p className="pt-5 sm:w-2/6 sm:pr-8 sm:text-xxs sm:pt-0 sm:order-1">
        De Jesus Contracting specializes in revitalizing your home's interior, from flooring and painting to bathroom and kitchen renovations. Our skilled team is dedicated to bringing your vision to life with quality craftsmanship and attention to detail. Whether you're modernizing your space or updating its aesthetics, we provide tailored solutions that enhance both functionality and appeal, ensuring your home reflects your style and exceeds expectations.
        </p>
        <button className="sm:order-2 sm:w-1/6 sm:text-xxs get-started pt-2 pb-2 pl-5 pr-5 text-white sm:mt-0 sm:max-h-9 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
          GET STARTED
        </button>
      </section>
      <section className="whole-dark p-5 sm:pl-20  sm:pb-20 sm:pr-20 flex flex-col md:flex-row lg:pl-28 lg:pr-28">
        <section className="text md:w-3/5">
          <div className="header-text">
            <p className="pre-text text-xs">/ Staycation at Home</p>
            <h2 className="sub-header mb-5 text-4xl leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col">
              <span>THE INTERIOR</span>
              <div className="md:w-screen relative z-10 mt-1 sm:ml-36 leading-12 sm:font-light sm:mt-2">
                OF YOUR DREAMS
              </div>
              <span className="sm:ml-12 leading-10 mt-1 sm:font-light sm:mt-2">
                IS HERE!
              </span>
            </h2>
          </div>
          <div className="p-text sm:text-xxs mb-5 sm:max-w-64 sm:ml-32">
            <p>
            Simple changes can make a profound difference in a home's interior, and De Jesus Contracting specializes in transforming spaces with these subtle yet impactful updates. By painting walls and refinishing floors, they bring out the beauty of your home while elevating its overall value. These renovations not only refresh the aesthetics but also enhance the functionality and appeal of each room. Whether you're looking to modernize, update, or prepare your home for resale, De Jesus Contracting's expertise ensures a transformation that aligns with your vision and enhances your living environment.
            </p>
            <button className="get-started pt-2 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
              GET STARTED
            </button>
          </div>
        </section>
        <section className="image w-full bg-yellow-500 md:w-2/5">
          <div className="img remodel-img w-full h-full"></div>
        </section>
      </section>
    </div>
  );
};

export default Interior;
