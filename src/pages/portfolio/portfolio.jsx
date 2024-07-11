import { React, useState } from "react";
import "./portfolio.css";
import logo from "../../imgs/logo.png";

const Portfolio = (props) => {
  const [filterItem, setFilterItem] = useState(0);

  const filterData = [
    {
      titleOne: "INTERIOR",
      titleTwo: "PROJECTS",
    message: "Thinking about your dream interior? We can help you see it come to life!",
      projectOne: {
        class: "interior-one",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectTwo: {
        class: "interior-two",
        city: "Charlotte",
        state: "North Carolina",
      },
      projectThree: {
        class: "interior-three",
        city: "Fort Mill",
        state: "South Carolina",
      },
      projectFour: {
        class: "interior-four",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectFive: {
        class: "interior-five",
        city: "Charlotte",
        state: "North Carolina",
      }
    },
    {
      titleOne: "EXTERIOR",
      titleTwo: "PROJECTS",
      message: "Get the curb apeal you alwyas wanted! Reach out today!",
      projectOne: {
        class: "exterior-one",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectTwo: {
        class: "exterior-two",
        city: "Charlotte",
        state: "North Carolina",
      },
      projectThree: {
        class: "exterior-three",
        city: "Fort Mill",
        state: "South Carolina",
      },
      projectFour: {
        class: "exterior-four",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectFive: {
        class: "exterior-five",
        city: "Charlotte",
        state: "North Carolina",
      }
    },
    {
      titleOne: "PATIO/DECK",
      titleTwo: "PROJECTS",
      message: "Enjoy your morning coffee in style. Reach out so we can make it happen!",
      projectOne: {
        class: "patio-one",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectTwo: {
        class: "patio-two",
        city: "Charlotte",
        state: "North Carolina",
      },
      projectThree: {
        class: "patio-three",
        city: "Fort Mill",
        state: "South Carolina",
      },
      projectFour: {
        class: "patio-four",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectFive: {
        class: "patio-five",
        city: "Charlotte",
        state: "North Carolina",
      }
    },
    {
      titleOne: "BACKYARD",
      titleTwo: "PROJECTS",
      message: "Make your backyard a santuary today. Reach out now!",
      projectOne: {
        class: "backyard-one",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectTwo: {
        class: "backyard-two",
        city: "Charlotte",
        state: "North Carolina",
      },
      projectThree: {
        class: "backyard-three",
        city: "Fort Mill",
        state: "South Carolina",
      },
      projectFour: {
        class: "backyard-four",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectFive: {
        class: "backyard-five",
        city: "Charlotte",
        state: "North Carolina",
      }
    },
    {
      titleOne: "FENCING",
      titleTwo: "PROJECTS",
      message: "Let the dogs out with no worries. Our fencing specialists are here to help",
      projectOne: {
        class: "fencing-one",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectTwo: {
        class: "fencing-two",
        city: "Charlotte",
        state: "North Carolina",
      },
      projectThree: {
        class: "fencing-three",
        city: "Fort Mill",
        state: "South Carolina",
      },
      projectFour: {
        class: "fencing-four",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectFive: {
        class: "fencing-five",
        city: "Charlotte",
        state: "North Carolina",
      }
    },
  ];

  const filterDataEs = [
    {
      titleOne: "PROYECTOS DE",
      titleTwo: "INTERIORES",
    message: "¿Estás pensando en el interior de tus sueños? ¡Podemos ayudarte a verlo cobrar vida!",
      projectOne: {
        class: "interior-one",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectTwo: {
        class: "interior-two",
        city: "Charlotte",
        state: "North Carolina",
      },
      projectThree: {
        class: "interior-three",
        city: "Fort Mill",
        state: "South Carolina",
      },
      projectFour: {
        class: "interior-four",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectFive: {
        class: "interior-five",
        city: "Charlotte",
        state: "North Carolina",
      }
    },
    {
      titleOne: "EXTERIOR",
      titleTwo: "PROYECTOS",
      message: "Get the curb apeal you alwyas wanted! Reach out today!",
      projectOne: {
        class: "exterior-one",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectTwo: {
        class: "exterior-two",
        city: "Charlotte",
        state: "North Carolina",
      },
      projectThree: {
        class: "exterior-three",
        city: "Fort Mill",
        state: "South Carolina",
      },
      projectFour: {
        class: "exterior-four",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectFive: {
        class: "exterior-five",
        city: "Charlotte",
        state: "North Carolina",
      }
    },
    {
      titleOne: "PATIO/DECK",
      titleTwo: "PATIO Y DECK",
      message: "Enjoy your morning coffee in style. Reach out so we can make it happen!",
      projectOne: {
        class: "patio-one",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectTwo: {
        class: "patio-two",
        city: "Charlotte",
        state: "North Carolina",
      },
      projectThree: {
        class: "patio-three",
        city: "Fort Mill",
        state: "South Carolina",
      },
      projectFour: {
        class: "patio-four",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectFive: {
        class: "patio-five",
        city: "Charlotte",
        state: "North Carolina",
      }
    },
    {
      titleOne: "BACKYARD",
      titleTwo: "PATIO TRASERO",
      message: "Make your backyard a santuary today. Reach out now!",
      projectOne: {
        class: "backyard-one",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectTwo: {
        class: "backyard-two",
        city: "Charlotte",
        state: "North Carolina",
      },
      projectThree: {
        class: "backyard-three",
        city: "Fort Mill",
        state: "South Carolina",
      },
      projectFour: {
        class: "backyard-four",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectFive: {
        class: "backyard-five",
        city: "Charlotte",
        state: "North Carolina",
      }
    },
    {
      titleOne: "FENCING",
      titleTwo: "CERCADO",
      message: "Let the dogs out with no worries. Our fencing specialists are here to help",
      projectOne: {
        class: "fencing-one",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectTwo: {
        class: "fencing-two",
        city: "Charlotte",
        state: "North Carolina",
      },
      projectThree: {
        class: "fencing-three",
        city: "Fort Mill",
        state: "South Carolina",
      },
      projectFour: {
        class: "fencing-four",
        city: "Rock Hill",
        state: "South Carolina",
      },
      projectFive: {
        class: "fencing-five",
        city: "Charlotte",
        state: "North Carolina",
      }
    },
  ];

  function handleFilter(id) {
    setFilterItem((prev) => id)
  }

  return (
    <div className="page" id="portfolio-page">
      <div className="med-header-interior w-screen hidden md:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 max-w-28 h-3/4 mt-4 ml-20 xl:ml-52" />
      </div>
      <section className="top-section md:flex md:flex-wrap p-5 pt-20 md:pt-8 md:pb-10 md:pl-20 md:pr-20 text-light xl:pl-52 xl:pr-52">
        <h2 className="sub-header mb-5 md:mb-0 text-5xl leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col md:flex-row md:w-3/6">
          <span className="md:mt-0 text-light">{filterData[filterItem].titleOne}</span>
          <span className="mt-2 md:mt-0 md:ml-3 text-light">
            {filterData[filterItem].titleTwo}
          </span>
        </h2>
      </section>
      <section className="filter-items">
        <ul className="flex md:pl-20 md:pr-20 xl:pl-48 text-light font-bold flex-row w-full overflow-y-scroll">
          <li onClick={() => handleFilter(0)} className="flex flex-col w-fit p-5  pt-0 text-center">
            <span className="top-filter interior rounded-full mb-2 aspect-square w-20 h-20"></span>
            <span className="bottom-filter text-light w-20 text-xs">
              {props.isSpanish ? "PROYECTOS DE INTERIORES" : "INTERIOR PROJECTS"}
            </span>
          </li>
          <li onClick={() => handleFilter(1)} className="flex flex-col w-fit p-5 pt-0 text-center">
            <span className="top-filter exterior rounded-full mb-2 aspect-square w-20 h-20"></span>
            <span className="bottom-filter text-light w-20 text-xs">
            {props.isSpanish ? "PROYECTOS EXTERIORES" : "EXTERIOR PROJECTS"}
            </span>
          </li>
          <li onClick={() => handleFilter(2)} className="flex flex-col w-fit p-5 pt-0 text-center">
            <span className="top-filter patios rounded-full mb-2 aspect-square w-20 h-20"></span>
            <span className="bottom-filter text-light w-20 text-xs">
            {props.isSpanish ? "PROYECTOS DE PATIO Y DECK" : "PATIO/DECK PROJECTS"}
            </span>
          </li>
          <li onClick={() => handleFilter(3)} className="flex flex-col w-fit p-5 pt-0 text-center">
            <span className="top-filter backyard rounded-full mb-2 aspect-square w-20 h-20"></span>
            <span className="bottom-filter text-light w-20 text-xs">
            {props.isSpanish ? "PROYECTOS DE PATIO TRASERO" : "BACKYARD PROJECTS"}
            </span>
          </li>
          <li onClick={() => handleFilter(4)} className="flex flex-col w-fit p-5 pt-0 text-center">
            <span className="top-filter fencing rounded-full mb-2 aspect-square w-20 h-20"></span>
            <span className="bottom-filter text-light w-20 text-xs">
            {props.isSpanish ? "PROYECTOS DE CERCADO" : "FENCING PROJECTS"}</span>
          </li>
        </ul>
      </section>
      <section className="projects pt-10 text-light pl-5 pr-5 md:pl-20 md:pr-20 xl:pl-52 xl:pr-52 md:flex md:flex-wrap">
        <div className="card w-full pb-5 md:w-2/6">
          <div className={`${filterData[filterItem].projectOne.class} card-img-1 w-full h-52 mb-5 bg-green-300`}></div>
          <p className="text-bold text-light text-sm font-bold mb-2">
                       {props.isSpanish ? "PROYECTO DE" : filterData[filterItem].titleOne} {props.isSpanish ? filterDataEs[filterItem].titleTwo : "PROJECT"}
          </p>
          <p className="text-2xl text-light md:text-base font-thin w-1/2">
            {filterData[filterItem].projectOne.city},
            <br /> {filterData[filterItem].projectOne.state}
          </p>
        </div>
        <div className="card w-full pb-5 md:p-10 md:pt-20 md:w-4/6">
          <div className={`${filterData[filterItem].projectTwo.class} md:h-80 card-img-1 w-full h-52 mb-5 bg-green-300`}></div>
          <p className="text-bold text-light text-sm font-bold mb-2">
                       {props.isSpanish ? "PROYECTO DE" : filterData[filterItem].titleOne} {props.isSpanish ? filterDataEs[filterItem].titleTwo : "PROJECT"}
          </p>
          <p className="text-2xl text-light md:text-base font-thin w-1/2">
            {filterData[filterItem].projectTwo.city},
            <br /> {filterData[filterItem].projectTwo.state}
          </p>
        </div>
        <div className="card w-full pb-5 md:w-4/5 md:m-auto md:mt-10">
          <div className={`${filterData[filterItem].projectThree.class} md:h-80 card-img-1 w-full h-52 mb-5 bg-green-300`}></div>
          <p className="text-bold text-light text-sm font-bold mb-2">
            {props.isSpanish ? "PROYECTO DE" : filterData[filterItem].titleOne} {props.isSpanish ? filterDataEs[filterItem].titleTwo : "PROJECT"}
          </p>
          <p className="text-2xl text-light md:text-base font-thin w-1/2">
            {filterData[filterItem].projectThree.city},
            <br /> {filterData[filterItem].projectThree.state}
          </p>
        </div>
        <div className="card w-full pb-5 md:mt-10 md:w-2/6">
          <div className={`${filterData[filterItem].projectFour.class} card-img-1 w-full h-52 mb-5 bg-green-300`}></div>
          <p className="text-bold text-light text-sm font-bold mb-2">
                       {props.isSpanish ? "PROYECTO DE" : filterData[filterItem].titleOne} {props.isSpanish ? filterDataEs[filterItem].titleTwo : "PROJECT"}
          </p>
          <p className="text-2xl text-light md:text-base font-thin w-1/2">
            {filterData[filterItem].projectFour.city},
            <br /> {filterData[filterItem].projectFour.state}
          </p>
        </div>
        <div className="card w-full pb-5 md:p-10 md:pt-20 md:w-4/6">
          <div className={`${filterData[filterItem].projectFive.class} md:h-80 card-img-1 w-full h-52 mb-5 bg-green-300`}></div>
          <p className="text-bold text-light text-sm font-bold mb-2">
                       {props.isSpanish ? "PROYECTO DE" : filterData[filterItem].titleOne} {props.isSpanish ? filterDataEs[filterItem].titleTwo : "PROJECT"}
          </p>
          <p className="text-2xl text-light md:text-base font-thin w-1/2">
            {filterData[filterItem].projectFive.city},
            <br /> {filterData[filterItem].projectFive.state}
          </p>
        </div>
        <div className="card w-full pb-5 mt-10 md:mt-0 md:w-2/6">
            <p className="w-1/2 md:w-full text-xs">{props.isSpanish ? filterDataEs[filterItem].message : filterData[filterItem].message}</p>
            <button className="get-started pt-2 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
            {props.isSpanish ? "EMPEZAR" : "GET STARTED"}
          </button>
        </div>
        
      </section>
    </div>
  );
};

export default Portfolio;
