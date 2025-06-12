// src/App.jsx
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Dashboard from "./components/dashboard/Dashboard";
import Cv from "./components/Cv/Cv";
import AboutMe from "./components/aboutme/AboutMe";
import Contact from "./components/contact/Contact";
import Proyects from "./components/proyects/Proyects";
import PageNotFound from "./components/pageNotFound/PageNotFound";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
      
        <Route path="/" element={<Dashboard />} />
        <Route path="/Cv" element={<Cv />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
