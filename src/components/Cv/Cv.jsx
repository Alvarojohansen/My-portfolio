import { Button } from "@material-tailwind/react";
import devPng from "../../assets/unnamed.png";

const Cv = () => {
  return (
    <section className="pt-20 px-6 min-h-screen flex items-center justify-center bg-[radial-gradient(at_30%_75%,_var(--tw-gradient-stops))] from-secondary to-thirdty text-gray-100">
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-4">
        <div className="flex items-center">
          <img src={devPng} alt="Logo" className="w-40 " />
        </div>

        <div className="flex flex-col items-center sm:items-center text-center gap-2 self-center">
          <span className="text-lg font-medium">Descargar CV aquí</span>
          <a href="/Alvaro-CV.pdf" download>
            <Button variant="gradient" color="white">
              Descargar
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cv;
