import React from "react";
import "./testimonials.css";
import logo from "../../imgs/logo.png";

const Testimonials = (props) => {
  return (
    <div className="page" id="testimonials-page">
      <div className="med-header-interior w-screen hidden md:flex min-h-24">
        <img
          src={logo}
          alt=""
          className="w-1/6 max-w-28 h-3/4 mt-4 ml-20  xl:ml-52"
        />
      </div>
      <section className="top-section md:flex md:flex-wrap p-5 pt-20 md:pt-8 md:pb-12 md:pl-20 md:pr-20 text-light">
        <h2 className="sub-header mb-5 md:mb-0 text-5xl leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col md:w-3/6">
          <span className="md:mt-0 text-light">
            {props.isSpanish ? "TESTIMONIOS" : "TESTIMONIALS"}
          </span>
        </h2>
      </section>
      <section className="review-container md:pt-0 text-light w-full p-5 md:pl-20 md:pr-20">
        <div className="review-1 pb-2 md:flex md:flex-wrap">
          <div className="img-review-1 md:w-1/2 w-full h-48 bg-yellow-300"></div>
          <div className="text-container md:w-1/2 md:p-5 md:pt-0">
            <h4 className="pt-3 md:pt-0 font-bold text-light">
              {props.isSpanish ? "Remodelación del baño" : "Bathroom Remodel"},
              Fort Mill
            </h4>
            <p className="w-full pt-3 md:text-xxs text-light">
              {props.isSpanish
                ? "Recientemente trabajamos con De Jesus Contracting para la renovación de nuestro baño y estamos encantados con los resultados. De principio a fin, el proceso fue sencillo y profesional. El equipo, dirigido por Chris, estuvo atento a nuestras necesidades, ofreció valiosas sugerencias y demostró una experiencia impresionante. Utilizaron materiales de alta calidad y aseguraron la perfección en cada detalle. La artesanía es notable, haciendo que nuestro baño parezca sacado de una revista. El equipo fue puntual, respetuoso y mantuvo un ambiente de trabajo limpio mientras nos mantenía informados y disponibles para preguntas. Recomendamos ampliamente De Jesus Contracting a cualquiera que busque un contratista confiable y capacitado. ¡Gracias por hacer realidad nuestra visión!"
                : "We recently worked with De Jesus Contracting for our bathroom renovation and are thrilled with the results. From start to finish, the process was smooth and professional. The team, led by Chris, was attentive to our needs, offering valuable suggestions and demonstrating impressive expertise. They used high-quality materials and ensured perfection in every detail. The craftsmanship is remarkable, making our bathroom look like something out of a magazine. The team was punctual, respectful, and maintained a clean work environment while keeping us informed and available for questions. We highly recommend De Jesus Contracting for anyone seeking a reliable, skilled contractor. Thank you for making our vision a reality!"}
            </p>
            <div className="client-container flex w-full items-center md:pt-3  pt-10 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 md:w-1/6 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">
                  Nathan & Jessica Wilson
                </h3>
                <h5 className="md:text-xxs text-light">
                  {props.isSpanish
                    ? "REMODELACIÓN DEL BAÑO"
                    : "BATHROOM REMODEL"}
                </h5>
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
                <h3 className="font-bold text-light md:text-xs text-light">
                  Justin Davis
                </h3>
                <h5 className="text-xxs text-light">
                  {props.isSpanish ? "PROYECTO DE TECHADO" : "ROOFING PROJECT"}
                </h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">
              {props.isSpanish
                ? "Contratamos a De Jesus Contracting para un proyecto de techado después de una fuerte tormenta de granizo y no podríamos estar más satisfechos con su trabajo. El equipo fue rápido, profesional y eficiente, abordó rápidamente los daños y proporcionó una reparación de alta calidad. Su atención al detalle y su compromiso de utilizar los mejores materiales aseguraron que nuestro techo fuera restaurado a la perfección. ¡Recomendamos encarecidamente De Jesus Contracting para cualquier necesidad de techado!"
                : "We hired De Jesus Contracting for a roofing project after a severe hail storm, and we couldn't be more satisfied with their work. The team was prompt, professional, and efficient, quickly addressing the damage and providing a high-quality repair. Their attention to detail and commitment to using the best materials ensured our roof was restored to perfection. We highly recommend De Jesus Contracting for any roofing needs!"}
            </p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
          <div className="normal-review w-full md:w-1/3 md:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">
                  Justin Davis
                </h3>
                <h5 className="text-xxs text-light">
                  {props.isSpanish ? "PROYECTO DE TECHADO" : "ROOFING PROJECT"}
                </h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">
              {props.isSpanish
                ? "Contratamos a De Jesus Contracting para un proyecto de techado después de una fuerte tormenta de granizo y no podríamos estar más satisfechos con su trabajo. El equipo fue rápido, profesional y eficiente, abordó rápidamente los daños y proporcionó una reparación de alta calidad. Su atención al detalle y su compromiso de utilizar los mejores materiales aseguraron que nuestro techo fuera restaurado a la perfección. ¡Recomendamos encarecidamente De Jesus Contracting para cualquier necesidad de techado!"
                : "We hired De Jesus Contracting for a roofing project after a severe hail storm, and we couldn't be more satisfied with their work. The team was prompt, professional, and efficient, quickly addressing the damage and providing a high-quality repair. Their attention to detail and commitment to using the best materials ensured our roof was restored to perfection. We highly recommend De Jesus Contracting for any roofing needs!"}
            </p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
          <div className="normal-review w-full md:w-1/3 md:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">
                  Justin Davis
                </h3>
                <h5 className="text-xxs text-light">
                  {props.isSpanish ? "PROYECTO DE TECHADO" : "ROOFING PROJECT"}
                </h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">
              {props.isSpanish
                ? "Contratamos a De Jesus Contracting para un proyecto de techado después de una fuerte tormenta de granizo y no podríamos estar más satisfechos con su trabajo. El equipo fue rápido, profesional y eficiente, abordó rápidamente los daños y proporcionó una reparación de alta calidad. Su atención al detalle y su compromiso de utilizar los mejores materiales aseguraron que nuestro techo fuera restaurado a la perfección. ¡Recomendamos encarecidamente De Jesus Contracting para cualquier necesidad de techado!"
                : "We hired De Jesus Contracting for a roofing project after a severe hail storm, and we couldn't be more satisfied with their work. The team was prompt, professional, and efficient, quickly addressing the damage and providing a high-quality repair. Their attention to detail and commitment to using the best materials ensured our roof was restored to perfection. We highly recommend De Jesus Contracting for any roofing needs!"}
            </p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
        </section>
        <div className="review-1 pb-2 md:flex md:flex-wrap">
          <div className="img-review-2 md:w-1/2 w-full h-48 bg-yellow-300"></div>
          <div className="text-container md:w-1/2 md:p-5 md:pt-0">
            <h4 className="pt-3 md:pt-0 font-bold text-light">
              {props.isSpanish ? "Remodelación del baño" : "Bathroom Remodel"},
              Fort Mill
            </h4>
            <p className="w-full pt-3 md:text-xxs text-light">
              {props.isSpanish
                ? "Recientemente contratamos a De Jesus Contracting para la remodelación de nuestra sala de estar y no podríamos estar más satisfechos con el resultado. Desde el principio, el proceso fue eficiente y llevado con la máxima profesionalidad. Chris y su equipo fueron increíblemente receptivos a nuestras ideas y necesidades y brindaron sugerencias interesantes que realmente mejoraron nuestra visión. Su experiencia fue evidente en cada fase del proyecto y utilizaron solo materiales de la más alta calidad para garantizar resultados duraderos. La atención al detalle y la artesanía fueron excepcionales, transformando nuestra sala de estar en un espacio hermoso y acogedor. El equipo siempre fue puntual, respetuoso y mantuvo un espacio de trabajo limpio, manteniéndonos actualizados y respondiendo cualquier pregunta con prontitud. Recomendamos de todo corazón De Jesus Contracting a cualquiera que busque un contratista calificado y confiable. ¡Gracias por darle vida a la sala de estar de nuestros sueños!"
                : "We recently hired De Jesus Contracting for our living room remodel, and we couldn't be more pleased with the outcome. From the very beginning, the process was efficient and handled with the utmost professionalism. Chris and his team were incredibly responsive to our ideas and needs, providing insightful suggestions that truly enhanced our vision. Their expertise was apparent in every phase of the project, and they used only the highest quality materials to ensure lasting results. The attention to detail and craftsmanship were exceptional, transforming our living room into a beautiful and inviting space. The crew was always punctual, respectful, and maintained a clean workspace, keeping us updated and addressing any questions promptly. We wholeheartedly recommend De Jesus Contracting to anyone in search of a dependable, skilled contractor. Thank you for bringing our dream living room to life!"}
            </p>
            <div className="client-container flex w-full items-center md:pt-3  pt-10 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 md:w-1/6 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">
                  Brian and Carleigh Mendez
                </h3>
                <h5 className="md:text-xxs text-light">
                  {props.isSpanish
                    ? "REMODELACIÓN DE LA SALA DE ESTAR"
                    : "LIVING ROOM REMODEL"}
                </h5>
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
                <h3 className="font-bold text-light md:text-xs text-light">
                  Justin Davis
                </h3>
                <h5 className="text-xxs text-light">
                  {props.isSpanish ? "PROYECTO DE TECHADO" : "ROOFING PROJECT"}
                </h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">
              {props.isSpanish
                ? "Contratamos a De Jesus Contracting para un proyecto de techado después de una fuerte tormenta de granizo y no podríamos estar más satisfechos con su trabajo. El equipo fue rápido, profesional y eficiente, abordó rápidamente los daños y proporcionó una reparación de alta calidad. Su atención al detalle y su compromiso de utilizar los mejores materiales aseguraron que nuestro techo fuera restaurado a la perfección. ¡Recomendamos encarecidamente De Jesus Contracting para cualquier necesidad de techado!"
                : "We hired De Jesus Contracting for a roofing project after a severe hail storm, and we couldn't be more satisfied with their work. The team was prompt, professional, and efficient, quickly addressing the damage and providing a high-quality repair. Their attention to detail and commitment to using the best materials ensured our roof was restored to perfection. We highly recommend De Jesus Contracting for any roofing needs!"}
            </p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
          <div className="normal-review w-full md:w-1/3 md:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">
                  Justin Davis
                </h3>
                <h5 className="text-xxs text-light">
                  {props.isSpanish ? "PROYECTO DE TECHADO" : "ROOFING PROJECT"}
                </h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">
              {props.isSpanish
                ? "Contratamos a De Jesus Contracting para un proyecto de techado después de una fuerte tormenta de granizo y no podríamos estar más satisfechos con su trabajo. El equipo fue rápido, profesional y eficiente, abordó rápidamente los daños y proporcionó una reparación de alta calidad. Su atención al detalle y su compromiso de utilizar los mejores materiales aseguraron que nuestro techo fuera restaurado a la perfección. ¡Recomendamos encarecidamente De Jesus Contracting para cualquier necesidad de techado!"
                : "We hired De Jesus Contracting for a roofing project after a severe hail storm, and we couldn't be more satisfied with their work. The team was prompt, professional, and efficient, quickly addressing the damage and providing a high-quality repair. Their attention to detail and commitment to using the best materials ensured our roof was restored to perfection. We highly recommend De Jesus Contracting for any roofing needs!"}
            </p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
          <div className="normal-review w-full md:w-1/3 md:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">
                  Justin Davis
                </h3>
                <h5 className="text-xxs text-light">
                  {props.isSpanish ? "PROYECTO DE TECHADO" : "ROOFING PROJECT"}
                </h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">
              {props.isSpanish
                ? "Contratamos a De Jesus Contracting para un proyecto de techado después de una fuerte tormenta de granizo y no podríamos estar más satisfechos con su trabajo. El equipo fue rápido, profesional y eficiente, abordó rápidamente los daños y proporcionó una reparación de alta calidad. Su atención al detalle y su compromiso de utilizar los mejores materiales aseguraron que nuestro techo fuera restaurado a la perfección. ¡Recomendamos encarecidamente De Jesus Contracting para cualquier necesidad de techado!"
                : "We hired De Jesus Contracting for a roofing project after a severe hail storm, and we couldn't be more satisfied with their work. The team was prompt, professional, and efficient, quickly addressing the damage and providing a high-quality repair. Their attention to detail and commitment to using the best materials ensured our roof was restored to perfection. We highly recommend De Jesus Contracting for any roofing needs!"}
            </p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Testimonials;
