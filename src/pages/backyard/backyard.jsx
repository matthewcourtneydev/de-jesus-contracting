import React from "react";
import "./backyard.css";
import logo from "../../imgs/logo.png";

const Backyard = (props) => {
  return (
    <div className="page" id="interior-page">
      <div className="med-header-interior w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-12 sm:pl-20 sm:pr-20 text-white">
        <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col sm:w-3/6">
          <span className="sm:mt-0">BACKYARD</span>
          <span className="mt-2 sm:mt-2">SERVICES</span>
        </h2>
        <div className="top-section-img-by sm:mb-20 sm:mt-12 w-full h-60 sm:order-3 bg-slate-100"></div>
        <p className="pt-5 sm:w-2/6 sm:pr-8 sm:text-xxs sm:pt-0 sm:order-1">
          De Jesus Contracting enhances your backyard with expert hardscaping,
          concrete, irrigation, and landscaping services. From durable patios
          and pathways to lush greenery and efficient irrigation systems, our
          skilled team transforms outdoor spaces with creativity and precision.
          Whether you desire a serene retreat or an inviting entertainment area,
          De Jesus Contracting ensures your backyard exceeds expectations,
          enhancing both beauty and functionality.
        </p>
        <button className="sm:order-2 sm:w-1/6 sm:text-xxs get-started pt-2 pb-2 pl-5 pr-5 text-white sm:mt-0 sm:max-h-9 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
          GET STARTED
        </button>
      </section>
      <section className="whole-dark p-5 sm:pl-20  sm:pb-20 sm:pr-20 flex flex-col md:flex-row lg:pl-28 lg:pr-28">
        <section className="text md:w-3/5">
          <div className="header-text">
            <p className="pre-text text-xs">/ Life of the Party</p>
            <h2 className="sub-header mb-5 text-4xl leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col">
              <span>FIND ADVENTURE IN</span>
              <div className="md:w-screen relative z-10 mt-1 sm:ml-36 leading-12 sm:font-light sm:mt-2">
                YOUR OWN BACKYARD
              </div>
              <span className="sm:ml-12 leading-10 mt-1 sm:font-light sm:mt-2">
                TODAY!
              </span>
            </h2>
          </div>
          <div className="p-text sm:text-xxs mb-5 sm:max-w-64 sm:ml-32">
            <p>
              A backyard is more than just a part of the house; it's an
              extension of your family's living space and a place for cherished
              memories. With De Jesus Contracting, you can maximize your
              backyard's potential as a beautiful escape from the neighborhood
              hustle. Our expertise in hardscaping, landscaping, and
              irrigation ensures your outdoor space is not only aesthetically
              pleasing but also functional and enjoyable. Whether you're looking
              to create a serene retreat or a vibrant gathering spot, De Jesus
              Contracting offers tailored solutions to suit your needs.
              Additionally, explore our{" "}
              <span className="font-bold underline" onClick={() => props.navigateTo("/fencing")} >fencing services</span> to
              complete your ideal outdoor sanctuary with privacy and security.
            </p>
            <button className="get-started pt-2 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
              GET STARTED
            </button>
          </div>
        </section>
        <section className="image w-full bg-yellow-500 md:w-2/5">
          <div className="img remodel-img-by w-full h-full"></div>
        </section>
      </section>
    </div>
  );
};

export default Backyard;
