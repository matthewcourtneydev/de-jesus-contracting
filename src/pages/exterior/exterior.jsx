import React from "react";
import "./exterior.css";
import logo from "../../imgs/logo.png";


import { MdOutlineWindow } from "react-icons/md";
import { HiOutlineViewBoards } from "react-icons/hi";
import { PiHouse, PiSolarRoof } from "react-icons/pi";




const Exterior = (props) => {
  return (
    <div className="page" id="about-page">
      <div className="med-header-interior w-screen hidden md:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 max-w-28 h-3/4 mt-4 ml-20 xl:ml-52" />
      </div>
      <section className="top-section md:flex md:flex-wrap p-5 pt-20 md:pt-8 md:pb-12 md:pl-20 xl:pl-52 xl:pr-52 md:pr-20 text-light">
        <h2 className="sub-header mb-5 text-5xl leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col md:md:order-0 md:w-3/6 w-full">
          <span className="md:mt-0 text-light">{props.isSpanish ? "SERVICIOS" : "EXTERIOR"} </span>
          <span className="mt-2 md:mt-2 text-light">{props.isSpanish ? "EXTERIORES" : "SERVICES"}</span>
        </h2>
        <div className="top-section-img-ex md:mb-20 md:mt-12 w-full h-60 md:order-3 bg-slate-100"></div>
        <p className="pt-5 md:w-2/6 md:pr-8 font-light sans-font lg:text-xs md:text-xxs md:pt-0 md:order-1 text-light">
        {props.isSpanish ? "Las renovaciones exteriores mejoran tanto el atractivo estético como la funcionalidad de su hogar, elevando significativamente su experiencia de vida y el valor de su propiedad. De Jesus Contracting se destaca en servicios expertos de revestimientos, techos, marcos y ventanas, utilizando materiales de primera calidad para brindar precisión y durabilidad. Ya sea actualizando la apariencia de su hogar, mejorando la eficiencia energética o aumentando el valor de reventa, adaptamos soluciones para reflejar su estilo y mejorar su espacio vital." : "Exterior renovations enhance both the aesthetic appeal and functionality of your home, significantly elevating your living experience and property value. De Jesus Contracting excels in expert siding, roofing, framing, and window services, using top-quality materials for precision and durability. Whether updating your home’s appearance, enhancing energy efficiency, or boosting resale value, we tailor solutions to reflect your style and improve your living space."}
        </p>
        <button
          className="md:order-2 md:w-1/6 md:text-xxs get-started pt-2 pb-2 pl-5 pr-5 mb-5 text-light md:mt-0 md:max-h-9 mt-5 border-white border"
          onClick={() => props.navigateTo("/estimates")}
        >
          {props.isSpanish ? "EMPEZAR" : "GET STARTED"}
        </button>
        <p className="pre-text text-lg md:text-xs sans-font mt-5 md:order-3 md:w-1/2 mb-2">
          <span className="text-xl pre-text-dark sans-font-it">
          / {props.isSpanish ? "Las primeras impresiones lo son todo" : "First Impressions are Everything"}
          </span>
          <h2 className="sub-header mb-5 text-4xl leading-10 text-light md:mt-2 md:text-5xl flex flex-col">
            <span className="text-light">{props.isSpanish ? "AGREGUE UN" : "ADD SOME CURB"}</span>
            <div className="md:w-screen text-light relative z-10 mt-1 md:ml-36 leading-12 md:text-light md:mt-2">
            {props.isSpanish ? "ATRACTIVO A SU " : "APPEAL TO YOUR"}
            </div>
            <span className="md:ml-12 text-light leading-10 mt-1 md:text-light md:mt-2">
            {props.isSpanish ? "CASA AHORA" : "HOME NOW!"}
            </span>
          </h2>
          <p className="pt-5 text-light text-lg font-light sans-font md:text-xs sans-font text-sm w-full md:w-full md:pl-8 md:pr-6">
          {props.isSpanish ? "Las renovaciones exteriores pueden mejorar significativamente su experiencia de vida al mejorar tanto el atractivo estético como la funcionalidad de su hogar. Mejorar el exterior no sólo aumenta el atractivo exterior sino que también aumenta el valor general de su propiedad. De Jesus Contracting se especializa en transformar viviendas con servicios expertos en revestimientos, techos, marcos y ventanas, garantizando que cada proyecto se ejecute con precisión y materiales de primera calidad. Ya sea que esté buscando actualizar el aspecto de su hogar, mejorar la eficiencia energética o aumentar su valor de reventa, De Jesus Contracting puede convertir su visión en realidad con soluciones personalizadas que reflejen su estilo y mejoren su espacio habitable." : "Exterior renovations can significantly elevate your living experience by enhancing both the aesthetic appeal and functionality of your home. Improving the exterior not only boosts curb appeal but also increases the overall value of your property. De Jesus Contracting specializes in transforming homes with expert siding, roofing, framing, and window services, ensuring each project is executed with precision and top-quality materials. Whether you're looking to update your home's look, improve energy efficiency, or increase its resale value, De Jesus Contracting can turn your vision into reality with tailored solutions that reflect your style and enhance your living space."}
          </p>
        </p>
        <div className="top-section-img-2 md:w-1/2 md:order-5 md:m-auto w-full h-96 mt-5 bg-slate-100"></div>
      </section>

      <section className="section-two md:flex md:flex-wrap bg-white p-5 pt-10 md:pl-20 md:pr-20 xl:pl-52 xl:pr-52">
        <div className="header-text md:order-1 md:w-1/2 ">
          <p className="pre-text-light text-xl sans-font-it mb-2">
            / {props.isSpanish ? "La diferencia de Jesús" : "The De Jesus Difference"}
          </p>
          <h2 className="sub-header mb-5 text-5xl text-dark leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col ">
            <span>{props.isSpanish ? "QUÉ NOS " : "WHAT MAKES US"}</span>
            <span className="md:ml-40 text-dark mt-1 md:mt-2">{props.isSpanish ? "DIFERENCIA" : "DIFFERENT"}</span>
          </h2>
          <div className="remodel-img-ex w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container md:order-0 md:w-1/2">
          <div className="card  min-h-fit w-full pt-5 pb-5 mt-10 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <PiSolarRoof className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              {props.isSpanish ? "Techumbre" : "Roofing"}
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
                {props.isSpanish ? "Techumbre" : "Roofing"}
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
              {props.isSpanish ? "El techo juega un papel fundamental a la hora de proteger las casas de los elementos y mantener su integridad estructural y longevidad." : "Roofing plays a critical role in shielding homes from the elements and maintaining their structural integrity and longevity."}
              </p>
            </div>
          </div>
          <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <HiOutlineViewBoards  className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sm:hidden font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
              {props.isSpanish ? "Via muerta" : "Siding"}
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 hidden sm:inline sans-font font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
                {props.isSpanish ? "Via muerta" : "Siding"}
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
              {props.isSpanish ? "Reemplazar el revestimiento es crucial para mantener la integridad estructural de su hogar, mejorar el aislamiento y actualizar su atractivo exterior con materiales frescos y duraderos." : "Replacing siding is crucial to maintain the structural integrity of your home, enhance insulation, and update its curb appeal with fresh, durable materials."}
              </p>
            </div>
          </div>
        

        <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
            <PiHouse className="m-auto mt-5 lg:mt-4 text-light" />
          </div>
          <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
            {props.isSpanish ? "Enmarcado" : "Framing"}
          </h4>
          <div className="wrapper md:w-4/5">
            <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              {props.isSpanish ? "Enmarcado" : "Framing"}
            </h4>
            <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
            {props.isSpanish ? "El marco es esencial en la construcción, ya que proporciona el marco estructural que soporta y da forma a los edificios, asegurando estabilidad y durabilidad." : "Framing is essential in construction as it provides the structural framework that supports and shapes buildings, ensuring stability and durability."}
            </p>
          </div>
        </div>
        <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
          <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
            <MdOutlineWindow  className="m-auto mt-5 lg:mt-4 text-light" />
          </div>
          <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
            {props.isSpanish ? "SERVICIOS" : "Ventanas"}
          </h4>
          <div className="wrapper md:w-4/5">
            <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              {props.isSpanish ? "SERVICIOS" : "Ventanas"}
            </h4>
            <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
            {props.isSpanish ? "Las ventanas necesitan ser reemplazadas para mejorar la eficiencia energética, mejorar el aislamiento y mejorar la apariencia y funcionalidad general de su hogar." : "Windows need replacement to enhance energy efficiency, improve insulation, and upgrade the overall appearance and functionality of your home."}
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
          <div className="card-img-1-ex w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">
          {props.isSpanish ? "PROYECTO DE TECHO" : "ROOF PROJECT"}
          </p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Rock Hill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit second-card md:w-1/2 md:ml-auto md:mr-0 w-full mb-5 md:order-2">
          <div className="card-img-2-ex w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">
          {props.isSpanish ? "PROYECTO DE TECHO" : "ROOF PROJECT"}
          </p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Fort Mill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit third-card md:w-2/5 md:mr-20 w-full mb-5 md:order-3">
          <div className="card-img-3-ex w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold pre-text-dark text-xs font-bold mb-2">
          {props.isSpanish ? "VÍA MUERTA PROYECTO" : "SIDING PROJECT"}
          </p>
          <p className="text-2xl text-light md:text-xl font-thin w-1/2">
            Ballantyne,
            <br /> North Carolina
          </p>
        </div>
        <div className="card  min-h-fit w-full second-card md:ml-auto md:mr-0 md:w-1/2 mb-5 md:order-4">
          <div className="card-img-4-ex w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs pre-text-dark font-bold mb-2">
          {props.isSpanish ? "PROYECTO DE VENTANA" : "WINDOW PROJECT"}
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

export default Exterior;
