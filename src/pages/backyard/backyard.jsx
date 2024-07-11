import React from "react";
import "./backyard.css";
import logo from "../../imgs/logo.png";

import { LiaTreeSolid } from "react-icons/lia";
import { IoWaterSharp } from "react-icons/io5";
import { GiStoneBlock } from "react-icons/gi";

const Backyard = (props) => {
  return (
    <div className="page" id="about-page">
      <div className="med-header-interior w-screen hidden md:flex min-h-24">
        <img
          src={logo}
          alt=""
          className="w-1/6 max-w-28 h-3/4 mt-4 ml-20 xl:ml-52"
        />
      </div>
      <section className="top-section md:flex md:flex-wrap p-5 pt-20 md:pt-8 md:pb-12 md:pl-20 xl:pl-52 xl:pr-52 md:pr-20 text-light">
        <h2 className="sub-header mb-5 text-5xl leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col md:md:order-0 md:w-3/6 w-full">
          <span className="md:mt-0 text-light">
            {props.isSpanish ? "SERVICIOS DE" : "BACKYARD"}
          </span>
          <span className="mt-2 md:mt-2 text-light">
            {props.isSpanish ? "PATIO TRASERO" : "SERVICES"}
          </span>
        </h2>
        <div className="top-section-img-by md:mb-20 md:mt-12 w-full h-60 md:order-3 bg-slate-100"></div>
        <p className="pt-5 md:w-2/6 md:pr-8 font-light sans-font lg:text-xs md:text-xxs md:pt-0 md:order-1 text-light">
          {props.isSpanish
            ? "De Jesus Contracting mejora su patio trasero con servicios expertos de paisajismo, concreto, irrigación y paisajismo. Desde patios y senderos duraderos hasta vegetación exuberante y sistemas de riego eficientes, nuestro equipo capacitado transforma los espacios al aire libre con creatividad y precisión. Ya sea que desee un retiro sereno o una acogedora área de entretenimiento, De Jesus Contracting se asegura de que su patio trasero supere las expectativas, realzando tanto la belleza como la funcionalidad."
            : "De Jesus Contracting enhances your backyard with expert hardscaping, concrete, irrigation, and landscaping services. From durable patios and pathways to lush greenery and efficient irrigation systems, our skilled team transforms outdoor spaces with creativity and precision. Whether you desire a serene retreat or an inviting entertainment area, De Jesus Contracting ensures your backyard exceeds expectations, enhancing both beauty and functionality."}
        </p>
        <button
          className="md:order-2 md:w-1/6 md:text-xxs get-started pt-2 pb-2 pl-5 pr-5 mb-5 text-light md:mt-0 md:max-h-9 mt-5 border-white border"
          onClick={() => props.navigateTo("/estimates")}
        >
          {props.isSpanish ? "EMPEZAR" : "GET STARTED"}
        </button>
        <p className="pre-text text-lg md:text-xs sans-font mt-5 md:order-3 md:w-1/2 mb-2">
          <span className="text-xl pre-text-dark sans-font-it">
            / {props.isSpanish ? "Alma de la fiesta" : "Life of the Party"}
          </span>
          <h2 className="sub-header mb-5 text-4xl leading-10 text-light md:mt-2 md:text-5xl flex flex-col">
            <span className="text-light text-nowrap">
              {props.isSpanish ? "¡ENCUENTRA AVENTURA" : "FIND ADVENTURE IN"}
            </span>
            <div className="md:w-screen text-light relative z-10 mt-1 md:ml-36 leading-12 md:text-light md:mt-2">
              {props.isSpanish ? "EN TU PROPIO" : "YOUR OWN BACKYARD"}
            </div>
            <span className="md:ml-12 text-light leading-10 mt-1 md:text-light md:mt-2">
              {props.isSpanish ? "PATIO HOY!" : "TODAY!"}
            </span>
          </h2>
          {props.isSpanish ? (
            <p className="pt-5 text-light text-lg font-light sans-font md:text-xs sans-font text-sm w-full md:w-full md:pl-8 md:pr-6">
              Un patio trasero es más que una simple parte de la casa; se trata
              de un extensión del espacio vital de su familia y un lugar para
              sus preciados recuerdos. Con De Jesus Contracting, usted puede
              maximizar su El potencial del patio trasero como un hermoso escape
              del vecindario. ajetreo. Nuestra experiencia en paisajismo,
              paisajismo y El riego garantiza que su espacio exterior no sólo
              sea estéticamente agradable pero también funcional y agradable. Ya
              sea que estés buscando para crear un retiro sereno o un lugar de
              reunión vibrante, De Jesus Contratación ofrece soluciones a medida
              que se adaptan a sus necesidades. Además, explore nuestro {" "}
              <span
                className="font-bold underline"
                onClick={() => props.navigateTo("/fencing")}
              >
                servicios de esgrima
              </span>
              {" "} a Complete su santuario al aire libre ideal con privacidad y
              seguridad.
            </p>
          ) : (
            <p className="pt-5 text-light text-lg font-light sans-font md:text-xs sans-font text-sm w-full md:w-full md:pl-8 md:pr-6">
              A backyard is more than just a part of the house; it's an
              extension of your family's living space and a place for cherished
              memories. With De Jesus Contracting, you can maximize your
              backyard's potential as a beautiful escape from the neighborhood
              hustle. Our expertise in hardscaping, landscaping, and irrigation
              ensures your outdoor space is not only aesthetically pleasing but
              also functional and enjoyable. Whether you're looking to create a
              serene retreat or a vibrant gathering spot, De Jesus Contracting
              offers tailored solutions to suit your needs. Additionally,
              explore our{" "}
              <span
                className="font-bold underline"
                onClick={() => props.navigateTo("/fencing")}
              >
                fencing services
              </span>{" "}
              to complete your ideal outdoor sanctuary with privacy and
              security.
            </p>
          )}
        </p>
        <div className="top-section-img-2 remodel-img-by md:w-1/2 md:order-5 md:m-auto w-full h-60 mt-5 bg-slate-100"></div>
      </section>

      <section className="section-two md:flex md:flex-wrap bg-white p-5 pt-10 md:pl-20 md:pr-20 xl:pl-52 xl:pr-52">
        <div className="header-text md:order-1 md:w-1/2 ">
          <p className="pre-text-light text-xl sans-font-it mb-2">
            / {props.isSpanish ? "Espacios creativos" : "Creative Spaces"}
          </p>
          <h2 className="sub-header mb-5 text-5xl text-dark leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col ">
            <span>
              {props.isSpanish ? "TU PATIO TRASERO" : "YOUR BACKYARD"}
            </span>
            <span className="md:ml-40 text-dark mt-1 md:mt-2">
              {props.isSpanish ? "REIMAGINADO" : "REIMAGINED"}
            </span>
          </h2>
          <div className="second-section-img-back w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container md:order-0 md:w-1/2">
          <div className="card  min-h-fit w-full pt-5 pb-5 mt-10 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <GiStoneBlock className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              {props.isSpanish ? "Paisaje duro" : "Hardscape"}
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
                {props.isSpanish ? "Paisaje duro" : "Hardscape"}
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
                {props.isSpanish
                  ? "El paisajismo puede mejorar drásticamente un patio trasero al integrar elementos decorativos como adoquines y bordes de jardín con características funcionales como muros de contención y áreas para sentarse al aire libre. Nos destacamos en la creación de espacios al aire libre que equilibran la belleza y la usabilidad, garantizando estructuras duraderas que se combinan armoniosamente con el paisaje natural."
                  : "Hardscaping can dramatically enhance a backyard by integrating decorative elements such as pavers and garden borders with functional features like retaining walls and outdoor seating areas. We excel in creating outdoor spaces that balance beauty and usability, ensuring durable structures that blend harmoniously with the natural landscape."}
              </p>
            </div>
          </div>
          <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <LiaTreeSolid className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sm:hidden font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
              {props.isSpanish ? "Paisaje" : "Landscape"}
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 hidden sm:inline sans-font font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
                {props.isSpanish ? "Paisaje" : "Landscape"}
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
                {props.isSpanish
                  ? "El paisajismo transforma un patio trasero al combinar elementos visuales como plantas y jardines con adiciones funcionales como caminos y sistemas de riego. Logramos diseñar espacios al aire libre que armonicen belleza y practicidad, asegurando que cada paisaje complemente el entorno con características duraderas y atractivas."
                  : "Landscaping transforms a backyard by combining visual elements like plants and gardens with functional additions such as pathways and irrigation systems. We succeed in designing outdoor spaces that harmonize beauty and practicality, ensuring each landscape complements the environment with durable and attractive features."}
              </p>
            </div>
          </div>

          <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <IoWaterSharp className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              {props.isSpanish ? "Irrigación" : "Irrigation"}
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
                {props.isSpanish ? "Irrigación" : "Irrigation"}
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
                {props.isSpanish
                  ? "El riego puede mejorar drásticamente un patio trasero, satisfaciendo necesidades prácticas como mantener la vegetación con aspersores y agregar valor estético a través de fuentes decorativas y elementos acuáticos. De Jesus Contracting se destaca en el diseño de espacios al aire libre que equilibran la funcionalidad con el atractivo visual, garantizando un uso eficiente del agua y creando una atmósfera serena."
                  : "Irrigation can dramatically enhance a backyard, serving practical needs like maintaining greenery with sprinklers and adding aesthetic value through decorative fountains and water features. De Jesus Contracting excels in designing outdoor spaces that balance functionality with visual appeal, ensuring efficient water use and creating a serene atmosphere."}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-section flex-wrap flex flex-row text-light p-5 md:flex md:flex-wrap md:flex-row md:pl-20 md:pr-20 xl:pl-52 xl:pr-52">
        <p className="header-text sans-font-it text-xl pre-text md:ml-10 md:pl-8 md:order-1 mb-10 pt-5 w-1/2 md:w-1/6 md:pt-5">
          / {props.isSpanish ? "Nuestro trabajo" : "Our Work"}
        </p>
        <div className="card  min-h-fit first-card w-full mb-5 md:order-0 md:w-2/5">
          <div className="card-img-1-by w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">
            {props.isSpanish
              ? "RENOVACIÓN DEL PATIO TRASERO"
              : "BACKYARD RENOVATION"}
          </p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Rock Hill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit second-card md:w-1/2 md:ml-auto md:mr-0 w-full mb-5 md:order-2">
          <div className="card-img-2-by w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">
            {props.isSpanish ? "" : "BACKYARD PROJECT"}
          </p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Fort Mill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit third-card md:w-2/5 md:mr-20 w-full mb-5 md:order-3">
          <div className="card-img-3-by w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold pre-text-dark text-xs font-bold mb-2">
            {props.isSpanish ? "PROYECTO DE PATIO TRASERO" : "BACKYARD PROJECT"}
          </p>
          <p className="text-2xl text-light md:text-xl font-thin w-1/2">
            Ballantyne,
            <br /> North Carolina
          </p>
        </div>
        <div className="card  min-h-fit w-full second-card md:ml-auto md:mr-0 md:w-1/2 mb-5 md:order-4">
          <div className="card-img-4-by w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs pre-text-dark font-bold mb-2">
            {props.isSpanish
              ? "RENOVACIÓN DEL PATIO TRASERO"
              : "BACKYARD RENOVATION"}
          </p>
          <p className="text-2xl text-light md:text-xl font-thin w-1/2">
            Charlotte,
            <br /> North Carolina
          </p>
        </div>

        <button
          className="get-started about-portfolio-btn h-fit pt-2 md:w-1/4 md:mr-60 md:order-5 pb-2 pl-5 pr-5 mt-5 border-white border"
          onClick={() => props.navigateTo("/portfolio")}
        >
          {props.isSpanish ? "VER MÁS" : "SEE MORE"}
        </button>
      </section>
    </div>
  );
};

export default Backyard;
