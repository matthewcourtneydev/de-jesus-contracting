import React from "react";
import "./patios.css";
import logo from "../../imgs/logo.png";

const Patios = (props) => {
  return (
    <div className="page" id="interior-page">
      <div className="med-header-interior w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-12 sm:pl-20 sm:pr-20 text-white">
        <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col sm:w-3/6">
          <span className="sm:mt-0">PATIOS </span>
          <span className="mt-2 sm:mt-2">PORCHES</span>
          <span className="mt-2 sm:mt-2">AND DECKS</span>
        </h2>
        <div className="top-section-img-patio sm:mb-20 sm:mt-12 w-full h-60 sm:order-3 bg-slate-100"></div>
        <p className="pt-5 sm:w-2/6 sm:pr-8 sm:text-xxs sm:pt-0 sm:order-1">
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
        <button className="sm:order-2 sm:w-1/6 sm:text-xxs get-started pt-2 pb-2 pl-5 pr-5 text-white sm:mt-0 sm:max-h-9 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
          GET STARTED
        </button>
      </section>
      <section className="whole-dark p-5 sm:pl-20  sm:pb-20 sm:pr-20 flex flex-col md:flex-row lg:pl-28 lg:pr-28">
        <section className="text md:w-3/5">
          <div className="header-text">
            <p className="pre-text text-xs">/ Make your dream home a reality</p>
            <h2 className="sub-header mb-5 text-4xl leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col">
              <span>YOU DESERVE A</span>
              <div className="md:w-screen relative z-10 mt-1 sm:ml-36 leading-12 sm:font-light sm:mt-2">
                PATIO THAT WELCOMES
              </div>
              <span className="sm:ml-12 leading-10 mt-1 sm:font-light sm:mt-2">
                YOU HOME.
              </span>
            </h2>
          </div>
          <div className="p-text sm:text-xxs mb-5 sm:max-w-64 sm:ml-32">
            <p>
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
    </div>
  );
};

export default Patios;
