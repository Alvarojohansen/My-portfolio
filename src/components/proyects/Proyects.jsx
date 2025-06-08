// eslint-disable-next-line no-unused-vars
import React from "react";
import Cards from "./Cards/cards";

const proyectos = [
  {
    id: 1,
    nombre: "🌠New Star Music",
    titulo:
      "Tienda online pensada para vendedores de merchandising de bandas, hecha para que encuentres más fácil a tus artistas favoritos.",
    tecnologias:
      "React / tailwind / JavaScrypt/ Auth0 / C#.NET / EntitiFramework / MySQL",
    link: "https://github.com/Alvarojohansen/New-Stars-Music-app",
  },
  {
    id: 2,
    nombre: "🚜AgroAPI",
    titulo:
      "API para gestión agrícola con arquitectura Clean, la misma esta desarrollada para una implementacion dentro de un ecommerce.",
    tecnologias: "C#.NET / SQLite / JWT / EntityFramework",
    link: "https://github.com/Alvarojohansen/AgroAPI",
  },
  {
    id: 3,
    nombre: "🧉Matuco",
    titulo:
      "Matuco es un e-commerce de mates el cual fue un proyecto colaborativo, con un diseño intuitivo.",
    tecnologias: "React / Bootstrap / Node / JavaScrypt",
    link: "https://github.com/Alvarojohansen/Matuco",
  },
  {
    id: 4,
    nombre: "🤔Amigo Invisible",
    titulo:
      "Sitio web en el cual podés agregar amigos o familiares y sortear quién será tu amigo invisible.",

    tecnologias: "React / JavaScrypt",
    link: "https://github.com/Alvarojohansen/Amigo-invisible-challenge",
  },

  {
    id: 5,
    nombre: "TaskManager",
    titulo: "Aplicación para gestión de tareas con backend en .NET",
    tecnologias: "",
    link: "https://github.com/usuario/taskmanager",
  },
  {
    id: 6,
    nombre: "",
    titulo: "",
    tecnologias: "",
    link: "",
  },
];

const Proyects = () => {
  return (
    <section className="pt-20 px-6 min-h-screen flex items-center justify-center bg-[radial-gradient(at_30%_75%,_var(--tw-gradient-stops))] from-secondary to-thirdty text-gray-100">
      <section className="pt-20 px-6 min-h-screen flex flex-col items-center gap-8 bg-[radial-gradient(at_30%_75%,_var(--tw-gradient-stops))] from-secondary to-thirdty text-gray-100">
        <h2 className="text-xl font-semibold tracking-wide uppercase">
          Proyectos
        </h2>
        <Cards proyectos={proyectos} />
      </section>
    </section>
  );
};

export default Proyects;
