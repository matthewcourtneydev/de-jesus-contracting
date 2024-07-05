import React from "react";
import "./patios.css";
import logo from "../../imgs/logo.png";


import { RiPlantLine } from "react-icons/ri";
import { LuRockingChair } from "react-icons/lu";
import { MdOutlineOutdoorGrill } from "react-icons/md";





const Patios = (props) => {
  return (
    <div className="page" id="about-page">
      <div className="med-header-interior w-screen hidden md:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 max-w-28 h-3/4 mt-4 ml-20 xl:ml-52" />
      </div>
      <section className="top-section md:flex md:flex-wrap p-5 pt-20 md:pt-8 md:pb-12 md:pl-20 xl:pl-52 xl:pr-52 md:pr-20 text-light">
        <h2 className="sub-header mb-5 text-5xl leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col md:md:order-0 md:w-3/6 w-full">
          <span className="md:mt-0 text-light">PATIOS</span>
          <span className="mt-2 md:mt-2 text-light">PORCHES</span>
          <span className="mt-2 md:mt-2 text-light">AND DECKS</span>
        </h2>
        <div className="top-section-img-patio md:mb-20 md:mt-12 w-full h-60 md:order-3 bg-slate-100"></div>
        <p className="pt-5 md:w-2/6 md:pr-8 font-light sans-font lg:text-xs md:text-xxs md:pt-0 md:order-1 text-light">
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
        <button
          className="md:order-2 md:w-1/6 md:text-xxs get-started pt-2 pb-2 pl-5 pr-5 mb-5 text-light md:mt-0 md:max-h-9 mt-5 border-white border"
          onClick={() => props.navigateTo("/estimates")}
        >
          GET STARTED
        </button>
        <p className="pre-text text-lg md:text-xs sans-font mt-5 md:order-3 md:w-1/2 mb-2">
          <span className="text-xl pre-text-dark sans-font-it">
          / Make Your Dream Home a Reality
          </span>
          <h2 className="sub-header mb-5 text-4xl leading-10 text-light md:mt-2 md:text-5xl flex flex-col">
            <span className="text-light">YOU DESERVE A </span>
            <div className="md:w-screen text-light relative z-10 mt-1 md:ml-36 leading-12 md:text-light md:mt-2">
            PATIO THAT WELCOMES
            </div>
            <span className="md:ml-12 text-light leading-10 mt-1 md:text-light md:mt-2">
            YOU HOME.
            </span>
          </h2>
          <p className="pt-5 text-light text-lg font-light sans-font md:text-xs sans-font text-sm w-full md:w-full md:pl-8 md:pr-6">
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
        </p>
        <div className="top-section-img-2 remodel-img-patio md:w-1/2 md:order-5 md:m-auto w-full h-60 mt-5 bg-slate-100"></div>
      </section>

      <section className="section-two md:flex md:flex-wrap bg-white p-5 pt-10 md:pl-20 md:pr-20 xl:pl-52 xl:pr-52">
        <div className="header-text md:order-1 md:w-1/2 ">
          <p className="pre-text-light text-xl sans-font-it mb-2">
          / A Place to Unwind
          </p>
          <h2 className="sub-header mb-5 text-5xl text-dark leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col ">
            <span>CREATE A SPACE</span>
            <span className="md:ml-14 text-dark mt-1 md:mt-2">JUST FOR YOU!</span>
          </h2>
          <div className="second-section-img w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container md:order-0 md:w-1/2">
          <div className="card  min-h-fit w-full pt-5 pb-5 mt-10 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <RiPlantLine className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              Patios
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
                Patios
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
              We excel in designing and constructing new patios, tailored to enhance outdoor living spaces with quality craftsmanship and durability. Additionally, we provide comprehensive patio maintenance services to ensure your outdoor area remains beautiful and functional year-round.
              </p>
            </div>
          </div>
          <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <MdOutlineOutdoorGrill  className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sm:hidden font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
              Decks
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 hidden sm:inline sans-font font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
                Decks
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
              We specialize in building new decks with a focus on high-quality materials and expert craftsmanship, enhancing outdoor living spaces. We also provide comprehensive deck maintenance services to ensure longevity and continued enjoyment for homeowners.
              </p>
            </div>
          </div>
        

        <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
            <LuRockingChair className="m-auto mt-5 lg:mt-4 text-light" />
          </div>
          <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
            Porches
          </h4>
          <div className="wrapper md:w-4/5">
            <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              Porches
            </h4>
            <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
            We are adept at building new porches, utilizing premium materials and expert craftsmanship to enhance homes' functionality and curb appeal. Additionally, we provide dependable porch maintenance services to uphold their beauty and structural integrity, ensuring long-term satisfaction for homeowners.
            </p>
          </div>
        </div>
        </div>
              </section>
      <section className="portfolio-section flex-wrap flex flex-row text-light p-5 md:flex md:flex-wrap md:flex-row md:pl-20 md:pr-20 xl:pl-52 xl:pr-52">
        <p className="header-text sans-font-it text-xl pre-text md:ml-10 md:pl-8 md:order-1 mb-10 pt-5 w-1/2 md:w-1/6 md:pt-5">
          / Our Work
        </p>
        <div className="card  min-h-fit first-card w-full mb-5 md:order-0 md:w-2/5">
          <div className="card-img-1-patio w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">
            PATIO PROJECT
          </p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Rock Hill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit second-card md:w-1/2 md:ml-auto md:mr-0 w-full mb-5 md:order-2">
          <div className="card-img-2-patio w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">
            DECK PROJECT
          </p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Fort Mill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit third-card md:w-2/5 md:mr-20 w-full mb-5 md:order-3">
          <div className="card-img-3-patio w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold pre-text-dark text-xs font-bold mb-2">
            PORCH PROJECT
          </p>
          <p className="text-2xl text-light md:text-xl font-thin w-1/2">
            Ballantyne,
            <br /> North Carolina
          </p>
        </div>
        <div className="card  min-h-fit w-full second-card md:ml-auto md:mr-0 md:w-1/2 mb-5 md:order-4">
          <div className="card-img-4-patio w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs pre-text-dark font-bold mb-2">
            PATIO PROJECT
          </p>
          <p className="text-2xl text-light md:text-xl font-thin w-1/2">
            Charlotte,
            <br /> North Carolina
          </p>
        </div>

        <button
          className="get-started about-portfolio-btn h-fit pt-2 md:w-1/4 md:mr-60 md:order-5 pb-2 pl-5 pr-5 mt-5 border-white border"
          onClick={() => props.navigateTo("/portfolio")}
        >
          SEE MORE
        </button>
      </section>
    </div>
  );
};

export default Patios;
