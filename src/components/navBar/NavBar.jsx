import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import imagedarkPng from "../../assets/AJ-darkversion.png";
import imagePng from "../../assets/Aj.png";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import { ThemeContext } from "../../services/theme/theme.context";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const navigateHandler = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header
      className={
        theme == "light"
          ? "p-4 rounded-xl bg-[radial-gradient(at_25%_25%,_var(--tw-gradient-stops))] from-ligth_secondary to-ligth_thirdy text-gray-900 shadow-md fixed top-0 left-0 w-full z-50"
          : "p-4 rounded-xl bg-[radial-gradient(at_25%_25%,_var(--tw-gradient-stops))] from-secondary to-thirdty text-gray-100 shadow-md fixed top-0 left-0 w-full z-50"
      }
    >
      <div className="container mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigateHandler("/")}
        >
          <img
            src={theme == "light" ? imagePng : imagedarkPng}
            alt="Logo"
            className="w-16 h-16  transition-all duration-200 ease-in-out hover:scale-105 hover:rotate-1"
          />
        </div>

        {/* Toggle centrado solo en mobile */}
        <div className="flex-1 flex justify-center md:hidden">
          <ToggleTheme />
        </div>

        {/* Menú desktop + hamburguesa mobile */}
        <div className="flex items-center space-x-4">
          {/* Menú desktop con toggle a la izquierda */}
          <ul className="hidden md:flex items-center space-x-6">
            {/* ToggleTheme en desktop */}
            <li>
              <ToggleTheme />
            </li>
            {[
              { name: "Sobre mí", path: "/aboutme" },
              { name: "Proyectos", path: "/proyects" },
              { name: "Contacto", path: "/contact" },
              { name: "CV", path: "/Cv" },
            ].map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => navigateHandler(item.path)}
                  className="hover:text-violet-300 transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Botón hamburguesa en mobile */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <ul className="md:hidden fixed inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-md py-4 space-y-4 z-50">
          <div>
            <button
              className="absolute top-4 right-4 p-2 text-gray-100 hover:text-violet-600 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Cerrar menú"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {[
            { name: "Sobre mí", path: "/aboutme" },
            { name: "Proyectos", path: "/proyects" },
            { name: "Contacto", path: "/contact" },
            { name: "CV", path: "/Cv" },
          ].map((item) => (
            <li key={item.path}>
              <button
                onClick={() => {
                  navigateHandler(item.path);
                  setIsOpen(false);
                }}
                className="hover:text-violet-300 transition-colors text-lg"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
