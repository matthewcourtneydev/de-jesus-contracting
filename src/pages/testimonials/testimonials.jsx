import React from "react";
import "./testimonials.css";
import logo from "../../imgs/logo.png";

const Testimonials = () => {
  return (
    <div className="page" id="testimonials-page">
      <div className="med-header-interior w-screen hidden md:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 max-w-28 h-3/4 mt-4 ml-20" />
      </div>
      <section className="top-section md:flex md:flex-wrap p-5 pt-20 md:pt-8 md:pb-12 md:pl-20 md:pr-20 text-light">
        <h2 className="sub-header mb-5 md:mb-0 text-5xl leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col md:w-3/6">
          <span className="md:mt-0 text-light">TESTIMONIALS</span>
        </h2>
      </section>
      <section className="review-container md:pt-0 text-light w-full p-5 md:pl-20 md:pr-20">
        <div className="review-1 pb-2 md:flex md:flex-wrap">
          <div className="img-review-1 md:w-1/2 w-full h-48 bg-yellow-300"></div>
          <div className="text-container md:w-1/2 md:p-5 md:pt-0">
            <h4 className="pt-3 md:pt-0 font-bold text-light">Bathroom Remodel, Fort Mill</h4>
            <p className="w-full pt-3 md:text-xxs text-light">
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
            <div className="client-container flex w-full items-center md:pt-3  pt-10 pb-5">
            <div className="left-review icon rounded-full bg-blue-200 w-1/5 md:w-1/6 aspect-square"></div>
            <div className="right-review ml-3 w-3/4">
              <h3 className="font-bold text-light md:text-xs text-light">Nathan & Jessica Wilson</h3>
              <h5 className="md:text-xxs text-light">BATHROOM REMODEL</h5>
            </div>
          </div>
          </div>
          <hr className="mt-7 mb-7" />
        </div>
        <section className="other-reviews bg flex flex-row flex-wrap md:flex-nowrap">
          <div className="normal-review w-full md:w-1/3 md:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">Justin Davis</h3>
                <h5 className="text-xxs text-light">BATHROOM REMODEL</h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eveniet expedita error, dolor vitae, ea voluptatibus sit a doloribus saepe nam nulla incidunt esse, unde nisi quis odit doloremque voluptatum sint cupiditate enim harum impedit. Porro aliquam fugit ipsam repudiandae, nisi et ut suscipit cum placeat ullam consequuntur blanditiis minus velit ipsum eaque sint consequatur doloribus quidem facere quaerat id voluptatum iure. Sint illo magnam a similique sit optio.</p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
          <div className="normal-review w-full md:w-1/3 md:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">Justin Davis</h3>
                <h5 className="text-xxs text-light">BATHROOM REMODEL</h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eveniet expedita error, dolor vitae, ea voluptatibus sit a doloribus saepe nam nulla incidunt esse, unde nisi quis odit doloremque voluptatum sint cupiditate enim harum impedit. Porro aliquam fugit ipsam repudiandae, nisi et ut suscipit cum placeat ullam consequuntur blanditiis minus velit ipsum eaque sint consequatur doloribus quidem facere quaerat id voluptatum iure. Sint illo magnam a similique sit optio.</p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
          <div className="normal-review w-full md:w-1/3 md:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">Justin Davis</h3>
                <h5 className="text-xxs text-light">BATHROOM REMODEL</h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eveniet expedita error, dolor vitae, ea voluptatibus sit a doloribus saepe nam nulla incidunt esse, unde nisi quis odit doloremque voluptatum sint cupiditate enim harum impedit. Porro aliquam fugit ipsam repudiandae, nisi et ut suscipit cum placeat ullam consequuntur blanditiis minus velit ipsum eaque sint consequatur doloribus quidem facere quaerat id voluptatum iure. Sint illo magnam a similique sit optio.</p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
        </section>
        <div className="review-2 md:mt-10 pb-2 md:flex md:flex-wrap">
          <div className="img-review-1 md:w-1/2 w-full h-48 bg-yellow-300"></div>
          <div className="text-container md:w-1/2 md:p-5 md:pt-0">
            <h4 className="pt-3 md:pt-0 font-bold text-light">Bathroom Remodel, Fort Mill</h4>
            <p className="w-full pt-3 md:text-xxs text-light">
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
            <div className="client-container flex w-full items-center md:pt-3  pt-10 pb-5">
            <div className="left-review icon rounded-full bg-blue-200 w-1/5 md:w-1/6 aspect-square"></div>
            <div className="right-review ml-3 w-3/4">
              <h3 className="font-bold text-light">Nathan & Jessica Wilson</h3>
              <h5>BATHROOM REMODEL</h5>
            </div>
          </div>
          </div>
          <hr className="mt-7 mb-7" />
        </div>
        <section className="other-reviews bg flex flex-row flex-wrap md:flex-nowrap">
          <div className="normal-review w-full md:w-1/3 md:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">Justin Davis</h3>
                <h5 className="text-xxs text-light">BATHROOM REMODEL</h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eveniet expedita error, dolor vitae, ea voluptatibus sit a doloribus saepe nam nulla incidunt esse, unde nisi quis odit doloremque voluptatum sint cupiditate enim harum impedit. Porro aliquam fugit ipsam repudiandae, nisi et ut suscipit cum placeat ullam consequuntur blanditiis minus velit ipsum eaque sint consequatur doloribus quidem facere quaerat id voluptatum iure. Sint illo magnam a similique sit optio.</p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
          <div className="normal-review w-full md:w-1/3 md:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">Justin Davis</h3>
                <h5 className="text-xxs text-light">BATHROOM REMODEL</h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eveniet expedita error, dolor vitae, ea voluptatibus sit a doloribus saepe nam nulla incidunt esse, unde nisi quis odit doloremque voluptatum sint cupiditate enim harum impedit. Porro aliquam fugit ipsam repudiandae, nisi et ut suscipit cum placeat ullam consequuntur blanditiis minus velit ipsum eaque sint consequatur doloribus quidem facere quaerat id voluptatum iure. Sint illo magnam a similique sit optio.</p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
          <div className="normal-review w-full md:w-1/3 md:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">Justin Davis</h3>
                <h5 className="text-xxs text-light">BATHROOM REMODEL</h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi eveniet expedita error, dolor vitae, ea voluptatibus sit a doloribus saepe nam nulla incidunt esse, unde nisi quis odit doloremque voluptatum sint cupiditate enim harum impedit. Porro aliquam fugit ipsam repudiandae, nisi et ut suscipit cum placeat ullam consequuntur blanditiis minus velit ipsum eaque sint consequatur doloribus quidem facere quaerat id voluptatum iure. Sint illo magnam a similique sit optio.</p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Testimonials;
