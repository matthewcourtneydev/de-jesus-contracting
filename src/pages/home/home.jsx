import { React, useState } from "react";
import "./home.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const [carouselIteration, updateCarousel] = useState(0);
  const carouselClasses = ["one", "two", "three"];

  function handleCarousel(action) {
    if (carouselIteration < 2 && action === "INC") {
      updateCarousel((prev) => prev + 1);
    } else if (carouselIteration >= 0 && action === "DEC") {
      updateCarousel((prev) => prev - 1);
    }
  }

  return (
    <div className="page" id="home">
      <header className="flex flex-col-reverse md:flex-row">
        <section className="left w-full h-full md:w-1/2"></section>
        <section className="right pt-10 pl-5 pr-5 w-full h-full md:w-1/2">
          <h1 className="home-header flex flex-col">
            <span className="text-7xl">Precision</span>
            <span className="text-7xl">Integrity</span>
            <span className="text-7xl">Excellence</span>
          </h1>
          <p className="text-xs"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            accusantium ex provident et animi quasi.
          </p>
          <button className="get-started">GET STARTED</button>
        </section>
      </header>
      <section className="whole-lite p-5">
        <div className="home-section-1-container mb-10 md:flex md:flex-row">
          <div className="header-text md:w-3/5 pt-10">
            <p className="pre-text">/ What kind of contractor we are</p>
            <h2 className="sub-header mb-5 text-6xl flex flex-col">
              <span>HIGH-QUALITY</span>
              <span>HOME</span>
              <span>REMODELING</span>
            </h2>
          </div>
          <div className="p-text md:w-2/5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque adipisci omnis veritatis aperiam, laboriosam quo
              cupiditate eligendi. Velit provident excepturi commodi quidem odio
              reiciendis accusantium consequuntur, repudiandae expedita
              doloribus pariatur consectetur quod itaque at dolorem eos numquam
              assumenda unde harum perspiciatis labore neque in. Suscipit
              aspernatur vero inventore hic aperiam.
            </p>
            <div className="carousel-nav flex w-1/2 mt-5 justify-between">
              <FaArrowLeftLong onClick={() => handleCarousel("DEC")} />
              <p className="carousel-text">{carouselIteration + 1} / 3</p>
              <FaArrowRightLong onClick={() => handleCarousel("INC")} />
            </div>
          </div>
        </div>
        <div
          className={`${carouselClasses[carouselIteration]} carousel-img w-full`}
        ></div>
      </section>
      <section className="whole-dark p-5 flex flex-col md:flex-row">
        <section className="text md:w-3/5">
          <div className="header-text">
            <p className="pre-text">/ What kind of contractor we are</p>
            <h2 className="sub-header mb-5 text-6xl flex flex-col">
              <span>READY TO BEGIN</span>
              <div className="md:w-screen z-10">A HOME REMODELING</div>
              <span>PROJECT?</span>
            </h2>
          </div>
          <div className="p-text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque adipisci omnis veritatis aperiam, laboriosam quo
              cupiditate eligendi. Velit provident excepturi commodi quidem odio
              reiciendis accusantium consequuntur, repudiandae expedita
              doloribus pariatur consectetur quod itaque at dolorem eos numquam
              assumenda unde harum perspiciatis labore neque in. Suscipit
              aspernatur vero inventore hic aperiam.
            </p>
          </div>
        </section>
        <section className="image z-0 w-full bg-yellow-500 md:w-2/5">
          <div className="img z-0 w-full bg-purple-300 h-full"></div>
        </section>
      </section>
        <section className="whole-lite flex flex-col md:flex-row md:flex-wrap p-5">
        <div className="header-text md:w-1/2 md:order-3">
              <p className="pre-text">/ What kind of contractor we are</p>
              <h2 className="sub-header mb-5 text-6xl flex flex-col">
                <span>HIGH-QUALITY</span>
                <span>HOME</span>
                <span>REMODELING</span>
              </h2>
            </div>
        <div className="service-btn mb-5 w-full md:order-1 flex bg-pink-500 md:w-1/4 content-center">
            <div className="service-circle w-1/3 bg-blue-300 rounded-full md:h-1/2 content-center aspect-square"></div>
            <div className="service-text w-2/3 content-center ml-10">Home Construction</div>
        </div>
        <div className="service-btn mb-5 w-full md:order-2 flex bg-pink-500 md:w-1/4 content-center">
            <div className="service-circle w-1/3 bg-blue-300 rounded-full md:h-1/2 content-center aspect-square"></div>
            <div className="service-text w-2/3 content-center ml-10">Home Construction</div>
        </div>
        <div className="service-btn mb-5 w-full flex md:order-4 bg-pink-500 md:w-1/4">
            <div className="service-circle w-1/3 bg-blue-300 rounded-full aspect-square"></div>
            <div className="service-text w-2/3 content-center ml-10">Home Construction</div>
        </div>
        <div className="service-btn mb-5 w-full flex md:order-5 bg-pink-500 md:w-1/4">
            <div className="service-circle w-1/3 bg-blue-300 rounded-full aspect-square"></div>
            <div className="service-text w-2/3 content-center ml-10">Home Construction</div>
        </div>
        <div className="service-btn mb-5 w-full flex md:order-6 bg-pink-500 md:w-1/4">
            <div className="service-circle w-1/3 bg-blue-300 rounded-full aspect-square"></div>
            <div className="service-text w-2/3 content-center ml-10">Home Construction</div>
        </div>
        </section>
    </div>
  );
};

export default Home;
