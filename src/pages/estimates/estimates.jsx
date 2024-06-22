import { React, useEffect, useRef, useState } from "react";
import "./estimates.css";
import logo from "../../imgs/logo.png";
import emailjs from "@emailjs/browser";

const Estimates = () => {
  const form = useRef();
  const [isEmailSent, toggleEmail] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_8dlalvd", "template_7h3bqli", form.current, {
        publicKey: "aPDvLUxmq4l6nCZmW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    toggleEmail((prev) => !prev);
  }

  useEffect(() => {
    const body = document.querySelector('#root');

    body.scrollIntoView({
      top: 0,
        behavior: 'smooth'
    }, 500)

}, []);

  return (
    <div
      className="page pb-12 pl-5 pr-5 sm:pl-20 sm:pr-20 bg-white"
      id="estimate-page"
    >
      <div className="med-header w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <div className="header-text pt-20 sm:pt-5 lg:pt-28 pr-5 w-full h-full  md:w-1/2 lg:pr-24">
        <p className="pre-text text-xs">/ The first step</p>
        <h2 className="sub-header mb-5 text-4xl leading-10 sm:font-light sm:mt-2 md:text-5xl flex flex-col">
          FREE ESTIMATE
        </h2>
      </div>
      <div className="container sm:flex sm:flex-row w-full">
        <div className="form-container w-full sm:w-1/2">
          {isEmailSent ? (
            <div>
              <h4>
                We have received your email and will be in touch with you
                shortly. We appreciate you reaching out!
              </h4>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              ref={form}
              className="contact-estimate sm:w-5/6 h-full sm:ml-0 sm:mr-auto"
            >
                <section>
                    <section className="upper">
                    <label htmlFor="Name" className="font-bold text-xl sm:text-sm">
                Name
                </label>
                    </section>
                    <section className="lower">
                    <input
                type="text"
                id="name"
                name="first"
                placeholder="Name"
                className="w-full mb-3 sm:mb-2 mt-4 sm:mt-2 bg-transparent border-slate-200 border p-3 sm:text-sm sm:p-2 rounded text-white"
              />
              <input
                type="text"
                id="name"
                name="last"
                placeholder="Last"
                className="w-full mb-7 sm:mb-5 bg-transparent border-slate-200 border p-3 sm:text-sm sm:p-2 rounded text-white"
              />
                    </section>
                </section>



 <label htmlFor="Name" className="font-bold text-xl sm:text-sm">
                Phone
              
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Phone"
                className="w-full mb-7 sm:mb-5 mt-4 sm:mt-2 bg-transparent border-slate-200 border p-3 sm:text-sm sm:p-2 rounded text-white"
              />
              </label>
              <label htmlFor="Email" className="font-bold text-xl sm:text-sm">
                Email
              
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full mb-7 sm:mb-5 mt-4 sm:mt-2 bg-transparent border-slate-200 border p-3 sm:text-sm sm:p-2 rounded text-white"
              />
              </label>
              <label htmlFor="Address" className="font-bold text-xl sm:text-sm">
                Address
           
              <input
                type="text"
                id="addressLineOne"
                name="address"
                placeholder="Address"
                className="w-full mb-7 sm:mb-2 mt-4 sm:mt-2 bg-transparent border-slate-200 border p-3 sm:text-sm sm:p-2 rounded text-white"
              />
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                className="w-full mb-7 sm:mb-2 bg-transparent border-slate-200 border p-3 sm:text-sm sm:p-2 rounded text-white"
              />
              <select
                className="w-full mb-7 sm:mb-2 bg-transparent border-slate-200 border p-3 sm:text-sm sm:p-2 rounded text-white"
                name="state"
                id="state"
              >
                <option value="NC">NC</option>
                <option value="SC">SC</option>
              </select>
              <input
                type="zip"
                id="zip"
                name="zip"
                placeholder="Zip"
                className="w-full mb-7 sm:mb-5 bg-transparent border-slate-200 border p-3 sm:text-sm sm:p-2 rounded text-white"
              />
              </label>
              <label
                htmlFor="interest"
                className="font-bold text-xl sm:text-sm"
              >
                I'm interested in:
             

              <section className="w-full mt-2 mb-7 sm:mb-5 pl-3 flex flex-col">
                <span>
                  <input
                    className="radio mb-4 mt-4 sm:mt-2 mr-2"
                    type="radio"
                    name="interior"
                    id="interior"
                  />
                  <label className="text-xl font-light sm:text-sm" htmlFor="interior">
                    Interior
                  </label>
                </span>
                <span>
                  <input
                    className="mb-4 mr-2"
                    type="radio"
                    name="exterior"
                    id="exterior"
                  />
                  <label className="text-xl font-light sm:text-sm" htmlFor="exterior">
                    Exterior
                  </label>
                </span>
                <span>
                  <input
                    className="mb-4 mr-2"
                    type="radio"
                    name="patio"
                    id="patio"
                  />
                  <label className="text-xl font-light sm:text-sm" htmlFor="patio">
                    Patio
                  </label>
                </span>
              </section>
</label>
<label htmlFor="comments" className="font-bold text-xl sm:text-sm">Your Comments</label>
              <textarea
                type="text"
                cols="10"
                rows="10"
                id="message"
                name="comments"

                className="w-full mt-4s mb-7 sm:mb-5 bg-transparent border-slate-200 border pb-2 text-white"
              />
              <button className="submit bg-white w-full sm:p-2 p-5 mt-5 text-black font-bold">
                SUBMIT
              </button>
            </form>
          )}
        </div>
        <div className="img-container h-200 sm:w-1/2 ">
          <div className="img contact-image w-5/6 sm:h-3/4 sm:mt-20 h-full mr-0 ml-auto "></div>
        </div>
      </div>
    </div>
  );
};

export default Estimates;
