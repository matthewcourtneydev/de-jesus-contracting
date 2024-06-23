import React from "react";
import "./about.css";
import logo from "../../imgs/logo.png";

const About = (props) => {
  return (
    <div className="page" id="about-page">
      <div className="med-header-about w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-12 sm:pl-20 sm:pr-20 text-light">
        <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col sm:w-3/6">
          <span className="sm:mt-0 text-light">ABOUT </span>
          <span className="mt-2 sm:mt-2 text-light">OUR TEAM</span>
        </h2>
        <div className="top-section-img sm:mb-20 sm:mt-12 w-full h-60 sm:order-3 bg-slate-100"></div>
        <p className="pt-5 sm:w-2/6 sm:pr-8 sm:text-xxs sm:pt-0 sm:order-1 text-light">
          De Jesus Contracting offers a wide array of construction and
          renovation services in Rock Hill, SC. From roofing and siding to
          painting, flooring, hardscaping, and more, we specialize in both
          residential and commercial projects. With a focus on quality
          craftsmanship and customer satisfaction, we aim to enhance the
          functionality, beauty, and value of every property we work on,
          delivering exceptional results that exceed expectations.
        </p>
        <button className="sm:order-2 sm:w-1/6 sm:text-xxs get-started pt-2 pb-2 pl-5 pr-5 text-light sm:mt-0 sm:max-h-9 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
          GET STARTED
        </button>
        <p className="header-text pre-text sm:order-4 sm:mt-5 mt-10 w-full pt-5 sm:w-1/2 sm:text-xs md:pt-5">
          / Who We Are
          <p className="pt-5 text-light w-full sm:w-3/4 sm:text-xxs sm:pl-8 sm:pr-5">
            De Jesus Contracting emerged as a local Rock Hill, SC contracting
            company in response to the aftermath of devastating hail storms in
            2024. The community faced a shortage of available, quality
            contractors who weren't booked months in advance. Out of necessity,
            De Jesus Contracting was founded to fill this gap and deliver the
            superior quality and service that Rock Hill deserves. Committed to
            meeting the area's needs promptly and effectively, our team
            continues to prioritize excellence in every project, ensuring homes
            and businesses receive the care and attention they deserve.
          </p>
        </p>
        <div className="top-section-img-2 sm:w-1/2 sm:order-5 w-full h-60 mt-5 bg-slate-100"></div>
      </section>

      <section className="section-two sm:flex sm:flex-wrap bg-white p-5 pt-10 sm:pl-20 sm:pr-20">
        <div className="header-text sm:order-1 sm:w-1/2 ">
          <p className="pre-text text-xs">/ The De Jesus Difference</p>
          <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col ">
            <span>WHAT MAKES US</span>
            <span className="sm:ml-40 mt-1 sm:mt-2">DIFFERENT</span>
          </h2>
          <div className="second-section-img w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container sm:order-0 sm:w-1/2">
          <div className="card w-full pt-5 pb-5 mt-10 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Quality and Precision
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
                Quality and precision are key at De Jesus Contracting. Our
                meticulous craftsmanship ensures every project exceeds industry
                standards, resulting in durable, aesthetically pleasing
                outcomes. By minimizing errors and maximizing client
                satisfaction, we enhance the value and functionality of homes
                and businesses, creating lasting, exceptional spaces.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:mb-1 sm:text-sm text-lg">
                Integrity
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
                Integrity is a core value at De Jesus Contracting. We prioritize
                transparency, honesty, and ethics, building trust through
                reliable service and quality results. Our commitment ensures
                honest assessments, fair pricing, and consistent excellence,
                fostering long-term relationships and a strong reputation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-section  text-light p-5 sm:flex sm:flex-wrap sm:flex-row sm:pl-20 sm:pr-20">
        <p className="header-text pre-text sm:ml-10 sm:pl-8 sm:order-1 mb-10 pt-5 w-1/2 md:w-1/6 md:pt-5">
          / Our Work
        </p>
        <div className="card first-card w-full mb-5 sm:order-0 sm:w-2/5">
          <div className="card-img-1 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-sm font-bold mb-2 text-light">BATHROOM REMODEL</p>
          <p className="text-2xl sm:text-xl font-thin w-1/2 text-light">
            Rock Hill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card second-card sm:w-1/2 sm:ml-auto sm:mr-0 w-full mb-5 sm:order-2">
          <div className="card-img-2 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-sm font-bold mb-2 text-light">KITCHEN REMODEL</p>
          <p className="text-2xl sm:text-xl font-thin w-1/2 text-light">
            Fort Mill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card third-card sm:w-2/5 sm:mr-20 w-full mb-5 sm:order-3">
          <div className="card-img-3 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-light text-sm font-bold mb-2">HARDSCAPE / DECK</p>
          <p className="text-2xl text-light sm:text-xl font-thin w-1/2">
            Ballantyne,
            <br /> North Carolina
          </p>
        </div>
        <div className="card w-full second-card sm:ml-auto sm:mr-0 sm:w-1/2 mb-5 sm:order-4">
          <div className="card-img-4 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-light text-sm font-bold mb-2">BEDROOM REMODEL</p>
          <p className="text-2xl text-light sm:text-xl font-thin w-1/2">
            Charlotte,
            <br /> North Carolina
          </p>
        </div>

        <button className="get-started about-portfolio-btn h-fit pt-2 sm:w-1/4 sm:mr-60 sm:order-5 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/portfolio")}>
          SEE MORE
        </button>
      </section>
    </div>
  );
};

export default About;
