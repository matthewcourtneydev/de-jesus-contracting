import React from "react";
import "./fencing.css"
import logo from "../../imgs/logo.png";

const Fencing = (props) => {
  return (
    <div className="page" id="interior-page">
      <div className="med-header-interior w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-12 sm:pl-20 sm:pr-20 text-light">
        <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col sm:w-3/6">
          <span className="sm:mt-0 text-light">FENCING </span>
          <span className="mt-2 sm:mt-2 text-light">SERVICES</span>
        </h2>
        <div className="top-section-img-fence sm:mb-20 sm:mt-12 w-full h-60 sm:order-3 bg-slate-100"></div>
        <p className="pt-5 text-light sm:w-2/6 sm:pr-8 sm:text-xxs sm:pt-0 sm:order-1">
        De Jesus Contracting specializes in fencing, offering a variety of styles and materials. Whether extending, repairing existing fences, or building new ones, our skilled team ensures quality craftsmanship and attention to detail. We prioritize durability, security, and aesthetic appeal, aiming to exceed your expectations with each project.
        </p>
        <button className="sm:order-2 sm:w-1/6 sm:text-xxs get-started pt-2 pb-2 pl-5 pr-5 text-light sm:mt-0 sm:max-h-9 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
          GET STARTED
        </button>
      </section>
      <section className="whole-dark p-5 sm:pl-20  sm:pb-20 sm:pr-20 flex flex-col md:flex-row lg:pl-28 lg:pr-28">
        <section className="text md:w-3/5">
          <div className="header-text">
            <p className="pre-text text-xs">/ Privacy and Comfort</p>
            <h2 className="sub-header mb-5 text-4xl leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col">
              <span className="text-light">PEACE OF MIND</span>
              <div className="md:w-screen relative z-10 mt-1 sm:ml-36 leading-12 sm:text-light sm:mt-2 text-light">IS ONLY A FEW FENCE</div>
              <span className="sm:ml-12 leading-10 mt-1 sm:text-light sm:mt-2 text-light">POSTS AWAY</span>
            </h2>
          </div>
          <div className="p-text sm:text-xxs mb-5 sm:max-w-64 sm:ml-32">
            <p className="text-light">
            Fencing serves as more than a physical barrier—it provides security, privacy, and peace of mind for your home and family. De Jesus Contracting understands the importance of a secure environment, whether you seek to keep unwanted visitors or animals out, protect your family, or create a private sanctuary in your yard. Whether it's allowing your dog to roam freely or enjoying uninterrupted privacy, our fencing solutions are tailored to meet your specific needs and enhance your outdoor living experience.
            </p>
            <button className="get-started text-light pt-2 pb-2 pl-5 pr-5 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
            GET STARTED
          </button>
          </div>
        </section>
        <section className="image w-full bg-yellow-500 md:w-2/5">
          <div className="img remodel-img-fence w-full h-full"></div>
        </section>
      </section>
      <section className="section-two sm:flex sm:flex-wrap bg-white p-5 pt-10 sm:pl-20 sm:pr-20">
        <div className="header-text sm:order-1 sm:w-1/2 ">
          <p className="pre-text text-xs">/ Protect Your Space</p>
          <h2 className="sub-header mb-5 text-5xl leading-10 sm:leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col ">
            <span>KEEP WHAT </span>
            <span className="sm:ml-16 mt-1 sm:mt-2">YOU LOVE SAFE.</span>
          </h2>
          <div className="second-section-img w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container sm:order-0 sm:w-1/2">
          <div className="card w-full pt-5 pb-5 mt-10 sm:mt-0 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Privacy
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              
              Fences offer essential privacy by defining boundaries and shielding outdoor areas from public view, ensuring homeowners can enjoy their property in peace and security.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Boundaries
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              Fences define property boundaries, prevent disputes, enhance curb appeal, and boost security by restricting access.
              </p>
            </div>
          </div>
          <div className="card w-full pt-5 pb-5 gap-3 flex sm:items-start items-center sm:flex-row sm:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
            <div className="wrapper sm:w-4/5">
              <h4 className="w-3/5 ml-2 font-bold sm:ml-0 sm:text-sm sm:mb-1 text-lg">
                Beauty
              </h4>
              <p className="w-full sm:text-xxs sm:w-4/5">
              Fences enhance residential homes aesthetically by complementing architectural styles, adding character, and improving curb appeal. They serve as a cohesive element in landscaping, providing a backdrop for gardens and outdoor spaces that beautify the property.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fencing;
