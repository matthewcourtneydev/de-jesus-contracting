import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
