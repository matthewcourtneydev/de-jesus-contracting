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
        <section className="right pb-9 pt-20 lg:pt-28 pl-5 pr-5 w-full h-full  md:w-1/2 lg:pr-24 min-h-100%">
          <h1 className="home-header flex flex-col">
            <span className="text-7xl md:ml-5 md:text-6xl lg:text-8xl leading-10 sm:mt-5">
              Precision
            </span>
            <span className="text-7xl md:ml-32 md:text-6xl lg:text-8xl leading-10 mt-7 sm:mt-5">
              Integrity
            </span>
            <span className="text-7xl sm:text-7xl md:ml-2 md:text-6xl lg:text-8xl sm:leading-10 sm:mt-5 flex flex-col md:flex-row">
              <p className="md:w-4/6 md:ml-10">Excellence</p>
              <p className="header-text sm:leading-3 sm:pt-1 sm:text-xxs w-1/2 md:w-1/6">
                / a local family owned contractor here to serve the community.
              </p>
            </span>
          </h1>
          <button className="get-started pt-2 pb-2 pl-5 pr-5 mt-5 sm:mt-10 sm:m-5 border-white border">
            GET STARTED
          </button>
        </section>
      </header>
      <section className="whole-lite p-5 sm:pl-20 sm:pr-20 lg:pl-28 lg:pr-28">
        <div className="home-section-1-container mb-10 md:pt-10 md:flex md:flex-row">
          <div className="header-text md:w-3/5">
            <p className="pre-text text-sm sm:text-xs">/ What kind of contractor we are</p>
            <h2 className="sub-header mb-5 text-4xl flex flex-col md:text-5xl lg:text-7xl">
              <span className="leading-10 sm:font-light  sm:mt-2">HIGH-QUALITY</span>
              <span className="leading-10 sm:font-light mt-1 sm:mt-2 sm:ml-48">HOME</span>
              <span className="leading-10 sm:font-light mt-1 sm:mt-2 sm:ml-24">REMODELING</span>
            </h2>
          </div>
          <div className="p-text sm:text-xxs sm:mt-4 md:w-2/5">
            <p className="sm:w-3/4">{carouselClasses[carouselIteration].content}</p>
            <div className="carousel-nav flex w-1/2 sm:w-1/3 sm:mt-8 mt-5 justify-between">
              <FaArrowLeftLong onClick={() => handleCarousel("DEC")} />
              <p className="carousel-text">{carouselIteration + 1} / 3</p>
              <FaArrowRightLong onClick={() => handleCarousel("INC")} />
            </div>
          </div>
        </div>
        <div
          className={`${carouselClasses[carouselIteration].class} carousel-img w-full`}
        ></div>
      </section>
      <section className="whole-dark p-5 sm:pl-20 sm:pt-20 sm:pb-20 sm:pr-20 flex flex-col md:flex-row lg:pl-28 lg:pr-28">
        <section className="text md:w-3/5">
          <div className="header-text">
            <p className="pre-text text-xs">/ Make your dream home a reality</p>
            <h2 className="sub-header mb-5 text-4xl leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col">
              <span >READY TO BEGIN</span>
              <div className="md:w-screen relative z-10 mt-1 sm:ml-36 leading-12 sm:font-light sm:mt-2">A HOME REMODELING</div>
              <span className="sm:ml-12 leading-10 mt-1 sm:font-light sm:mt-2">PROJECT?</span>
            </h2>
          </div>
          <div className="p-text sm:text-xxs mb-5 sm:max-w-64 sm:ml-32">
            <p>
            We at De Jesus Contracting are thrilled to partner with you in bringing your project to life and maximizing your home's potential. Whether you're envisioning a complete renovation or targeted improvements, our team is dedicated to delivering exceptional craftsmanship and personalized service. With our expertise in both interior and exterior renovations, we ensure every detail is meticulously handled to enhance the functionality, beauty, and value of your home. From concept to completion, we're committed to exceeding your expectations and creating spaces that reflect your unique style and aspirations. Let's embark on this journey together to transform your house into the home you've always dreamed of.
            </p>
            <button className="get-started pt-2 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
            GET STARTED
          </button>
          </div>
        </section>
        <section className="image w-full bg-yellow-500 md:w-2/5">
          <div className="img remodel-img w-full h-full"></div>
        </section>
      </section>
      <section className="whole-lite flex sm:pl-20 sm:pb-20 sm:pt-20 flex-col w-full md:flex-row md:flex-wrap p-5 lg:pl-28 lg:pr-28 lg:content-right">
        <div className="header-text sm:w-1/3 sm:order-4">
          <p className="pre-text text-sm lg:text-right">
            / Our services
          </p>
          <h2 className="sub-header mb-5 text-4xl leading-10 flex flex-col lg:text-right">
            <span className="sm:leading-10 sm:font-light sm:mt-2 md:text-5xl">HOW CAN</span>
            <span className="sm:leading-10 sm:font-light mt-1 sm:mt-2 md:text-5xl sm:mb-5">WE HELP?</span>
          </h2>
        </div>
        <div className="service-btn mb-5 w-full md:order-1 flex sm:w-1/3 sm:pl-2 items-center">
          <div className="service-circle w-1/3 bg-blue-300 rounded-full md:h-1/2 content-center aspect-square"></div>
          <div className="service-text sm:text-xxs font-bold sm:ml-5 sm:pr-2 w-2/3 content-center ml-10">
            ROOFING, FRAMING, WINDOWS, SIDING
          </div>
        </div>
        <div className="service-btn mb-5 w-full md:order-2 flex sm:w-1/3 sm:pl-2 content-center items-center">
          <div className="service-circle w-1/3 bg-blue-300 rounded-full md:h-1/2 content-center aspect-square"></div>
          <div className="service-text sm:text-xxs font-bold sm:ml-5 sm:pr-2 w-2/3 content-center ml-10">
            PAINTING, DRYWALL, FLOORING
          </div>
        </div>
        <div className="service-btn mb-5 w-full flex md:order-4 sm:w-1/3 sm:pl-2">
          <div className="service-circle w-1/3 bg-blue-300 rounded-full aspect-square"></div>
          <div className="service-text sm:text-xxs font-bold sm:ml-5 sm:pr-2 w-2/3 content-center ml-10">
            PORCHES, PATIOS, DECKS
          </div>
        </div>
        <div className="service-btn mb-5 w-full flex md:order-5 sm:w-1/3 sm:pl-2">
          <div className="service-circle w-1/3 bg-blue-300 rounded-full aspect-square"></div>
          <div className="service-text sm:text-xxs font-bold sm:ml-5 sm:pr-2 w-2/3 content-center ml-10">
            HARDSCAPE, LANDSCAPE, IRRIGATION, CONCRETE
          </div>
        </div>
        <div className="service-btn mb-5 w-full flex md:order-6 sm:w-1/3 sm:pl-2">
          <div className="service-circle w-1/3 bg-blue-300 rounded-full aspect-square"></div>
          <div className="service-text sm:text-xxs font-bold sm:ml-5 sm:pr-2 w-2/3 content-center ml-10">
            FENCING
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
