// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ThemeContext } from "../../services/theme/theme.context";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      className={
        theme == "light"
          ? "pt-20 px-4 sm:px-6 min-h-screen flex items-center justify-center bg-[radial-gradient(at_30%_75%,_var(--tw-gradient-stops))] from-light_primary to-light_secondary text-gray-900"
          : "pt-20 px-4 sm:px-6 min-h-screen flex items-center justify-center bg-[radial-gradient(at_30%_75%,_var(--tw-gradient-stops))] from-primary to-secondary text-gray-100"
      }
    >
      <div className="text-center max-w-[90vw] sm:max-w-xl">
        <h1 className={theme ==  "light"?"text-xl sm:text-3xl md:text-4xl font-bold mb-4 border-r-2 border-black whitespace-nowrap overflow-hidden inline-block animate-typing" :"text-xl sm:text-3xl md:text-4xl font-bold mb-4 border-r-2 border-white whitespace-nowrap overflow-hidden inline-block animate-typing"}>
          Hola, soy Álvaro Johansen.
        </h1>
        <p className={theme == "light"? "text-base sm:text-lg text-blue-gray-400" :"text-base sm:text-lg text-gray-400"}>
          Desarrollador Full Stack
        </p>
      </div>
    </section>
  );
};

export default Dashboard;
