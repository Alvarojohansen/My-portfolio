import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Cv from "./Cv/Cv";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Cv" element={<Cv />} />
      </Routes>
    </>
  );
}

export default App;
