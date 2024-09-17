import { React, useEffect, useRef} from "react";
import "./testimonials.css";
import logo from "../../imgs/logo.png";

const Testimonials = (props) => {
  const topElement = useRef(null)
  useEffect(() => {
    console.log("page hit");
    topElement.current.scrollIntoView()
  }, [])

  return (
    <div className="page" id="testimonials-page">
            <div className="focus" ref={topElement}></div>
      <div className="med-header-interior w-screen hidden md:flex min-h-24">
        <img
          src={logo}
          alt=""
          className="w-1/6 max-w-28 h-3/4 mt-4 ml-20  xl:ml-52"
        />
      </div>
      <section className="top-section md:flex md:flex-wrap p-5 pt-20 md:pt-8 md:pb-12 md:pl-20 md:pr-20 xl:pl-52 xl:pr-52 text-light">
        <h2 className="sub-header mb-5 md:mb-0 text-5xl leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col md:w-3/6" ref={topElement}>
          <span className="md:mt-0 text-light">
            {props.isSpanish ? "TESTIMONIOS" : "TESTIMONIALS"}
          </span>
        </h2>
      </section>
      <section className="review-container md:pt-0 text-light w-full p-5 md:pl-20 xl:pl-52 xl:pr-52 md:pr-20">
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
                  Christian and Alicent Cole
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
                  The Querill Family
                </h3>
                <h5 className="text-xxs text-light">
                  {props.isSpanish ? "PROYECTO DE CERCADO" : "FENCING PROJECT"}
                </h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">
              {props.isSpanish
                ? "Contratamos a De Jesus Contracting para un proyecto de cercado y superaron nuestras expectativas. El equipo fue profesional, eficiente y atento a nuestras preferencias de diseño. La calidad de la mano de obra y los materiales utilizados fueron de primera categoría, lo que dio como resultado una valla resistente y hermosa. ¡Recomendamos encarecidamente De Jesus Contracting para cualquier necesidad de cercado!"
                : "We hired De Jesus Contracting for a fencing project, and they exceeded our expectations. The team was professional, efficient, and attentive to our design preferences. The quality of workmanship and materials used were top-notch, resulting in a sturdy and beautiful fence. We highly recommend De Jesus Contracting for any fencing needs!"}
            </p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
          <div className="normal-review w-full md:w-1/3 md:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">
                  Michael & Sabrina Sewalt
                </h3>
                <h5 className="text-xxs text-light">
                  {props.isSpanish ? "RENOVACIÓN DEL PATIO TRASERO" : "BACKYARD RENOVATION"}
                </h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">
              {props.isSpanish
                ? "Recientemente trabajamos con De Jesus Contracting en la renovación de un patio trasero y no podríamos estar más contentos con el resultado. El equipo fue profesional, imaginativo y atento a nuestra visión. Transformaron nuestro patio trasero en un espacio hermoso y funcional, utilizando materiales de primera calidad y una artesanía excepcional. ¡Recomendamos encarecidamente De Jesus Contracting para cualquier necesidad de renovación del patio trasero!"
                : "We recently worked with De Jesus Contracting on a backyard renovation, and we couldn't be happier with the outcome. The team was professional, imaginative, and attentive to our vision. They transformed our backyard into a beautiful and functional space, using top-quality materials and exceptional craftsmanship. We highly recommend De Jesus Contracting for any backyard renovation needs!"}
            </p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
        </section>
        <div className="review-1 pb-2 md:flex md:flex-wrap">
          <div className="img-review-2 md:w-1/2 w-full h-48 bg-yellow-300"></div>
          <div className="text-container md:w-1/2 md:p-5 md:pt-0">
            <h4 className="pt-3 md:pt-0 font-bold text-light">
              {props.isSpanish ? "Remodelación de la sala estar" : "Living Room Remodel"},
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
                  Justin & Sarah Davis
                </h3>
                <h5 className="text-xxs text-light">
                  {props.isSpanish ? "PROYECTO DEL PORCHE DELANTERO" : "FRONT PORCH PROJECT"}
                </h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">
              {props.isSpanish
                ? "Recientemente trabajamos con De Jesus Contracting en un nuevo proyecto de porche y estamos encantados con los resultados. El equipo fue altamente profesional, atento al detalle y eficiente durante todo el proceso. Escucharon nuestras ideas y brindaron valiosos aportes, lo que resultó en un porche que complementa perfectamente nuestro hogar y estilo de vida. La artesanía es impecable y se utilizan materiales de alta calidad para garantizar la durabilidad y el atractivo estético. De Jesus Contracting superó nuestras expectativas en todos los sentidos y los recomendamos de todo corazón para cualquier proyecto de mejora del hogar o porche."
                : "We recently worked with De Jesus Contracting on a new porch project, and we are thrilled with the results. The team was highly professional, attentive to detail, and efficient throughout the entire process. They listened to our ideas and provided valuable input, resulting in a porch that perfectly complements our home and lifestyle. The craftsmanship is impeccable, with high-quality materials used to ensure durability and aesthetic appeal. De Jesus Contracting exceeded our expectations in every way, and we wholeheartedly recommend them for any porch or home improvement projects."}
            </p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
          <div className="normal-review w-full md:w-1/3 md:p-1">
            <div className="client-container flex w-full items-center  pt-5 pb-5">
              <div className="left-review icon rounded-full bg-blue-200 w-1/5 aspect-square"></div>
              <div className="right-review ml-3 w-3/4">
                <h3 className="font-bold text-light md:text-xs text-light">
                  The Smelting Family
                </h3>
                <h5 className="text-xxs text-light">
                  {props.isSpanish ? "PROYECTO DE TECHADO" : "ROOFING PROJECT"}
                </h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">
              {props.isSpanish
                ? "Después de una tormenta de granizo dañina, contratamos a De Jesus Contracting para un proyecto de techado y su servicio superó nuestras expectativas. Evaluaron rápidamente los daños y proporcionaron un plan exhaustivo de reparación, demostrando eficiencia y profesionalismo en todo momento. La atención al detalle del equipo y el compromiso de utilizar materiales de primera calidad aseguraron que nuestro techo no solo se recuperara sino que se fortaleciera a largo plazo. Recomendamos con confianza a De Jesus Contracting para cualquier necesidad de techado debido a su excepcional mano de obra y confiabilidad."
                : "Following a damaging hailstorm, we engaged De Jesus Contracting for a roofing project, and their service surpassed our expectations. They promptly assessed the damage and provided a thorough plan for repair, demonstrating both efficiency and professionalism throughout. The team's attention to detail and commitment to using top-tier materials ensured our roof not only recovered but was strengthened for the long term. We confidently recommend De Jesus Contracting for any roofing needs based on their exceptional workmanship and reliability."}
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
                  {props.isSpanish ? "RENOVACIÓN DEL SÓTANO" : "BASEMENT RENOVATION"}
                </h5>
              </div>
            </div>
            <p className="w-full md:pr-3 pb-5 md:text-xxs text-light">
              {props.isSpanish
                ? "Recientemente, De Jesus Contracting completó un proyecto de acabado del sótano, encargándose de todos los paneles de yeso, pintura y pisos, y no podríamos estar más felices con el resultado. El equipo fue profesional, capacitado y eficiente durante todo el proceso. Prestaron mucha atención a los detalles, asegurándose de que cada aspecto del proyecto se completara con un alto nivel. El acabado de los paneles de yeso fue impecable, la pintura se realizó meticulosamente y la instalación del piso se ejecutó de manera experta. Utilizaron materiales de calidad y su artesanía transformó nuestro sótano en un espacio funcional y acogedor. Recomendamos encarecidamente De Jesus Contracting para cualquier proyecto de mejoras para el hogar; su experiencia y profesionalismo son incomparables."
                : "We recently had De Jesus Contracting complete a basement finishing project, handling all the drywall, painting, and flooring, and we couldn't be happier with the outcome. The team was professional, skilled, and efficient throughout the entire process. They paid close attention to detail, ensuring that every aspect of the project was completed to a high standard. The drywall finishing was flawless, the painting was done meticulously, and the flooring installation was expertly executed. They used quality materials and their craftsmanship transformed our basement into a functional and inviting space. We highly recommend De Jesus Contracting for any home improvement projects; their expertise and professionalism are unmatched."}
            </p>
            <hr className="mt-7 mb-7 md:hidden" />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Testimonials;
