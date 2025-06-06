import { Route, Routes } from "react-router-dom";
import "./App.css";

import Cv from "./components/Cv/Cv";
import AboutMe from "./components/aboutme/AboutMe";
import NavBar from "./components/navBar/NavBar";
import Dashboard from "./components/dashboard/Dashboard";
import Contact from "./components/contact/Contact";
import Proyects from "./components/proyects/Proyects";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Cv" element={<Cv />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/proyects" element={<Proyects />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
