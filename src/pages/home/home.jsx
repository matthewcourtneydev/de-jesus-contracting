import { React, useState } from "react";
import "./home.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Home = (props) => {
  const [carouselIteration, updateCarousel] = useState(0);
  const carouselClasses = [
    {
      class: "exterior",
      content:
        "Quality exterior renovations not only enhance a home's value but also increase happiness by improving curb appeal, structural integrity, and energy efficiency. Professional craftsmanship and high-quality materials in projects like roofing, siding, and window replacements create a more comfortable and enjoyable living environment while boosting market appeal and property value. Whether through updating the facade or creating inviting outdoor spaces with new decks and patios, these renovations bring lasting satisfaction to homeowners.",
    },
    {
      class: "interior",
      content:
        "As a local contractor, we offer the assurance of working with a neighbor who values community. At De Jesus Contracting, we approach every job with professionalism and attention to detail, ensuring your comfort and security throughout. With our local expertise, we understand your specific needs and deliver high-quality solutions, from roofing and siding to windows and beyond, ensuring the job is done right the first time.",
    },
    {
      class: "patios",
      content:
        "As a small company, we are committed to treating your projects with the same care and attention as if they were our own. When you contact us with questions about a job or a quote, you won't encounter automated systems or robots—instead, you'll speak directly with Chris, the owner. We prioritize direct communication and personalized service to ensure your needs are understood and met effectively.",
    }
  ];

  function handleCarousel(action) {
    if (carouselIteration < 2 && action === "INC") {
      updateCarousel((prev) => prev + 1);
    } else if (carouselIteration > 0 && action === "DEC") {
      updateCarousel((prev) => prev - 1);
    }
  }

  return (
    <div className="page md:text-xs" id="home">
      <header className="flex flex-col-reverse md:flex-row ">
        <section className="left w-full h-full md:w-1/2"></section>
        <section className="right pb-9 pt-20 lg:pt-28 pl-5 pr-5 w-full h-full md:w-1/2 lg:pr-24 xl:pr-52 min-h-100%">
          <h1 className="home-header flex flex-col">
            <span className="text-7xl font-light md:ml-5  md:text-6xl lg:text-7xl leading-10 lg:mt-0 md:mt-5 text-light">
              Precision
            </span>
            <span className=" text-light font-light ml-24 text-7xl md:ml-32 md:text-6xl lg:text-7xl lg:mt-10 leading-10 mt-7 md:mt-5">
              Integrity
            </span>
            <span className=" md:ml-2 lg:text-7xl md:leading-10 md:mt-5 flex flex-col md:flex-row">
              <p className="md:w-4/6 xl:w-1/2 md:ml-10 text-light font-light ml-10 text-7xl md:text-6xl lg:text-7xl lg:mt-5">Excellence</p>
              <p className="header-text text-sm sans-font-it leading-none md:leading-3 md:pt-1 md:text-xxs ml-10 w-1/2 md:w-1/6 md:ml-0 xl:mr-0 lg:pt-5">
                / A local family owned contractor here to serve the community.
              </p>
            </span>
          </h1>
          <button className="get-started text-xs sans-font text-light pt-2 pb-2 pl-5 ml-10 pr-5 mt-5 md:mt-10 md:m-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
            GET STARTED
          </button>
        </section>
      </header>
      <section className="whole-lite p-5 md:pl-20 md:pr-20 lg:pl-28 lg:pr-28 xl:pl-52 xl:pr-52">
        <div className="home-section-1-container mb-10 pt-10 md:flex md:flex-row">
          <div className="header-text md:w-3/5">
            <p className="pre-text text-lg md:text-xs sans-font-it mb-2">/ What Kind of Contractor We Are</p>
            <h2 className="sub-header mb-5 text-5xl flex flex-col md:text-5xl lg:text-7xl">
              <span className="leading-none font-light text-dark">HIGH-QUALITY</span>
              <span className="leading-none font-light text-dark mt-1 md:mt-2 md:ml-48">HOME</span>
              <span className="leading-none font-light mt-1 text-dark md:mt-2 md:ml-24">REMODELING</span>
            </h2>
          </div>
          <div className="p-text md:text-xxs md:mt-4 md:w-2/5">
            <p className="text-md font-light sans-font md:text-xs text-dark">{carouselClasses[carouselIteration].content}</p>
            <div className="carousel-nav flex w-1/2 md:w-1/3 md:mt-8 mt-5 justify-between">
              <FaArrowLeftLong onClick={() => handleCarousel("DEC")} />
              <p className="carousel-text text-sm md:text-med">{carouselIteration + 1} / 3</p>
              <FaArrowRightLong onClick={() => handleCarousel("INC")} />
            </div>
          </div>
        </div>
        <div
          className={`${carouselClasses[carouselIteration].class} carousel-img w-full`}
        ></div>
      </section>
      <section className="whole-dark p-5 md:pl-20 md:pt-20 md:pb-20 md:pr-20 flex flex-col md:flex-row lg:pl-28 lg:pr-28 xl:pl-52 xl:pr-52">
        <section className="text pt-5 md:w-3/5">
          <div className="header-text">
            <p className="pre-text text-lg md:text-xs sans-font-it mb-2">/ Make your dream home a reality</p>
            <h2 className="sub-header text-5xl leading-none md:text-light md:mt-2 md:text-5xl flex flex-col">
              <span className="text-light font-thin leading-none">READY TO BEGIN</span>
              <div className=" text-light font-thin leading-none md:w-screen relative z-10 md:ml-36 leading-12 md:text-light ">A HOME REMODELING</div>
              <span className=" text-light font-thin md:ml-12 leading-none md:text-light">PROJECT?</span>
            </h2>
          </div>
          <div className="p-text md:text-xxs mb-5 md:max-w-64 md:ml-32">
            <p className="text-md font-thin sans-font mt-5 md:text-xs">
            We at De Jesus Contracting are thrilled to partner with you in bringing your project to life and maximizing your home's potential. Whether you're envisioning a complete renovation or targeted improvements, our team is dedicated to delivering exceptional craftsmanship and personalized service. With our expertise in both interior and exterior renovations, we ensure every detail is meticulously handled to enhance the functionality, beauty, and value of your home. From concept to completion, we're committed to exceeding your expectations and creating spaces that reflect your unique style and aspirations. Let's embark on this journey together to transform your house into the home you've always dreamed of.
            </p>
            <button className="get-started text-xs sans-font text-light pt-2 pb-2 pl-5 pr-5 mt-5 md:mt-10 md:m-5 md:ml-0 border-white border" onClick={() => props.navigateTo("/estimates")}>
            GET STARTED
          </button>
          </div>
        </section>
        <section className="image w-full bg-yellow-500 md:w-2/5">
          <div className="img remodel-img w-full h-full"></div>
        </section>
      </section>
      <section className="whole-lite flex md:pl-20 md:pb-20 md:pt-20 flex-col w-full md:flex-row md:flex-wrap p-5 lg:pl-28 lg:pr-28 xl:pl-60 xl:pr-60 lg:content-right">
        <div className="header-text md:w-1/3 md:order-4">
          <p className="pre-text text-lg md:text-xs sans-font-it mb-2">
            / Our services
          </p>
          <h2 className="sub-header mb-5 text-5xl flex flex-col lg:text-right xl:text-left">
            <span className="leading-none text-dark md:text-5xl font-light">HOW CAN</span>
            <span className="leading-none text-dark md:text-5xl font-light md:mb-5">WE HELP?</span>
          </h2>
        </div>
        <div className="service-btn mb-5 w-full md:order-1 flex md:w-1/3 md:pl-2 items-center" onClick={() => props.navigateTo("/exterior")}>
          <div className="service-circle circle-e w-1/3 bg-blue-300 rounded-full md:h-1/2 content-center aspect-square"></div>
          <div className="service-text sans-font font-medium md:text-xs md:ml-5 md:pr-2 w-2/3 content-center ml-10">
            ROOFING, FRAMING, WINDOWS, SIDING
          </div>
        </div>
        <div className="service-btn mb-5 w-full md:order-2 flex md:w-1/3 md:pl-2 content-center items-center" onClick={() => props.navigateTo("/interior")}>
          <div className="service-circle circle-i w-1/3 bg-blue-300 rounded-full md:h-1/2 content-center aspect-square"></div>
          <div className="service-text sans-font font-medium md:text-xs md:ml-5 md:pr-2 w-2/3 content-center ml-10">
            PAINTING, DRYWALL, FLOORING
          </div>
        </div>
        <div className="service-btn mb-5 w-full flex md:order-4 md:w-1/3 md:pl-2" onClick={() => props.navigateTo("/patios")}>
          <div className="service-circle circle-p w-1/3 bg-blue-300 rounded-full aspect-square"></div>
          <div className="service-text sans-font font-medium md:text-xs md:ml-5 md:pr-2 w-2/3 content-center ml-10">
            PORCHES, PATIOS, DECKS
          </div>
        </div>
        <div className="service-btn mb-5 w-full flex md:order-5 md:w-1/3 md:pl-2" onClick={() => props.navigateTo("/backyard")}>
          <div className="service-circle circle-b w-1/3 bg-blue-300 rounded-full aspect-square"></div>
          <div className="service-text sans-font font-medium md:text-xs md:ml-5 md:pr-2 w-2/3 content-center ml-10">
            HARDSCAPE, LANDSCAPE, IRRIGATION, CONCRETE
          </div>
        </div>
        <div className="service-btn mb-5 w-full flex md:order-6 md:w-1/3 md:pl-2" onClick={() => props.navigateTo("/fencing")}>
          <div className="service-circle circle-f w-1/3 bg-blue-300 rounded-full aspect-square"></div>
          <div className="service-text sans-font font-medium md:text-xs  md:ml-5 md:pr-2 w-2/3 content-center ml-10">
            FENCING
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
