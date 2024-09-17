import { React, useEffect, useRef } from "react";
import "./about.css";
import logo from "../../imgs/logo.png";
import { LuPencilRuler } from "react-icons/lu";
import { RiSafeFill } from "react-icons/ri";


const About = (props) => {
  const topElement = useRef(null)
  useEffect(() => {
    console.log("page hit");
    topElement.current.scrollIntoView()
  }, [])
  return (
    <div className="page" id="about-page">
            <div className="focus" ref={topElement}></div>
      <div className="med-header-about w-screen hidden md:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 max-w-28 h-3/4 mt-4 ml-20 xl:ml-52"  />
      </div>
      <section className="top-section md:flex md:flex-wrap p-5 pt-20 md:pt-8 md:pb-12 md:pl-20 xl:pl-52 xl:pr-52 md:pr-20 text-light">
        <h2 className="sub-header mb-5 text-5xl leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col md:md:order-0 md:w-3/6 w-full">
          <span className="md:mt-0 text-light">
          {props.isSpanish ? "ACERCA DE " : "ABOUT"} </span>
          <span className="mt-2 md:mt-2 text-light">
          {props.isSpanish ? "NUESTRO EQUIPO" : "OUR TEAM"}</span>
        </h2>
        <div className="top-section-img md:mb-20 md:mt-12 w-full h-60 md:order-3 bg-slate-100"></div>
        <p className="pt-5 md:w-2/6 md:pr-8 font-light sans-font md:text-xxs md:pt-0 md:order-1 text-light lg:text-xs">
        {props.isSpanish ? "De Jesus Contracting ofrece una amplia gama de servicios de construcción y renovación en Rock Hill, SC. Desde techos y revestimientos hasta pintura, pisos, paisajismo y más, nos especializamos en proyectos residenciales y comerciales. Con un enfoque en la calidad artesanal y la satisfacción del cliente, nuestro objetivo es mejorar la funcionalidad, la belleza y el valor de cada propiedad en la que trabajamos, brindando resultados excepcionales que superen las expectativas." : "De Jesus Contracting offers a wide array of construction and renovation services in Rock Hill, SC. From roofing and siding to painting, flooring, hardscaping, and more, we specialize in both residential and commercial projects. With a focus on quality craftsmanship and customer satisfaction, we aim to enhance the functionality, beauty, and value of every property we work on, delivering exceptional results that exceed expectations."}
        </p>
        <button className="md:order-2 md:w-1/6 md:text-xxs get-started pt-2 pb-2 pl-5 pr-5 mb-5 text-light md:mt-0 md:max-h-9 mt-5 border-white border" onClick={() => props.navigateTo("/estimates")}>
        {props.isSpanish ? "EMPEZAR" : "GET STARTED"}
        </button>
        <p className="pre-text text-lg md:text-xs sans-font-it mt-5 md:order-3 md:w-1/2 mb-2">
          <span className="text-xl pre-text-dark">/ {props.isSpanish ? "Quienes somos" : "Who We Are"}</span>
          <p className="pt-5 text-light text-lg font-light sans-font md:text-xs sans-font text-sm w-full md:w-full md:pl-8 md:pr-6">
          {props.isSpanish ? "De Jesus Contracting surgió como una empresa contratista local de Rock Hill, Carolina del Sur, en respuesta a las consecuencias de las devastadoras tormentas de granizo de 2024. La comunidad enfrentó una escasez de contratistas disponibles y de calidad que no estaban contratados con meses de anticipación. Por necesidad, De Jesus Contracting se fundó para llenar este vacío y brindar la calidad y el servicio superiores que Rock Hill merece. Comprometido a satisfacer las necesidades del área de manera rápida y efectiva, nuestro equipo continúa priorizando la excelencia en cada proyecto, asegurando que los hogares y las empresas reciban el cuidado y la atención que merecen." : "De Jesus Contracting emerged as a local Rock Hill, SC contracting company in response to the aftermath of devastating hail storms in 2024. The community faced a shortage of available, quality contractors who weren't booked months in advance. Out of necessity, De Jesus Contracting was founded to fill this gap and deliver the superior quality and service that Rock Hill deserves. Committed to meeting the area's needs promptly and effectively, our team continues to prioritize excellence in every project, ensuring homes and businesses receive the care and attention they deserve."}
          </p>
        </p>
        <div className="top-section-img-2 md:w-1/2 md:order-5 md:m-auto w-full h-60 mt-5 bg-slate-100"></div>
      </section>

      <section className="section-two md:flex md:flex-wrap bg-white p-5 pt-10 md:pl-20 md:pr-20 xl:pl-52 xl:pr-52">
        <div className="header-text md:order-1 md:w-1/2 ">
          <p className="pre-text-light text-xl sans-font-it mb-2">/ {props.isSpanish ? "La diferencia DeJesús" : "The De Jesus Difference"}</p>
          <h2 className="sub-header mb-5 text-5xl text-dark leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col ">
            <span>{props.isSpanish ? "QUÉ NOS " : "WHAT MAKES US"}</span>
            <span className="md:ml-40 text-dark mt-1 md:mt-2">{props.isSpanish ? "DIFERENCIA" : "DIFFERENT"}</span>
          </h2>
          <div className="second-section-img w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container md:order-0 md:w-1/2">
          <div className="card  min-h-fit w-full pt-5 pb-5 mt-10 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square"><LuPencilRuler className="m-auto mt-5 lg:mt-4 text-light"/></div>
            <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
                {props.isSpanish ? "Calidad y Precisión" : "Quality and Precision"}
              </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
                {props.isSpanish ? "Calidad y Precisión" : "Quality and Precision"}
              </h4>
              <p className="w-full md:text-xxs sans-font font-light md:w-4/5 lg:text-xs">
              {props.isSpanish ? "La calidad y la precisión son claves en De Jesus Contracting. Nuestra meticulosa artesanía garantiza que cada proyecto supere los estándares de la industria, lo que da como resultado resultados duraderos y estéticamente agradables. Minimizando errores y maximizando la satisfacción del cliente, potenciamos el valor y la funcionalidad de hogares y negocios, creando espacios excepcionales y duraderos." : "Quality and precision are key at De Jesus Contracting. Our meticulous craftsmanship ensures every project exceeds industry standards, resulting in durable, aesthetically pleasing outcomes. By minimizing errors and maximizing client satisfaction, we enhance the value and functionality of homes and businesses, creating lasting, exceptional spaces."}
              </p>
            </div>
          </div>
          <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square"><RiSafeFill className="m-auto mt-5 lg:mt-4 text-light"/></div>
            <h4 className="w-3/5 ml-2 sm:hidden font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
                {props.isSpanish ? "Integridad" : "Integrity"}
              </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 hidden sm:inline sans-font font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
                {props.isSpanish ? "Integridad" : "Integrity"}
              </h4>
              <p className="w-full md:text-xxs sans-font font-light md:w-4/5 lg:text-xs">
              {props.isSpanish ? "La integridad es un valor fundamental en De Jesus Contracting. Priorizamos la transparencia, la honestidad y la ética, generando confianza a través de un servicio confiable y resultados de calidad. Nuestro compromiso garantiza evaluaciones honestas, precios justos y excelencia constante, fomentando relaciones a largo plazo y una sólida reputación." : "Integrity is a core value at De Jesus Contracting. We prioritize transparency, honesty, and ethics, building trust through reliable service and quality results. Our commitment ensures honest assessments, fair pricing, and consistent excellence, fostering long-term relationships and a strong reputation."}
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
          <div className="card-img-1 lg:min-h-60 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">{props.isSpanish ? "REMODELACIÓN DEL BAÑO" : "BATHROOM REMODEL"}</p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Rock Hill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit second-card md:w-1/2 md:ml-auto md:mr-0 w-full mb-5 md:order-2">
          <div className="card-img-2 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">{props.isSpanish ? "REMODELACIÓN DE COCINA" : "KITCHEN REMODEL"}</p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Fort Mill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit third-card md:w-2/5 md:mr-20 w-full mb-5 md:order-3">
          <div className="card-img-3 w-full h-52 mb-5 lg:min-h-96 bg-green-300"></div>
          <p className="text-bold pre-text-dark text-xs font-bold mb-2">{props.isSpanish ? "PAISAJE / CUBIERTA" : "HARDSCAPE / DECK"}</p>
          <p className="text-2xl text-light md:text-xl font-thin w-1/2">
            Ballantyne,
            <br /> North Carolina
          </p>
        </div>
        <div className="card  min-h-fit w-full second-card md:ml-auto md:mr-0 md:w-1/2 mb-5 md:order-4">
          <div className="card-img-4 w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs pre-text-dark font-bold mb-2">{props.isSpanish ? "REMODELACIÓN DEL DORMITORIO" : "BEDROOM REMODEL"}</p>
          <p className="text-2xl text-light md:text-xl font-thin w-1/2">
            Charlotte,
            <br /> North Carolina
          </p>
        </div>

        <button className="get-started about-portfolio-btn h-fit pt-2 md:w-1/4 md:mr-60 md:order-5 pb-2 pl-5 pr-5 mt-5 border-white lg:mt-48 border" onClick={() => props.navigateTo("/portfolio")}>
          SEE MORE
        </button>
      </section>
    </div>
  );
};

export default About;
