import { React, useEffect, useRef } from "react";
import "./interior.css";
import logo from "../../imgs/logo.png";

import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { BsXDiamond } from "react-icons/bs";
import { HiOutlineViewBoards } from "react-icons/hi";
import { TbPaint } from "react-icons/tb";

const Interior = (props) => {
  const topElement = useRef(null)
  useEffect(() => {
    console.log("page hit");
    topElement.current.scrollIntoView()
  }, [])

  return (
    <div className="page" id="about-page">
            <div className="focus" ref={topElement}></div>
      <div className="med-header-interior w-screen hidden md:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 max-w-28 h-3/4 mt-4 ml-20 xl:ml-52" />
      </div>
      <section className="top-section md:flex md:flex-wrap p-5 pt-20 md:pt-8 md:pb-12 md:pl-20 xl:pl-52 xl:pr-52 md:pr-20 text-light">
        <h2 className="sub-header mb-5 text-5xl leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col md:md:order-0 md:w-3/6 w-full">
          <span className="md:mt-0 text-light">{props.isSpanish ? "SERVICIOS" : "INTERIOR"} </span>
          <span className="mt-2 md:mt-2 text-light">{props.isSpanish ? "INTERIORES" : "SERVICES"}</span>
        </h2>
        <div className="top-section-img md:mb-20 md:mt-12 w-full h-60 md:order-3 bg-slate-100"></div>
        <p className="pt-5 md:w-2/6 md:pr-8 font-light sans-font lg:text-xs md:text-xxs md:pt-0 md:order-1 text-light">
        {props.isSpanish ? "De Jesus Contracting se especializa en revitalizar el interior de su hogar, desde pisos y pintura hasta renovaciones de baños y cocinas. Nuestro equipo capacitado está dedicado a hacer realidad su visión con artesanía de calidad y atención al detalle. Ya sea que esté modernizando su espacio o actualizando su estética, brindamos soluciones personalizadas que mejoran tanto la funcionalidad como el atractivo, asegurando que su hogar refleje su estilo y supere sus expectativas." : "De Jesus Contracting specializes in revitalizing your home's interior, from flooring and painting to bathroom and kitchen renovations. Our skilled team is dedicated to bringing your vision to life with quality craftsmanship and attention to detail. Whether you're modernizing your space or updating its aesthetics, we provide tailored solutions that enhance both functionality and appeal, ensuring your home reflects your style and exceeds expectations."}
        </p>
        <button
          className="md:order-2 md:w-1/6 md:text-xxs get-started pt-2 pb-2 pl-5 pr-5 mb-5 text-light md:mt-0 md:max-h-9 mt-5 border-white border"
          onClick={() => props.navigateTo("/estimates")}
        >
          {props.isSpanish ? "EMPEZAR" : "GET STARTED"}
        </button>
        <p className="pre-text text-lg md:text-xs sans-font mt-5 md:order-3 md:w-1/2 mb-2">
          <span className="text-xl pre-text-dark sans-font-it">
            / {props.isSpanish ? "Vacaciones en casa" : "Staycation at Home"}
          </span>
          <h2 className="sub-header mb-5 text-4xl leading-10 text-light md:mt-2 md:text-5xl flex flex-col">
            <span className="text-light">{props.isSpanish ? "EL INTERIOR" : "THE INTERIOR"}</span>
            <div className="md:w-screen text-light relative z-10 mt-1 md:ml-36 leading-12 md:text-light md:mt-2">
            {props.isSpanish ? "DE TUS SUEÑOS" : "OF YOUR DREAMS"}
            </div>
            <span className="md:ml-12 text-light leading-10 mt-1 md:text-light md:mt-2">
            {props.isSpanish ? "ESTÁ AQUÍ" : "IS HERE!"}
            </span>
          </h2>
          <p className="pt-5 text-light font-light sans-font md:text-xs sans-font text-sm w-full md:w-full md:pl-8 md:pr-6 lg:text-xs">
          {props.isSpanish ? "Las renovaciones interiores pueden mejorar significativamente el valor y el atractivo estético de una casa al actualizar espacios obsoletos, mejorar la funcionalidad e incorporar elementos de diseño modernos. De Jesus Contracting se especializa en transformar interiores con servicios como pintura, pisos, instalación de paneles de yeso y alicatados. Nuestra artesanía experta y atención al detalle garantizan que cada proyecto no solo cumpla sino que supere sus expectativas, creando un espacio habitable hermoso y valioso. Permítanos ayudarlo a hacer realidad su visión y elevar la comodidad y el atractivo de su hogar." : "Interior renovations can significantly enhance a home's value and aesthetic appeal by updating outdated spaces, improving functionality, and incorporating modern design elements. De Jesus Contracting specializes in transforming interiors with services such as painting, flooring, drywall installation, and tiling. Our expert craftsmanship and attention to detail ensure that each project not only meets but exceeds your expectations, creating a beautiful and valuable living space. Let us help bring your vision to life and elevate the comfort and appeal of your home."}
          </p>
        </p>
        <div className="top-section-img-2-int md:w-1/2 md:order-5 md:m-auto w-full h-96 mt-5 bg-slate-100"></div>
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
          <div className="second-section-img w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container md:order-0 md:w-1/2">
          <div className="card  min-h-fit w-full pt-5 pb-5 mt-10 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <HiOutlineViewBoards className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
            {props.isSpanish ? "" : "Flooring"}
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              {props.isSpanish ? "Piso" : "Flooring"}
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
              {props.isSpanish ? "Los pisos de calidad no solo realzan el valor de una casa, sino que también aumentan su belleza, proporcionando superficies duraderas y visualmente atractivas que elevan el ambiente general del espacio." : "Quality flooring not only enhances the value of a home but also adds to its beauty, providing durable and visually appealing surfaces that elevate the overall ambiance of the space."}
              </p>
            </div>
          </div>
          <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <TbPaint className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sm:hidden font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
            {props.isSpanish ? "Pintar" : "Painting"}
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 hidden sm:inline sans-font font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
              {props.isSpanish ? "Pintar" : "Painting"}
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
              {props.isSpanish ? "Una nueva capa de pintura interior puede transformar completamente un espacio, revitalizando su ambiente y reflejando su estilo personal con un atractivo estético renovado." : "A fresh coat of interior paint can completely transform a space, revitalizing its ambiance and reflecting your personal style with a renewed aesthetic appeal."}
              </p>
            </div>
          </div>

          <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <HiOutlineWrenchScrewdriver className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
            {props.isSpanish ? "Paneles de yeso" : "Drywall"}
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              {props.isSpanish ? "Paneles de yeso" : "Drywall"}
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
              {props.isSpanish ? "Nos especializamos en servicios de paneles de yeso, ya sea instalando paneles de yeso para nuevas extensiones o reparando orificios existentes, garantizando soluciones integrales adaptadas a todas sus necesidades." : "We specialize in drywall services, whether it's installing drywall for new extensions or repairing existing holes, ensuring comprehensive solutions tailored to meet all your needs."}
              </p>
            </div>
          </div>
          <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <BsXDiamond className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              {props.isSpanish ? "" : "Tiling"}
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
                {props.isSpanish ? "Embaldosado" : "Tiling"}
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
              {props.isSpanish ? "Volver a colocar baldosas en el piso o en la ducha puede cambiar drásticamente la apariencia de un espacio, agregando una estética moderna y mejorando la usabilidad con materiales duraderos y elegantes." : "Retiling a floor or shower can dramatically change the look and feel of a space, adding modern aesthetics and enhancing usability with durable, stylish materials."}
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
          <div className="card-img-1 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">
          {props.isSpanish ? "REMODELACIÓN DEL BAÑO" : "BATHROOM REMODEL"}
          </p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Rock Hill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit second-card md:w-1/2 md:ml-auto md:mr-0 w-full mb-5 md:order-2">
          <div className="card-img-2 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">
          {props.isSpanish ? "REMODELACIÓN DE COCINA" : "KITCHEN REMODEL"}
          </p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Fort Mill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit third-card md:w-2/5 md:mr-20 w-full mb-5 md:order-3">
          <div className="card-img-3 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold pre-text-dark text-xs font-bold mb-2">
          {props.isSpanish ? "REMODELACIÓN DEL ESTUDIO" : "STUDY REMODEL"}
          </p>
          <p className="text-2xl text-light md:text-xl font-thin w-1/2">
            Ballantyne,
            <br /> North Carolina
          </p>
        </div>
        <div className="card  min-h-fit w-full second-card md:ml-auto md:mr-0 md:w-1/2 mb-5 md:order-4">
          <div className="card-img-4 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs pre-text-dark font-bold mb-2">
          {props.isSpanish ? "REMODELACIÓN DEL DORMITORIO" : "BEDROOM REMODEL"}
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
          {props.isSpanish ? "SERVICIOS" : "VER MÁS"}
        </button>
      </section>
    </div>
  );
};

export default Interior;
