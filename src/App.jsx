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

function App() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("/");
  const [isMenuOpen, toggleMenu] = useState(false);
  function navigateTo(route) {
    setCurrentPage((prev) => route);
    navigate(route);
  }
  return (
    <div className="App">
      <NavbarSm navigateTo={navigateTo} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <NavbarLg navigateTo={navigateTo} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path={"/"} element={<Home navigateTo={navigateTo} />} />
        <Route path={"/estimates"} element={<Estimates />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
      <Footer navigateTo={navigateTo}/>
      <NavMenu currentPage={currentPage} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} navigateTo={navigateTo} />
    </div>
  );
}

export default App;
