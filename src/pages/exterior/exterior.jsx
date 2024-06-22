import React from "react";
import "./exterior.css";
import logo from "../../imgs/logo.png";

const Exterior = (props) => {
  return (
    <div className="page" id="interior-page">
      <div className="med-header-interior w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-12 sm:pl-20 sm:pr-20 text-white">
        <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col sm:w-3/6">
          <span className="sm:mt-0">EXTERIOR </span>
          <span className="mt-2 sm:mt-2">SERVICES</span>
        </h2>
        <div className="top-section-img-ex sm:mb-20 sm:mt-12 w-full h-60 sm:order-3 bg-slate-100"></div>
        <p className="pt-5 sm:w-2/6 sm:pr-8 sm:text-xxs sm:pt-0 sm:order-1">
          Exterior renovations enhance both the aesthetic appeal and
          functionality of your home, significantly elevating your living
          experience and property value. De Jesus Contracting excels in expert
          siding, roofing, framing, and window services, using top-quality
          materials for precision and durability. Whether updating your home’s
          appearance, enhancing energy efficiency, or boosting resale value, we
          tailor solutions to reflect your style and improve your living space.
        </p>
        <button className="sm:order-2 sm:w-1/6 sm:text-xxs get-started pt-2 pb-2 pl-5 pr-5 text-white sm:mt-0 sm:max-h-9 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
          GET STARTED
        </button>
      </section>
      <section className="whole-dark p-5 sm:pl-20  sm:pb-20 sm:pr-20 flex flex-col md:flex-row lg:pl-28 lg:pr-28">
        <section className="text md:w-3/5">
          <div className="header-text">
            <p className="pre-text text-xs">/ Become the Jonses</p>
            <h2 className="sub-header mb-5 text-4xl leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col">
              <span>ADD SOME CURB</span>
              <div className="md:w-screen relative z-10 mt-1 sm:ml-36 leading-12 sm:font-light sm:mt-2">
                APPEAL TO YOUR
              </div>
              <span className="sm:ml-12 leading-10 mt-1 sm:font-light sm:mt-2">
                HOME NOW!
              </span>
            </h2>
          </div>
          <div className="p-text sm:text-xxs mb-5 sm:max-w-64 sm:ml-32">
            <p>
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
            <button className="get-started pt-2 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
              GET STARTED
            </button>
          </div>
        </section>
        <section className="image w-full bg-yellow-500 md:w-2/5">
          <div className="img remodel-img-ex w-full h-full"></div>
        </section>
      </section>
    </div>
  );
};

export default Exterior;
