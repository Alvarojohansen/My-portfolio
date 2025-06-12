import React from "react";

import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(at_30%_75%,_var(--tw-gradient-stops))] from-secondary to-thirdty text-gray-100 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-red-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-100 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Perdón, esta página no se ha encontrado.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            onClick={() => navigate("/")}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Pagina principal
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-gray-100"
            onClick={() => navigate("/contact")}
          >
            Contacte conmigo. <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
