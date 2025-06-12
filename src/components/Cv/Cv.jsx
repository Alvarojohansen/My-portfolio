import { Button } from "@material-tailwind/react";
import devPng from "../../assets/unnamed.png";
import { motion } from "framer-motion";

const Cv = () => {
  return (
    <section className="pt-20 px-6 min-h-screen flex items-center justify-center bg-[radial-gradient(at_30%_75%,_var(--tw-gradient-stops))] from-secondary to-thirdty text-gray-100">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-4">
          <div className="flex items-center">
            <img src={devPng} alt="Logo" className="w-40 " />
          </div>

          <div className="flex flex-col items-center sm:items-center text-center gap-2 self-center">
            <span className="text-lg font-medium">Descargar CV aquí</span>
            <a href="CV_Alvarojohansen_informatica.pdf" download>
              <Button variant="gradient" color="white">
                Descargar
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Cv;
