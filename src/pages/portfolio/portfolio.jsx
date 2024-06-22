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

  function handleFilter(id) {
    setFilterItem((prev) => id)
  }

  return (
    <div className="page" id="portfolio-page">
      <div className="med-header-interior w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-10 sm:pl-20 sm:pr-20 text-white">
        <h2 className="sub-header mb-5 sm:mb-0 text-5xl leading-10 sm:leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col sm:flex-row sm:w-3/6">
          <span className="sm:mt-0">{filterData[filterItem].titleOne}</span>
          <span className="mt-2 sm:mt-0 sm:ml-3">
            {filterData[filterItem].titleTwo}
          </span>
        </h2>
      </section>
      <section className="filter-items">
        <ul className="flex sm:pl-20 sm:pr-20 text-white font-bold flex-row w-full overflow-y-scroll">
          <li onClick={() => handleFilter(0)} className="flex flex-col w-fit p-5  pt-0 text-center">
            <span className="top-filter bg-red-400 rounded-full mb-2 aspect-square w-20 h-20"></span>
            <span className="bottom-filter w-20 text-xs">
              INTERIOR PROJECTS
            </span>
          </li>
          <li onClick={() => handleFilter(1)} className="flex flex-col w-fit p-5 pt-0 text-center">
            <span className="top-filter bg-red-400 rounded-full mb-2 aspect-square w-20 h-20"></span>
            <span className="bottom-filter w-20 text-xs">
              EXTERIOR PROJECTS
            </span>
          </li>
          <li onClick={() => handleFilter(2)} className="flex flex-col w-fit p-5 pt-0 text-center">
            <span className="top-filter bg-red-400 rounded-full mb-2 aspect-square w-20 h-20"></span>
            <span className="bottom-filter w-20 text-xs">
              PATIO/DECK PROJECTS
            </span>
          </li>
          <li onClick={() => handleFilter(3)} className="flex flex-col w-fit p-5 pt-0 text-center">
            <span className="top-filter bg-red-400 rounded-full mb-2 aspect-square w-20 h-20"></span>
            <span className="bottom-filter w-20 text-xs">
              BACKYARD PROJECTS
            </span>
          </li>
          <li onClick={() => handleFilter(4)} className="flex flex-col w-fit p-5 pt-0 text-center">
            <span className="top-filter bg-red-400 rounded-full mb-2 aspect-square w-20 h-20"></span>
            <span className="bottom-filter w-20 text-xs">FENCING PROJECTS</span>
          </li>
        </ul>
      </section>
      <section className="projects pt-10 text-white pl-5 pr-5 sm:pl-20 sm:pr-20 sm:flex sm:flex-wrap">
        <div className="card w-full pb-5 sm:w-2/6">
          <div className={`${filterData[filterItem].projectOne.class} card-img-1 w-full h-52 mb-5 bg-green-300`}></div>
          <p className="text-bold text-sm font-bold mb-2">
            {filterData[filterItem].titleOne} PROJECT
          </p>
          <p className="text-2xl sm:text-base font-thin w-1/2">
            {filterData[filterItem].projectOne.city},
            <br /> {filterData[filterItem].projectOne.state}
          </p>
        </div>
        <div className="card w-full pb-5 sm:p-10 sm:pt-20 sm:w-4/6">
          <div className={`${filterData[filterItem].projectTwo.class} sm:h-80 card-img-1 w-full h-52 mb-5 bg-green-300`}></div>
          <p className="text-bold text-sm font-bold mb-2">
            {filterData[filterItem].titleOne} PROJECT
          </p>
          <p className="text-2xl sm:text-base font-thin w-1/2">
            {filterData[filterItem].projectTwo.city},
            <br /> {filterData[filterItem].projectTwo.state}
          </p>
        </div>
        <div className="card w-full pb-5 sm:w-4/5 sm:m-auto sm:mt-10">
          <div className={`${filterData[filterItem].projectThree.class} sm:h-80 card-img-1 w-full h-52 mb-5 bg-green-300`}></div>
          <p className="text-bold text-sm font-bold mb-2">
            {filterData[filterItem].titleOne} PROJECT
          </p>
          <p className="text-2xl sm:text-base font-thin w-1/2">
            {filterData[filterItem].projectThree.city},
            <br /> {filterData[filterItem].projectThree.state}
          </p>
        </div>
        <div className="card w-full pb-5 sm:mt-10 sm:w-2/6">
          <div className={`${filterData[filterItem].projectFour.class} card-img-1 w-full h-52 mb-5 bg-green-300`}></div>
          <p className="text-bold text-sm font-bold mb-2">
            {filterData[filterItem].titleOne} PROJECT
          </p>
          <p className="text-2xl sm:text-base font-thin w-1/2">
            {filterData[filterItem].projectFour.city},
            <br /> {filterData[filterItem].projectFour.state}
          </p>
        </div>
        <div className="card w-full pb-5 sm:p-10 sm:pt-20 sm:w-4/6">
          <div className={`${filterData[filterItem].projectFive.class} sm:h-80 card-img-1 w-full h-52 mb-5 bg-green-300`}></div>
          <p className="text-bold text-sm font-bold mb-2">
            {filterData[filterItem].titleOne} PROJECT
          </p>
          <p className="text-2xl sm:text-base font-thin w-1/2">
            {filterData[filterItem].projectFive.city},
            <br /> {filterData[filterItem].projectFive.state}
          </p>
        </div>
        <div className="card w-full pb-5 mt-10 sm:mt-0 sm:w-2/6">
            <p className="w-1/2 sm:w-full text-xs">{filterData[filterItem].message}</p>
            <button className="get-started pt-2 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
            GET STARTED
          </button>
        </div>
        
      </section>
    </div>
  );
};

export default Portfolio;
