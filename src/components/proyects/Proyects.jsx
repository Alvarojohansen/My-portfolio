// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Cards from "./cards/Cards";
import { ThemeContext } from "../../services/theme/theme.context";

const proyectos = [
  {
    id: 1,
    nombre: "🌠New Star Music",
    titulo:
      "Tienda online pensada para vendedores de merchandising de bandas, hecha para que encuentres a tus artistas favoritos.",
    tecnologias: "React / tailwind / JavaScrypt/ C#.NET / MySQL",
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
];

const Proyects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="pt-10">
      <section
        className={
          theme == "light"
            ? "pt-20 px-6 min-h-screen flex flex-col items-center gap-8 bg-[radial-gradient(at_30%_75%,_var(--tw-gradient-stops))]  from-light_primary to-light_secondary text-gray-900"
            : "pt-20 px-6 min-h-screen flex flex-col items-center gap-8 bg-[radial-gradient(at_30%_75%,_var(--tw-gradient-stops))]  from-primary to-secondary text-gray-100"
        }
      >
        <h1 class="my-8 flex items-center">
          <span
            aria-hidden="true"
            class="h-0.5 grow rounded-sm bg-gray-200 dark:bg-gray-700/75"
          ></span>
          <span class="mx-3 text-lg font-medium">Proyectos</span>
          <span
            aria-hidden="true"
            class="h-0.5 grow rounded-sm bg-gray-200 dark:bg-gray-700/75"
          ></span>
        </h1>
        <Cards proyectos={proyectos} />
      </section>
    </div>
  );
};

export default Proyects;
