import React from "react";
import "./testimonials.css";
import logo from "../../imgs/logo.png";

const Testimonials = () => {
  return (
    <div className="page" id="testimonials-page">
      <div className="med-header-interior w-screen hidden sm:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section sm:flex sm:flex-wrap p-5 pt-20 sm:pt-8 sm:pb-12 sm:pl-20 sm:pr-20 text-light">
        <h2 className="sub-header mb-5 sm:mb-0 text-5xl leading-10 sm:leading-10 sm:text-light sm:mt-2 md:text-5xl flex flex-col sm:w-3/6">
          <span className="sm:mt-0 text-light">TESTIMONIALS</span>
        </h2>
      </section>
      <section className="review-container sm:pt-0 text-light w-full p-5 sm:pl-20 sm:pr-20">
        <div className="review-1 pb-2 sm:flex sm:flex-wrap">
          <div className="img-review-1 sm:w-1/2 w-full h-48 bg-yellow-300"></div>
          <div className="text-container sm:w-1/2 sm:p-5 sm:pt-0">
            <h4 className="pt-3 sm:pt-0 font-bold text-light">Bathroom Remodel, Fort Mill</h4>
            <p className="w-full pt-3 sm:text-xxs text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              est, aspernatur molestias soluta voluptatum repellat animi odio
              eum rem magnam architecto cumque eius ipsa, nam placeat temporibus
              quas. Rerum vel voluptate culpa laudantium mollitia est ea, illo
              aut earum placeat facere obcaecati reprehenderit veniam
              exercitationem eos quod consequuntur qui nobis error, temporibus
              voluptatum dolorum cum! Vero, minima? Sequi possimus magni officia
              repellat voluptates ea quasi magnam autem! Similique, perspiciatis
              ex?
            </p>
            <div className="client-container flex w-full items-center sm:pt-3  pt-10 pb-5">
            <div className="left-review icon rounded-full bg-blue-200 w-1/5 sm:w-1/6 aspect-square"></div>
            <div className="right-review ml-3 w-3/4">
              <h3 className="font-bold text-light sm:text-xs text-light">Nathan & Jessica Wilson</h3>
              <h5 className="sm:text-xxs text-light">BATHROOM REMODEL</h5>
            </div>
          </div>
          </div>
          <hr className="mt-7 mb-7" />
        </div>
        <section className="other-reviews bg flex flex-row flex-wrap sm:flex-nowrap">
          <div className="normal-review w-full sm:w-1/3 sm:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light sm:text-xs text-light">Justin Davis</h3>
                <h5 className="text-xxs text-light">BATHROOM REMODEL</h5>
              </div>
            </div>
            <p className="w-full sm:pr-3 pb-5 sm:text-xxs text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eveniet expedita error, dolor vitae, ea voluptatibus sit a doloribus saepe nam nulla incidunt esse, unde nisi quis odit doloremque voluptatum sint cupiditate enim harum impedit. Porro aliquam fugit ipsam repudiandae, nisi et ut suscipit cum placeat ullam consequuntur blanditiis minus velit ipsum eaque sint consequatur doloribus quidem facere quaerat id voluptatum iure. Sint illo magnam a similique sit optio.</p>
            <hr className="mt-7 mb-7 sm:hidden" />
          </div>
          <div className="normal-review w-full sm:w-1/3 sm:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light sm:text-xs text-light">Justin Davis</h3>
                <h5 className="text-xxs text-light">BATHROOM REMODEL</h5>
              </div>
            </div>
            <p className="w-full sm:pr-3 pb-5 sm:text-xxs text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eveniet expedita error, dolor vitae, ea voluptatibus sit a doloribus saepe nam nulla incidunt esse, unde nisi quis odit doloremque voluptatum sint cupiditate enim harum impedit. Porro aliquam fugit ipsam repudiandae, nisi et ut suscipit cum placeat ullam consequuntur blanditiis minus velit ipsum eaque sint consequatur doloribus quidem facere quaerat id voluptatum iure. Sint illo magnam a similique sit optio.</p>
            <hr className="mt-7 mb-7 sm:hidden" />
          </div>
          <div className="normal-review w-full sm:w-1/3 sm:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light sm:text-xs text-light">Justin Davis</h3>
                <h5 className="text-xxs text-light">BATHROOM REMODEL</h5>
              </div>
            </div>
            <p className="w-full sm:pr-3 pb-5 sm:text-xxs text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eveniet expedita error, dolor vitae, ea voluptatibus sit a doloribus saepe nam nulla incidunt esse, unde nisi quis odit doloremque voluptatum sint cupiditate enim harum impedit. Porro aliquam fugit ipsam repudiandae, nisi et ut suscipit cum placeat ullam consequuntur blanditiis minus velit ipsum eaque sint consequatur doloribus quidem facere quaerat id voluptatum iure. Sint illo magnam a similique sit optio.</p>
            <hr className="mt-7 mb-7 sm:hidden" />
          </div>
        </section>
        <div className="review-2 sm:mt-10 pb-2 sm:flex sm:flex-wrap">
          <div className="img-review-1 sm:w-1/2 w-full h-48 bg-yellow-300"></div>
          <div className="text-container sm:w-1/2 sm:p-5 sm:pt-0">
            <h4 className="pt-3 sm:pt-0 font-bold text-light">Bathroom Remodel, Fort Mill</h4>
            <p className="w-full pt-3 sm:text-xxs text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              est, aspernatur molestias soluta voluptatum repellat animi odio
              eum rem magnam architecto cumque eius ipsa, nam placeat temporibus
              quas. Rerum vel voluptate culpa laudantium mollitia est ea, illo
              aut earum placeat facere obcaecati reprehenderit veniam
              exercitationem eos quod consequuntur qui nobis error, temporibus
              voluptatum dolorum cum! Vero, minima? Sequi possimus magni officia
              repellat voluptates ea quasi magnam autem! Similique, perspiciatis
              ex?
            </p>
            <div className="client-container flex w-full items-center sm:pt-3  pt-10 pb-5">
            <div className="left-review icon rounded-full bg-blue-200 w-1/5 sm:w-1/6 aspect-square"></div>
            <div className="right-review ml-3 w-3/4">
              <h3 className="font-bold text-light">Nathan & Jessica Wilson</h3>
              <h5>BATHROOM REMODEL</h5>
            </div>
          </div>
          </div>
          <hr className="mt-7 mb-7" />
        </div>
        <section className="other-reviews bg flex flex-row flex-wrap sm:flex-nowrap">
          <div className="normal-review w-full sm:w-1/3 sm:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light sm:text-xs text-light">Justin Davis</h3>
                <h5 className="text-xxs text-light">BATHROOM REMODEL</h5>
              </div>
            </div>
            <p className="w-full sm:pr-3 pb-5 sm:text-xxs text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eveniet expedita error, dolor vitae, ea voluptatibus sit a doloribus saepe nam nulla incidunt esse, unde nisi quis odit doloremque voluptatum sint cupiditate enim harum impedit. Porro aliquam fugit ipsam repudiandae, nisi et ut suscipit cum placeat ullam consequuntur blanditiis minus velit ipsum eaque sint consequatur doloribus quidem facere quaerat id voluptatum iure. Sint illo magnam a similique sit optio.</p>
            <hr className="mt-7 mb-7 sm:hidden" />
          </div>
          <div className="normal-review w-full sm:w-1/3 sm:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light sm:text-xs text-light">Justin Davis</h3>
                <h5 className="text-xxs text-light">BATHROOM REMODEL</h5>
              </div>
            </div>
            <p className="w-full sm:pr-3 pb-5 sm:text-xxs text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eveniet expedita error, dolor vitae, ea voluptatibus sit a doloribus saepe nam nulla incidunt esse, unde nisi quis odit doloremque voluptatum sint cupiditate enim harum impedit. Porro aliquam fugit ipsam repudiandae, nisi et ut suscipit cum placeat ullam consequuntur blanditiis minus velit ipsum eaque sint consequatur doloribus quidem facere quaerat id voluptatum iure. Sint illo magnam a similique sit optio.</p>
            <hr className="mt-7 mb-7 sm:hidden" />
          </div>
          <div className="normal-review w-full sm:w-1/3 sm:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light sm:text-xs text-light">Justin Davis</h3>
                <h5 className="text-xxs text-light">BATHROOM REMODEL</h5>
              </div>
            </div>
            <p className="w-full sm:pr-3 pb-5 sm:text-xxs text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eveniet expedita error, dolor vitae, ea voluptatibus sit a doloribus saepe nam nulla incidunt esse, unde nisi quis odit doloremque voluptatum sint cupiditate enim harum impedit. Porro aliquam fugit ipsam repudiandae, nisi et ut suscipit cum placeat ullam consequuntur blanditiis minus velit ipsum eaque sint consequatur doloribus quidem facere quaerat id voluptatum iure. Sint illo magnam a similique sit optio.</p>
            <hr className="mt-7 mb-7 sm:hidden" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Testimonials;
