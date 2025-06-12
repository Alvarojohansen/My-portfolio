import React from "react";
import { motion } from "framer-motion";
const Card = ({ proyecto }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="w-full max-w-sm rounded-2xl bg-white shadow-md border border-gray-200 flex flex-col justify-between text-gray-800">
        <div className="p-6">
          <h5 className="text-xl font-semibold mb-2">{proyecto.nombre}</h5>
          <p className="text-base text-gray-600">{proyecto.titulo}</p>
          <p className="text-base text-gray-500">{proyecto.tecnologias}</p>
        </div>
        <div className="p-6 pt-0">
          <a
            href={proyecto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-lg bg-gray-700 text-white py-3 text-sm font-semibold hover:bg-gray-900 transition-colors"
          >
            Leer más
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Cards = ({ proyectos }) => {
  return (
    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
      {proyectos.map((proyecto) => (
        <Card key={proyecto.id} proyecto={proyecto} />
      ))}
    </div>
  );
};

export default Cards;
