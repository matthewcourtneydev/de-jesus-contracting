import React from "react";
import "./patios.css";
import logo from "../../imgs/logo.png";

const Patios = (props) => {
  return (
    <div className="page" id="interior-page">
      <div className="med-header-interior w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-12 sm:pl-20 sm:pr-20 text-light">
        <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col sm:w-3/6">
          <span className="sm:mt-0 text-light">PATIOS </span>
          <span className="mt-2 sm:mt-2 text-light">PORCHES</span>
          <span className="mt-2 sm:mt-2 text-light">AND DECKS</span>
        </h2>
        <div className="top-section-img-patio sm:mb-20 sm:mt-12 w-full h-60 sm:order-3 bg-slate-100"></div>
        <p className="pt-5 text-light sm:w-2/6 sm:pr-8 sm:text-xxs sm:pt-0 sm:order-1">
          De Jesus Contracting excels in revitalizing existing patios, porches,
          or decks, as well as building new ones from scratch. With a focus on
          quality craftsmanship and attention to detail, our skilled team can
          transform worn-out or outdated outdoor spaces into inviting areas that
          enhance your home's charm and functionality. Whether it's repairing,
          upgrading, or completely redesigning, De Jesus Contracting ensures
          your patio, porch, or deck becomes a beautiful and welcoming extension
          of your living space, perfectly tailored to your lifestyle and
          preferences.
        </p>
        <button className="sm:order-2 sm:w-1/6 sm:text-xxs get-started pt-2 pb-2 pl-5 pr-5 text-light sm:mt-0 sm:max-h-9 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
          GET STARTED
        </button>
      </section>
      <section className="whole-dark p-5 sm:pl-20  sm:pb-20 sm:pr-20 flex flex-col md:flex-row lg:pl-28 lg:pr-28">
        <section className="text md:w-3/5">
          <div className="header-text">
            <p className="pre-text text-xs">/ Make your dream home a reality</p>
            <h2 className="sub-header mb-5 text-4xl leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col">
              <span className="text-light">YOU DESERVE A</span>
              <div className="md:w-screen  text-light relative z-10 mt-1 sm:ml-36 leading-12 sm:text-light sm:mt-2">
                PATIO THAT WELCOMES
              </div>
              <span className="sm:ml-12 text-light leading-10 mt-1 sm:text-light sm:mt-2">
                YOU HOME.
              </span>
            </h2>
          </div>
          <div className="p-text text-light sm:text-xxs mb-5 sm:max-w-64 sm:ml-32">
            <p className="text-light">
              Adding a new porch, patio, or deck can significantly elevate your
              living experience by expanding your usable space outdoors. These
              additions provide areas for relaxation, entertaining guests, or
              enjoying meals with family. De Jesus Contracting specializes in
              turning these dreams into reality by designing and constructing
              custom outdoor spaces that blend seamlessly with your home's
              architecture and landscape. With attention to detail and quality
              craftsmanship, we ensure your new porch, patio, or deck not only
              enhances the aesthetics of your property but also adds functional
              value, creating a welcoming and enjoyable environment for years to
              come.
            </p>
            <button className="get-started pt-2 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
              GET STARTED
            </button>
          </div>
        </section>
        <section className="image w-full bg-yellow-500 md:w-2/5">
          <div className="img remodel-img-patio w-full h-full"></div>
        </section>
      </section>
      <section className="section-two sm:flex sm:flex-wrap bg-white p-5 pt-10 sm:pl-20 sm:pr-20">
        <div className="header-text sm:order-1 sm:w-1/2 ">
          <p className="pre-text text-xs">/ A Place to Unwind</p>
          <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col ">
            <span>CREATE A SPACE</span>
            <span className="sm:ml-20 mt-1 sm:mt-2">JUST FOR YOU</span>
          </h2>
          <div className="second-section-img w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container sm:order-0 sm:w-1/2">
          <div className="card w-full pt-5 pb-5 mt-10 sm:mt-0 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Patios
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              We excel in designing and constructing new patios, tailored to enhance outdoor living spaces with quality craftsmanship and durability. Additionally, we provide comprehensive patio maintenance services to ensure your outdoor area remains beautiful and functional year-round.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Decks
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              We specialize in building new decks with a focus on high-quality materials and expert craftsmanship, enhancing outdoor living spaces. We also provide comprehensive deck maintenance services to ensure longevity and continued enjoyment for homeowners.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Porches
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              We are adept at building new porches, utilizing premium materials and expert craftsmanship to enhance homes' functionality and curb appeal. Additionally, we provide dependable porch maintenance services to uphold their beauty and structural integrity, ensuring long-term satisfaction for homeowners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patios;
