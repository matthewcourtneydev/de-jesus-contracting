import React from "react";
import "./exterior.css";
import logo from "../../imgs/logo.png";

const Exterior = (props) => {
  return (
    <div className="page" id="interior-page">
      <div className="med-header-interior w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-12 sm:pl-20 sm:pr-20 text-light">
        <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col sm:w-3/6">
          <span className="sm:mt-0 text-light">EXTERIOR </span>
          <span className="mt-2 sm:mt-2 text-light">SERVICES</span>
        </h2>
        <div className="top-section-img-ex sm:mb-20 sm:mt-12 w-full h-60 sm:order-3 bg-slate-100"></div>
        <p className="pt-5 text-light sm:w-2/6 sm:pr-8 sm:text-xxs sm:pt-0 sm:order-1">
          Exterior renovations enhance both the aesthetic appeal and
          functionality of your home, significantly elevating your living
          experience and property value. De Jesus Contracting excels in expert
          siding, roofing, framing, and window services, using top-quality
          materials for precision and durability. Whether updating your home’s
          appearance, enhancing energy efficiency, or boosting resale value, we
          tailor solutions to reflect your style and improve your living space.
        </p>
        <button className="sm:order-2 sm:w-1/6 sm:text-xxs get-started pt-2 pb-2 pl-5 pr-5 text-light sm:mt-0 sm:max-h-9 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
          GET STARTED
        </button>
      </section>
      <section className="whole-dark p-5 sm:pl-20  sm:pb-20 sm:pr-20 flex flex-col md:flex-row lg:pl-28 lg:pr-28">
        <section className="text md:w-3/5">
          <div className="header-text">
            <p className="pre-text text-xs">/ First Impressions are Everything</p>
            <h2 className="sub-header mb-5 text-4xl leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col">
              <span className="text-light">ADD SOME CURB</span>
              <div className="md:w-screen text-light relative z-10 mt-1 sm:ml-36 leading-12 sm:text-light sm:mt-2">
                APPEAL TO YOUR
              </div>
              <span className="sm:ml-12 text-light leading-10 mt-1 sm:text-light sm:mt-2">
                HOME NOW!
              </span>
            </h2>
          </div>
          <div className="p-text sm:text-xxs mb-5 sm:max-w-64 sm:ml-32">
            <p className="text-light">
              Exterior renovations can significantly elevate your living
              experience by enhancing both the aesthetic appeal and
              functionality of your home. Improving the exterior not only boosts
              curb appeal but also increases the overall value of your property.
              De Jesus Contracting specializes in transforming homes with expert
              siding, roofing, framing, and window services, ensuring each
              project is executed with precision and top-quality materials.
              Whether you're looking to update your home's look, improve energy
              efficiency, or increase its resale value, De Jesus Contracting can
              turn your vision into reality with tailored solutions that reflect
              your style and enhance your living space.
            </p>
            <button className="get-started text-light pt-2 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
              GET STARTED
            </button>
          </div>
        </section>
        <section className="image w-full bg-yellow-500 md:w-2/5">
          <div className="img remodel-img-ex w-full h-full"></div>
        </section>
      </section>
      <section className="section-two sm:flex sm:flex-wrap bg-white p-5 pt-10 sm:pl-20 sm:pr-20">
        <div className="header-text sm:order-1 sm:w-1/2 ">
          <p className="pre-text text-xs">/ Looks Matter</p>
          <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col ">
            <span>TRANSFORM YOUR</span>
            <span className="sm:ml-8 mt-1 sm:mt-2">HOME'S EXTERIOR</span>
          </h2>
          <div className="second-section-img w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container sm:order-0 sm:w-1/2">
          <div className="card w-full pt-5 pb-5 mt-10 sm:mt-0 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Roofing
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              Roofing plays a critical role in shielding homes from the elements and maintaining their structural integrity and longevity.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Siding
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              Replacing siding is crucial to maintain the structural integrity of your home, enhance insulation, and update its curb appeal with fresh, durable materials.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Framing
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              Framing is essential in construction as it provides the structural framework that supports and shapes buildings, ensuring stability and durability.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Windows
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              Windows need replacement to enhance energy efficiency, improve insulation, and upgrade the overall appearance and functionality of your home.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exterior;
