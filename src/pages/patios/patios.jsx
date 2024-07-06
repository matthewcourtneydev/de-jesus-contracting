import React from "react";
import "./patios.css";
import logo from "../../imgs/logo.png";


import { RiPlantLine } from "react-icons/ri";
import { LuRockingChair } from "react-icons/lu";
import { MdOutlineOutdoorGrill } from "react-icons/md";





const Patios = (props) => {
  return (
    <div className="page" id="about-page">
      <div className="med-header-interior w-screen hidden md:flex min-h-24">
        <img src={logo} alt="" className="w-1/6 max-w-28 h-3/4 mt-4 ml-20 xl:ml-52" />
      </div>
      <section className="top-section md:flex md:flex-wrap p-5 pt-20 md:pt-8 md:pb-12 md:pl-20 xl:pl-52 xl:pr-52 md:pr-20 text-light">
        <h2 className="sub-header mb-5 text-5xl leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col md:md:order-0 md:w-3/6 w-full">
          <span className="md:mt-0 text-light">{props.isSpanish ? "PORCHES" : "PATIOS"}</span>
          <span className="mt-2 md:mt-2 text-light">{props.isSpanish ? "PATIOS" : "PORCHES"}</span>
          <span className="mt-2 md:mt-2 text-light">{props.isSpanish ? "Y CUBIERTAS" : "AND DECKS"}</span>
        </h2>
        <div className="top-section-img-patio md:mb-20 md:mt-12 w-full h-60 md:order-3 bg-slate-100"></div>
        <p className="pt-5 md:w-2/6 md:pr-8 font-light sans-font lg:text-xs md:text-xxs md:pt-0 md:order-1 text-light">
        {props.isSpanish ? "De Jesus Contracting se destaca en la revitalización de patios, porches o terrazas existentes, así como en la construcción de otros nuevos desde cero. Con un enfoque en la artesanía de calidad y la atención al detalle, nuestro equipo capacitado puede transformar espacios exteriores desgastados u obsoletos en áreas acogedoras que mejoren el encanto y la funcionalidad de su hogar. Ya sea que se trate de reparar, actualizar o rediseñar por completo, De Jesus Contracting garantiza que su patio, porche o terraza se convierta en una extensión hermosa y acogedora de su espacio habitable, perfectamente adaptada a su estilo de vida y preferencias." : "De Jesus Contracting excels in revitalizing existing patios, porches, or decks, as well as building new ones from scratch. With a focus on quality craftsmanship and attention to detail, our skilled team can transform worn-out or outdated outdoor spaces into inviting areas that enhance your home's charm and functionality. Whether it's repairing, upgrading, or completely redesigning, De Jesus Contracting ensures your patio, porch, or deck becomes a beautiful and welcoming extension of your living space, perfectly tailored to your lifestyle and preferences."}
        </p>
        <button
          className="md:order-2 md:w-1/6 md:text-xxs get-started pt-2 pb-2 pl-5 pr-5 mb-5 text-light md:mt-0 md:max-h-9 mt-5 border-white border"
          onClick={() => props.navigateTo("/estimates")}
        >
          {props.isSpanish ? "EMPEZAR" : "GET STARTED"}
        </button>
        <p className="pre-text text-lg md:text-xs sans-font mt-5 md:order-3 md:w-1/2 mb-2">
          <span className="text-xl pre-text-dark sans-font-it">
          / {props.isSpanish ? "Haz tu sueño realidad" : "Make Your Dream Home a Reality"}
          </span>
          <h2 className="sub-header mb-5 text-4xl leading-10 text-light md:mt-2 md:text-5xl flex flex-col">
            <span className="text-light">{props.isSpanish ? "TE MERECES UN" : "YOU DESERVE A"} </span>
            <div className="md:w-screen text-light relative z-10 mt-1 md:ml-36 leading-12 md:text-light md:mt-2">
            {props.isSpanish ? "PATIO QUE TE DA LA" : "PATIO THAT WELCOMES"}
            </div>
            <span className="md:ml-12 text-light leading-10 mt-1 md:text-light md:mt-2">
            {props.isSpanish ? "BIENVENIDA A CASA" : "YOU HOME."}
            </span>
          </h2>
          <p className="pt-5 text-light text-lg font-light sans-font md:text-xs sans-font text-sm w-full md:w-full md:pl-8 md:pr-6">
          {props.isSpanish ? "Las renovaciones exteriores pueden mejorar significativamente su experiencia de vida al mejorar tanto el atractivo estético como la funcionalidad de su hogar. Mejorar el exterior no sólo aumenta el atractivo exterior sino que también aumenta el valor general de su propiedad. De Jesus Contracting se especializa en transformar viviendas con servicios expertos en revestimientos, techos, marcos y ventanas, garantizando que cada proyecto se ejecute con precisión y materiales de primera calidad. Ya sea que esté buscando actualizar el aspecto de su hogar, mejorar la eficiencia energética o aumentar su valor de reventa, De Jesus Contracting puede convertir su visión en realidad con soluciones personalizadas que reflejen su estilo y mejoren su espacio habitable." : "Exterior renovations can significantly elevate your living experience by enhancing both the aesthetic appeal and functionality of your home. Improving the exterior not only boosts curb appeal but also increases the overall value of your property. De Jesus Contracting specializes in transforming homes with expert siding, roofing, framing, and window services, ensuring each project is executed with precision and top-quality materials. Whether you're looking to update your home's look, improve energy efficiency, or increase its resale value, De Jesus Contracting can turn your vision into reality with tailored solutions that reflect your style and enhance your living space."}
          </p>
        </p>
        <div className="top-section-img-2 remodel-img-patio md:w-1/2 md:order-5 md:m-auto w-full h-60 mt-5 bg-slate-100"></div>
      </section>

      <section className="section-two md:flex md:flex-wrap bg-white p-5 pt-10 md:pl-20 md:pr-20 xl:pl-52 xl:pr-52">
        <div className="header-text md:order-1 md:w-1/2 ">
          <p className="pre-text-light text-xl sans-font-it mb-2">
          / {props.isSpanish ? "Un lugar para relajarse" : "A Place to Unwind"}
          </p>
          <h2 className="sub-header mb-5 text-5xl text-dark leading-10 md:leading-10 md:text-light md:mt-2 md:text-5xl flex flex-col ">
            <span>{props.isSpanish ? "CREA UN ESPACIO " : "CREATE A SPACE"}</span>
            <span className="md:ml-14 text-dark mt-1 md:mt-2">{props.isSpanish ? "SOLO PARA TI" : "JUST FOR YOU!"}</span>
          </h2>
          <div className="second-section-img w-full  h-60 mt-5 bg-slate-100"></div>
        </div>
        <div className="container md:order-0 md:w-1/2">
          <div className="card  min-h-fit w-full pt-5 pb-5 mt-10 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <RiPlantLine className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              {props.isSpanish ? "Patios" : "Patios"}
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
                {props.isSpanish ? "Patios" : "Patios"}
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
              {props.isSpanish ? "Nos destacamos en el diseño y construcción de nuevos patios, diseñados para mejorar los espacios al aire libre con calidad artesanal y durabilidad. Además, brindamos servicios integrales de mantenimiento de patios para garantizar que su área al aire libre permanezca hermosa y funcional durante todo el año." : "We excel in designing and constructing new patios, tailored to enhance outdoor living spaces with quality craftsmanship and durability. Additionally, we provide comprehensive patio maintenance services to ensure your outdoor area remains beautiful and functional year-round."}
              </p>
            </div>
          </div>
          <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
              <MdOutlineOutdoorGrill  className="m-auto mt-5 lg:mt-4 text-light" />
            </div>
            <h4 className="w-3/5 ml-2 sm:hidden font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
              {props.isSpanish ? "Cubiertas" : "Decks"}
            </h4>
            <div className="wrapper md:w-4/5">
              <h4 className="w-3/5 ml-2 hidden sm:inline sans-font font-bold md:ml-0 md:mb-1 md:text-sm text-lg">
                {props.isSpanish ? "Cubiertas" : "Decks"}
              </h4>
              <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
              {props.isSpanish ? "Nos especializamos en la construcción de nuevas terrazas centrándonos en materiales de alta calidad y mano de obra experta, mejorando los espacios de vida al aire libre. También brindamos servicios integrales de mantenimiento de terrazas para garantizar la longevidad y el disfrute continuo de los propietarios." : "We specialize in building new decks with a focus on high-quality materials and expert craftsmanship, enhancing outdoor living spaces. We also provide comprehensive deck maintenance services to ensure longevity and continued enjoyment for homeowners."}
              </p>
            </div>
          </div>
        

        <div className="card  min-h-fit w-full pt-5 pb-5 gap-3 flex md:items-start items-center md:flex-row md:flex-nowrap flex-wrap bg-white">
            <div className="icon rounded-full lg:max-w-14 lg:text-2xl text-3xl w-1/5 aspect-square">
            <LuRockingChair className="m-auto mt-5 lg:mt-4 text-light" />
          </div>
          <h4 className="w-3/5 ml-2 sans-font sm:hidden font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
            {props.isSpanish ? "Porches" : "Porches"}
          </h4>
          <div className="wrapper md:w-4/5">
            <h4 className="w-3/5 ml-2 sans-font hidden sm:inline font-bold md:ml-0 md:text-sm md:mb-1 text-lg">
              {props.isSpanish ? "Porches" : "Porches"}
            </h4>
            <p className="w-full lg:text-xs md:text-xxs sans-font font-light md:w-4/5">
            {props.isSpanish ? "Somos expertos en la construcción de nuevos porches, utilizando materiales de primera calidad y mano de obra experta para mejorar la funcionalidad y el atractivo exterior de las casas. Además, brindamos servicios confiables de mantenimiento de porches para mantener su belleza e integridad estructural, garantizando la satisfacción a largo plazo de los propietarios." : "We are adept at building new porches, utilizing premium materials and expert craftsmanship to enhance homes' functionality and curb appeal. Additionally, we provide dependable porch maintenance services to uphold their beauty and structural integrity, ensuring long-term satisfaction for homeowners."}
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
          <div className="card-img-1-patio w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">
          {props.isSpanish ? "PROYECTO PATIO" : "PATIO PROJECT"}
          </p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Rock Hill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit second-card md:w-1/2 md:ml-auto md:mr-0 w-full mb-5 md:order-2">
          <div className="card-img-2-patio w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs font-bold mb-2 pre-text-dark">
          {props.isSpanish ? "PROYECTO DE CUBIERTA" : "DECK PROJECT"}
          </p>
          <p className="text-2xl md:text-xl font-thin w-1/2 text-light">
            Fort Mill,
            <br /> South Carolina
          </p>
        </div>
        <div className="card  min-h-fit third-card md:w-2/5 md:mr-20 w-full mb-5 md:order-3">
          <div className="card-img-3-patio w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold pre-text-dark text-xs font-bold mb-2">
          {props.isSpanish ? "PROYECTO PORCHE" : "PORCH PROJECT"}
          </p>
          <p className="text-2xl text-light md:text-xl font-thin w-1/2">
            Ballantyne,
            <br /> North Carolina
          </p>
        </div>
        <div className="card  min-h-fit w-full second-card md:ml-auto md:mr-0 md:w-1/2 mb-5 md:order-4">
          <div className="card-img-4-patio w-full h-52 mb-5 bg-green-300"></div>
          <p className="text-bold text-xs pre-text-dark font-bold mb-2">
          {props.isSpanish ? "PROYECTO PATIO" : "PATIO PROJECT"}
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

export default Patios;
