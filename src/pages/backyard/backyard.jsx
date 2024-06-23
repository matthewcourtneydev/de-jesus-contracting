import React from "react";
import "./backyard.css";
import logo from "../../imgs/logo.png";

const Backyard = (props) => {
  return (
    <div className="page" id="interior-page">
      <div className="med-header-interior w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-12 sm:pl-20 sm:pr-20 text-light">
        <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col sm:w-3/6">
          <span className="sm:mt-0 text-light">BACKYARD</span>
          <span className="mt-2 sm:mt-2 text-light">SERVICES</span>
        </h2>
        <div className="top-section-img-by sm:mb-20 sm:mt-12 w-full h-60 sm:order-3 bg-slate-100"></div>
        <p className="pt-5 text-light sm:w-2/6 sm:pr-8 sm:text-xxs sm:pt-0 sm:order-1">
          De Jesus Contracting enhances your backyard with expert hardscaping,
          concrete, irrigation, and landscaping services. From durable patios
          and pathways to lush greenery and efficient irrigation systems, our
          skilled team transforms outdoor spaces with creativity and precision.
          Whether you desire a serene retreat or an inviting entertainment area,
          De Jesus Contracting ensures your backyard exceeds expectations,
          enhancing both beauty and functionality.
        </p>
        <button className="sm:order-2 sm:w-1/6 sm:text-xxs get-started pt-2 pb-2 pl-5 pr-5 text-light sm:mt-0 sm:max-h-9 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
          GET STARTED
        </button>
      </section>
      <section className="whole-dark p-5 sm:pl-20  sm:pb-20 sm:pr-20 flex flex-col md:flex-row lg:pl-28 lg:pr-28">
        <section className="text md:w-3/5">
          <div className="header-text">
            <p className="pre-text text-xs">/ Life of the Party</p>
            <h2 className="sub-header mb-5 text-4xl leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col">
              <span className="text-light">FIND ADVENTURE IN</span>
              <div className="md:w-screen text-light relative z-10 mt-1 sm:ml-36 leading-12 sm:text-light sm:mt-2">
                YOUR OWN BACKYARD
              </div>
              <span className="sm:ml-12 text-light leading-10 mt-1 sm:text-light sm:mt-2">
                TODAY!
              </span>
            </h2>
          </div>
          <div className="p-text sm:text-xxs mb-5 sm:max-w-64 sm:ml-32">
            <p className="text-light">
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
            <button className="get-started text-light pt-2 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
              GET STARTED
            </button>
          </div>
        </section>
        <section className="image w-full bg-yellow-500 md:w-2/5">
          <div className="img remodel-img-by w-full h-full"></div>
        </section>
      </section>
      <section className="section-two sm:flex sm:flex-wrap bg-white p-5 pt-10 sm:pl-20 sm:pr-20">
        <div className="header-text sm:order-1 sm:w-1/2 ">
          <p className="pre-text text-xs">/ Creative Spaces</p>
          <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col ">
            <span>YOUR BACKYARD</span>
            <span className="sm:ml-24 mt-1 sm:mt-2">REIMAGINED!</span>
          </h2>
          <div className="second-section-img w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container sm:order-0 sm:w-1/2">
          <div className="card w-full pt-5 pb-5 mt-10 sm:mt-0 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Hardscape
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              
Hardscaping can dramatically enhance a backyard by integrating decorative elements such as pavers and garden borders with functional features like retaining walls and outdoor seating areas. We excel in creating outdoor spaces that balance beauty and usability, ensuring durable structures that blend harmoniously with the natural landscape.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Landscape
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              Landscaping transforms a backyard by combining visual elements like plants and gardens with functional additions such as pathways and irrigation systems. We succeed in designing outdoor spaces that harmonize beauty and practicality, ensuring each landscape complements the environment with durable and attractive features.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Irrigation
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              Irrigation can dramatically enhance a backyard, serving practical needs like maintaining greenery with sprinklers and adding aesthetic value through decorative fountains and water features. De Jesus Contracting excels in designing outdoor spaces that balance functionality with visual appeal, ensuring efficient water use and creating a serene atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Backyard;
