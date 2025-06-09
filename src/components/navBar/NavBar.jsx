import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagePng from "../../assets/AJ-dark.png";
import ThemeSwitch from "../switch/Switch";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navigateHandler = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="p-4 rounded-xl bg-[radial-gradient(at_25%_25%,_var(--tw-gradient-stops))] from-secondary to-thirdty text-gray-100 shadow-md fixed  top-0 left-0 w-full z-50">
      <div className="container flex justify-between items-center mx-auto h-16">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigateHandler("/")}
        >
          <img
            src={imagePng}
            alt="Logo"
            className="w-16 h-16 transition-all duration-200 ease-in-out hover:scale-105 hover:rotate-1"
          />
        </div>

        {/* Menú desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <ThemeSwitch />
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
                className="hover:text-violet-600 transition-colors"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa */}
        <div className="md:hidden">
          <ThemeSwitch />
        </div>
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

      {/* Menú mobile */}
      {isOpen && (
        <>
          <ul className="md:hidden fixed inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-md py-4 space-y-4 z-50">
            <>
              <div>
                <button
                  className="absolute top-4 right-4 p-2 text-gray-100 hover:text-violet-600 transition-colors"
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
                      d={
                        isOpen
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    />
                  </svg>
                </button>
              </div>
            </>
            {[
              { name: "Sobre mí", path: "/aboutme" },
              { name: "Proyectos", path: "/proyects" },
              { name: "Contacto", path: "/contact" },
              { name: "CV", path: "/Cv" },
            ].map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => navigateHandler(item.path)}
                  className="hover:text-violet-600 transition-colors"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </header>
  );
};

export default NavBar;
