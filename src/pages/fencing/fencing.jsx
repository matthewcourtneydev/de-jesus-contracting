import React from "react";
import "./fencing.css";
import logo from "../../imgs/logo.png";


import { GiOasis } from "react-icons/gi";
import { MdOutlinePrivacyTip, MdOutlineFence } from "react-icons/md";






const Fencing = (props) => {
  return (
    <div className="page" id="about-page">
      <div className="med-header-interior w-screen hidden md:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 max-w-28 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section md:flex md:flex-wrap p-5 pt-20 md:pt-8 md:pb-12 md:pl-20 xl:pl-52 xl:pr-52 md:pr-20 text-light">
        <h2 className="sub-header mb-5 text-5xl leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col md:md:order-0 md:w-3/6 w-full">
          <span className="md:mt-0 text-light">FENCING</span>
          <span className="mt-2 md:mt-2 text-light">SERVICES</span>
        </h2>
        <div className="top-section-img md:mb-20 md:mt-12 w-full h-60 md:order-3 bg-slate-100"></div>
        <p className="pt-5 md:w-2/6 md:pr-8 font-light sans-font lg:text-xs md:text-xxs md:pt-0 md:order-1 text-light">
        De Jesus Contracting specializes in fencing, offering a variety of styles and materials. Whether extending, repairing existing fences, or building new ones, our skilled team ensures quality craftsmanship and attention to detail. We prioritize durability, security, and aesthetic appeal, aiming to exceed your expectations with each project.
        </p>
        <button
          className="md:order-2 md:w-1/6 md:text-xxs get-started pt-2 pb-2 pl-5 pr-5 mb-5 text-light md:mt-0 md:max-h-9 mt-5 border-white border"
          onClick={() => props.navigateTo("/estimates")}
        >
          GET STARTED
        </button>
        <p className="pre-text text-lg md:text-xs sans-font mt-5 md:order-3 md:w-1/2 mb-2">
          <span className="text-xl pre-text-dark sans-font-it">
          / Privacy and Comfort
          </span>
          <h2 className="sub-header mb-5 text-4xl leading-10 text-light md:mt-2 md:text-5xl flex flex-col">
            <span className="text-light">PEACE OF MIND</span>
            <div className="md:w-screen text-light relative z-10 mt-1 md:ml-36 leading-12 md:text-light md:mt-2">
            IS ONLY A FEW FENCE
            </div>
            <span className="md:ml-12 text-light leading-10 mt-1 md:text-light md:mt-2">
            POSTS AWAY!
            </span>
          </h2>
          <p className="pt-5 text-light text-lg font-light sans-font md:text-xs sans-font text-sm w-full md:w-full md:pl-8 md:pr-6">
          Fencing serves as more than a physical barrier—it provides
              security, privacy, and peace of mind for your home and family. De
              Jesus Contracting understands the importance of a secure
              environment, whether you seek to keep unwanted visitors or animals
              out, protect your family, or create a private sanctuary in your
              yard. Whether it's allowing your dog to roam freely or enjoying
              uninterrupted privacy, our fencing solutions are tailored to meet
              your specific needs and enhance your outdoor living experience.
          </p>
        </p>
        <div className="top-section-img-2 md:w-1/2 md:order-5 md:m-auto w-full h-60 mt-5 bg-slate-100"></div>
      </section>

      <section className="section-two md:flex md:flex-wrap bg-white p-5 pt-10 md:pl-20 md:pr-20 xl:pl-52 xl:pr-52">
        <div className="header-text md:order-1 md:w-1/2 ">
          <p className="pre-text-light text-xl sans-font-it mb-2">
          / Protect Your Space
          </p>
          <h2 className="sub-header mb-5 text-5xl text-dark leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col ">
            <span>KEEP WHAT</span>
            <span className="md:ml-10 text-dark mt-1 md:mt-2">YOU LOVE SAFE.</span>
          </h2>
          <div className="second-section-img w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container md:order-0 md:w-1/2">
          <div className="card  min-h-fit w-full pt-5 pb-5 mt-10 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <MdOutlinePrivacyTip className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
             Privacy
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
               Privacy
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
              Fences offer essential privacy by defining boundaries and
                shielding outdoor areas from public view, ensuring homeowners
                can enjoy their property in peace and security.
              </p>
            </div>
          </div>
          <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <MdOutlineFence  className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sm:hidden font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
              Boundaries
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 hidden sm:inline sans-font font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
                Boundaries
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
              Fences define property boundaries, prevent disputes, enhance
                curb appeal, and boost security by restricting access.
              </p>
            </div>
          </div>
        <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
            <GiOasis className="m-auto mt-5 lg:mt-4 text-light" />
          </div>
          <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
            Beauty
          </h4>
          <div className="wrapper md:w-4/5">
            <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              Beauty
            </h4>
            <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
            Fences enhance residential homes aesthetically by complementing
                architectural styles, adding character, and improving curb
                appeal. They serve as a cohesive element in landscaping,
                providing a backdrop for gardens and outdoor spaces that
                beautify the property.
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
          <div className="card-img-1 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">
            PATIO PROJECT
          </p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Rock Hill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit second-card md:w-1/2 md:ml-auto md:mr-0 w-full mb-5 md:order-2">
          <div className="card-img-2 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">
            DECK PROJECT
          </p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Fort Mill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit third-card md:w-2/5 md:mr-20 w-full mb-5 md:order-3">
          <div className="card-img-3 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold pre-text-dark text-xs font-bold mb-2">
            SIDING PROJECT
          </p>
          <p className="text-2xl text-light md:text-xl font-thin w-1/2">
            Ballantyne,
            <br /> North Carolina
          </p>
        </div>
        <div className="card  min-h-fit w-full second-card md:ml-auto md:mr-0 md:w-1/2 mb-5 md:order-4">
          <div className="card-img-4 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs pre-text-dark font-bold mb-2">
            WINDOW PROJECT
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

export default Fencing;
