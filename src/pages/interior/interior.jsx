import React from "react";
import "./interior.css";
import logo from "../../imgs/logo.png";

const Interior = (props) => {
  return (
    <div className="page" id="interior-page">
      <div className="med-header-interior w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-12 sm:pl-20 sm:pr-20">
        <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 text-light sm:mt-2 md:text-5xl flex flex-col sm:w-3/6">
          <span className="sm:mt-0 text-light">INTERIOR </span>
          <span className="mt-2 sm:mt-2 text-light">SERVICES</span>
        </h2>
        <div className="top-section-img sm:mb-20 sm:mt-12 w-full h-60 sm:order-3 bg-slate-100"></div>
        <p className="pt-5 sm:w-2/6 text-light sm:pr-8 sm:text-xxs sm:pt-0 sm:order-1">
        De Jesus Contracting specializes in revitalizing your home's interior, from flooring and painting to bathroom and kitchen renovations. Our skilled team is dedicated to bringing your vision to life with quality craftsmanship and attention to detail. Whether you're modernizing your space or updating its aesthetics, we provide tailored solutions that enhance both functionality and appeal, ensuring your home reflects your style and exceeds expectations.
        </p>
        <button className="sm:order-2 sm:w-1/6 sm:text-xxs get-started pt-2 pb-2 pl-5 pr-5 text-light sm:mt-0 sm:max-h-9 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
          GET STARTED
        </button>
      </section>
      <section className="whole-dark p-5 sm:pl-20  sm:pb-20 sm:pr-20 flex flex-col md:flex-row lg:pl-28 lg:pr-28">
        <section className="text md:w-3/5">
          <div className="header-text">
            <p className="pre-text text-xs">/ Staycation at Home</p>
            <h2 className="sub-header mb-5 text-4xl leading-10 text-light sm:mt-2 md:text-5xl flex flex-col">
              <span className="text-light">THE INTERIOR</span>
              <div className="md:w-screen text-light relative z-10 mt-1 sm:ml-36 leading-12 sm:text-light sm:mt-2">
                OF YOUR DREAMS
              </div>
              <span className="sm:ml-12 text-light leading-10 mt-1 sm:text-light sm:mt-2">
                IS HERE!
              </span>
            </h2>
          </div>
          <div className="p-text sm:text-xxs mb-5 sm:max-w-64 sm:ml-32">
            <p className="text-light">
            Simple changes can make a profound difference in a home's interior, and De Jesus Contracting specializes in transforming spaces with these subtle yet impactful updates. By painting walls and refinishing floors, they bring out the beauty of your home while elevating its overall value. These renovations not only refresh the aesthetics but also enhance the functionality and appeal of each room. Whether you're looking to modernize, update, or prepare your home for resale, De Jesus Contracting's expertise ensures a transformation that aligns with your vision and enhances your living environment.
            </p>
            <button className="get-started text-light pt-2 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
              GET STARTED
            </button>
          </div>
        </section>
        <section className="image w-full bg-yellow-500 md:w-2/5">
          <div className="img remodel-img w-full h-full"></div>
        </section>
      </section>
      <section className="section-two sm:flex sm:flex-wrap bg-white p-5 pt-10 sm:pl-20 sm:pr-20">
        <div className="header-text sm:order-1 sm:w-1/2 ">
          <p className="pre-text text-xs">/ Refresh and Renew</p>
          <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col ">
            <span className="">ELEVATE</span>
            <span className="sm:ml-16 mt-1 sm:mt-2">YOUR INTERIOR</span>
          </h2>
          <div className="second-section-img w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container sm:order-0 sm:w-1/2">
          <div className="card w-full pt-5 pb-5 mt-10 sm:mt-0 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Flooring
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              Quality flooring not only enhances the value of a home but also adds to its beauty, providing durable and visually appealing surfaces that elevate the overall ambiance of the space.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Painting
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              A fresh coat of interior paint can completely transform a space, revitalizing its ambiance and reflecting your personal style with a renewed aesthetic appeal.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Drywall
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              We specialize in drywall services, whether it's installing drywall for new extensions or repairing existing holes, ensuring comprehensive solutions tailored to meet all your needs.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Tiling
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              Retiling a floor or shower can dramatically change the look and feel of a space, adding modern aesthetics and enhancing usability with durable, stylish materials.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interior;
