// eslint-disable-next-line no-unused-vars
import React from "react";
import { Avatar } from "@material-tailwind/react";
import imageJpg from "../../assets/Foto_CV.jpg";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="pt-40 px-6 pb-10 min-h-screen flex justify-center bg-[radial-gradient(at_30%_75%,_var(--tw-gradient-stops))] from-secondary to-thirdty text-gray-100">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-5xl w-full">
        <motion.div
          className="text-center md:text-left px-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Avatar */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <Avatar
              src={imageJpg}
              alt="avatar"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-lg"
            />
          </div>
        </motion.div>
        <motion.div
          className="text-center md:text-left px-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Bio */}
          <div className="text-center md:text-left px-2">
            <h1 className="text-2xl font-bold mb-2">Álvaro Johansen</h1>
            <h2 className="text-lg text-blue-300 mb-4">
              Desarrollador Full Stack
            </h2>
            <p className="text-gray-200 leading-relaxed max-w-xl">
              Soy Álvaro Johansen, desarrollador fullstack en formación,
              residiendo en Rosario, Santa Fe. Me especializo en la creación de
              aplicaciones web con tecnologías como React, JavaScript, C# .NET,
              MySQL, SQLite, Python y Java. Actualmente estoy finalizando la
              Tecnicatura Universitaria en Programación en UTN Rosario, donde ya
              he alcanzado el 80% del plan de estudio y he participado en
              proyectos colaborativos aplicando buenas prácticas de desarrollo.
              A lo largo de mi formación complementaria en plataformas como
              Alura ONE, he desarrollado proyectos completos, tanto individuales
              como grupales, enfocados en e-commerce y experiencia de usuario.
              Algunos de estos incluyen Matuco, un sitio de comercio electrónico
              con React, y New Star Music, un proyecto grupal con
              funcionalidades de autenticación y diseño responsive. Además,
              tengo experiencia docente como profesor de programación y robótica
              para niños, donde se fomenta desde la dinámica, la creatividad y
              el pensamiento lógico mediante herramientas como Scratch y
              Arduino. Esta experiencia, sumada a mi pasado emprendedor y mi
              trato directo con clientes, refuerza mi perfil integral: técnico,
              comunicativo y orientado al trabajo en equipo. Estoy enfocado en
              seguir creciendo profesionalmente dentro de un equipo de
              desarrollo que me permita aportar valor, aprender constantemente y
              afrontar nuevos desafíos tecnológicos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
