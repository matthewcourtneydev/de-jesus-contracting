import React from "react";
import "./fencing.css"
import logo from "../../imgs/logo.png";

const Fencing = (props) => {
  return (
    <div className="page" id="interior-page">
      <div className="med-header-interior w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-12 sm:pl-20 sm:pr-20 text-white">
        <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col sm:w-3/6">
          <span className="sm:mt-0">FENCING </span>
          <span className="mt-2 sm:mt-2">SERVICES</span>
        </h2>
        <div className="top-section-img-fence sm:mb-20 sm:mt-12 w-full h-60 sm:order-3 bg-slate-100"></div>
        <p className="pt-5 sm:w-2/6 sm:pr-8 sm:text-xxs sm:pt-0 sm:order-1">
        De Jesus Contracting specializes in fencing, offering a variety of styles and materials. Whether extending, repairing existing fences, or building new ones, our skilled team ensures quality craftsmanship and attention to detail. We prioritize durability, security, and aesthetic appeal, aiming to exceed your expectations with each project.
        </p>
        <button className="sm:order-2 sm:w-1/6 sm:text-xxs get-started pt-2 pb-2 pl-5 pr-5 text-white sm:mt-0 sm:max-h-9 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
          GET STARTED
        </button>
      </section>
      <section className="whole-dark p-5 sm:pl-20  sm:pb-20 sm:pr-20 flex flex-col md:flex-row lg:pl-28 lg:pr-28">
        <section className="text md:w-3/5">
          <div className="header-text">
            <p className="pre-text text-xs">/ Privacy and Comfort</p>
            <h2 className="sub-header mb-5 text-4xl leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col">
              <span >PEACE OF MIND</span>
              <div className="md:w-screen relative z-10 mt-1 sm:ml-36 leading-12 sm:font-light sm:mt-2">IS ONLY A FEW FENCE</div>
              <span className="sm:ml-12 leading-10 mt-1 sm:font-light sm:mt-2">POSTS AWAY</span>
            </h2>
          </div>
          <div className="p-text sm:text-xxs mb-5 sm:max-w-64 sm:ml-32">
            <p>
            Fencing serves as more than a physical barrier—it provides security, privacy, and peace of mind for your home and family. De Jesus Contracting understands the importance of a secure environment, whether you seek to keep unwanted visitors or animals out, protect your family, or create a private sanctuary in your yard. Whether it's allowing your dog to roam freely or enjoying uninterrupted privacy, our fencing solutions are tailored to meet your specific needs and enhance your outdoor living experience.
            </p>
            <button className="get-started pt-2 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
            GET STARTED
          </button>
          </div>
        </section>
        <section className="image w-full bg-yellow-500 md:w-2/5">
          <div className="img remodel-img-fence w-full h-full"></div>
        </section>
      </section>
    </div>
  );
};

export default Fencing;
