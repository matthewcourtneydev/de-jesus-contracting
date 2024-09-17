import { React, useEffect, useRef, useState } from "react";
import "./estimates.css";
import logo from "../../imgs/logo.png";
import emailjs from "@emailjs/browser";

const Estimates = () => {
  const form = useRef();
  const [isEmailSent, toggleEmail] = useState(false);

  const topElement = useRef(null)
  useEffect(() => {
    console.log("page hit");
    topElement.current.scrollIntoView()
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_pl8rq8k", "template_ek2ldvp", form.current, {
        publicKey: "TF-CPrhDGAzek_vbr",
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
      className="page pb-12 pl-5 pr-5 md:pl-20 md:pr-20 bg-white"
      id="estimate-page"
    >
            <div className="focus" ref={topElement}></div>
      <div className="med-header w-screen hidden md:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 max-w-28 h-3/4 mt-4 ml-20 xl:ml-52" />
      </div>
      <div className="header-text pt-20 md:pt-5 lg:pt-28 pr-5 w-full h-full  md:w-1/2 lg:pr-24">
        <p className="pre-text text-xs">/ The first step</p>
        <h2 className="sub-header mb-5 text-4xl leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col">
          FREE ESTIMATE
        </h2>
      </div>
      <div className="container md:flex md:flex-row w-full">
        <div className="form-container w-full md:w-1/2">
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
              className="contact-estimate md:w-5/6 h-full md:ml-0 md:mr-auto"
            >
        

                    <label htmlFor="Name" className="font-bold text-xl md:text-xs">
                Name
                </label>
                   
                    <input
                type="text"
                id="name"
                name="first"
                placeholder="Name"
                className="w-full  mb-3 md:mb-2 mt-4 md:mt-2 bg-transparent border-slate-200 border p-3 md:text-xs md:p-2 rounded "
              />
              <input
                type="text"
                id="name"
                name="last"
                placeholder="Last"
                className="w-full mb-7 md:mb-5 bg-transparent border-slate-200 border p-3 md:text-xs md:p-2 rounded"
              />
                  
            



 <label htmlFor="Name" className="font-bold text-xl md:text-xs">
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                placeholder="Phone"
                className="w-full mb-3 md:mb-2 mt-4 md:mt-2 bg-transparent border-slate-200 border p-3 md:text-xs md:p-2 rounded"
              />
              
              <label htmlFor="Email" className="font-bold text-xl md:text-xs">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full mb-7 md:mb-5 mt-4 md:mt-2 bg-transparent border-slate-200 border p-3 md:text-xs md:p-2 rounded"
              />
              
              <label htmlFor="Address" className="font-bold text-xl md:text-xs">
                Address
           </label>
              <input
                type="text"
                id="addressLineOne"
                name="addressLineOne"
                placeholder="Address"
                className="w-full mb-7 md:mb-2 mt-4 md:mt-2 bg-transparent border-slate-200 border p-3 md:text-xs md:p-2 rounded"
              />
                            <input
                type="text"
                id="addressLineTwo"
                name="addressLineTwo"
                placeholder="Apt"
                className="w-full mb-7 md:mb-2 bg-transparent border-slate-200 border p-3 md:text-xs md:p-2 rounded"
              />
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                className="w-full mb-7 md:mb-2 bg-transparent border-slate-200 border p-3 md:text-xs md:p-2 rounded"
              />
              <select
                className="w-full mb-7 md:mb-2 bg-transparent border-slate-200 border p-3 md:text-xs md:p-2 rounded"
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
                className="w-full mb-7 md:mb-5 bg-transparent border-slate-200 border p-3 md:text-xs md:p-2 rounded"
              />
              

              {/* <section className="w-full mt-2 mb-7 md:mb-5 pl-3 flex flex-col">
                <span>
                  <input
                    className="radio mb-4 mt-4 md:mt-2 mr-2"
                    type="radio"
                    name="interior"
                    id="interior"
                  />
                  <label className="text-xl md:text-xs" htmlFor="interior">
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
                  <label className="text-xl md:text-xs" htmlFor="exterior">
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
                  <label className="text-xl md:text-xs" htmlFor="patio">
                    Patio
                  </label>
                </span>
              </section> */}

<label htmlFor="comments" className="font-bold text-xl md:text-xs">Your Comments</label>
              <textarea
                type="text"
                cols="10"
                rows="10"
                id="message"
                name="comments"

                className="w-full mt-4s mb-7 md:mb-5 bg-transparent border-slate-200 border pb-2"
              />
              <button className="submit estimates-submit text-white w-full md:p-2 p-5 mt-5 font-bold">
                SUBMIT
              </button>
            </form>
          )}
        </div>
        <div className="img-container h-200 md:w-1/2 ">
          <div className="img min-h:200 contact-image min-h-96 w-5/6 md:h-3/4 md:mt-20 h-full mr-0 ml-auto "></div>
        </div>
      </div>
    </div>
  );
};

export default Estimates;
