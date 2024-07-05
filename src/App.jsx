import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import NavbarSm from "./components/navbar-sm/navbar-sm";
import NavbarLg from "./components/navbar-lg/navbar-lg";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Estimates from "./pages/estimates/estimates";
import About from "./pages/about/about";
import NavMenu from "./components/nav-menu/nav-menu";
import Interior from "./pages/interior/interior";
import Exterior from "./pages/exterior/exterior";
import Fencing from "./pages/fencing/fencing";
import Backyard from "./pages/backyard/backyard";
import Patios from "./pages/patios/patios";
import Portfolio from "./pages/portfolio/portfolio";
import Testimonials from "./pages/testimonials/testimonials";

function App() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("/");
  const [isMenuOpen, toggleMenu] = useState(false);
  const [isSpanish, setSpanish] = useState(false);
  function navigateTo(route) {
    setCurrentPage((prev) => route);
    navigate(route);

  }
  return (
    <div className="App">
      <NavbarSm navigateTo={navigateTo} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <NavbarLg navigateTo={navigateTo} isSpanish={isSpanish} setSpanish={setSpanish} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path={"/"} element={<Home isSpanish={isSpanish} navigateTo={navigateTo} />} />
        <Route path={"/estimates"} element={<Estimates />} />
        <Route path={"/about"} element={<About navigateTo={navigateTo}/>} />
        <Route path={"/interior"} element={<Interior isSpanish={isSpanish} navigateTo={navigateTo} />} />
        <Route path={"/exterior"} element={<Exterior navigateTo={navigateTo} />} />
        <Route path={"/patios"} element={<Patios navigateTo={navigateTo} />} />
        <Route path={"/backyard"} element={<Backyard navigateTo={navigateTo} />} />
        <Route path={"/fencing"} element={<Fencing navigateTo={navigateTo} />} />
        <Route path={"/portfolio"} element={<Portfolio navigateTo={navigateTo}/>} />
        <Route path={"/testimonials"} element={<Testimonials navigateTo={navigateTo}/>} />
      </Routes>
      <Footer isSpanish={isSpanish} navigateTo={navigateTo}/>
      <NavMenu isSpanish={isSpanish} currentPage={currentPage} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} navigateTo={navigateTo} />
    </div>
  );
}

export default App;
