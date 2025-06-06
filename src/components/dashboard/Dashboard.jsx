// eslint-disable-next-line no-unused-vars
import React from "react";

const Dashboard = () => {
  return (
    <section className="pt-20 px-6 min-h-screen flex items-center justify-center bg-[radial-gradient(at_30%_75%,_var(--tw-gradient-stops))] from-secondary to-thirdty text-gray-100">
      {" "}
      <div className="text-center">
        <h1 className=" text-4xl font-bold mb-4 overflow-hidden whitespace-nowrap border-r-2 border-white  pr-2 animate-[typing_3s_steps(30,_end)_1s_1_normal_both,blink_1s_step-end_infinite]">
          Hola, soy Álvaro Johansen
        </h1>
        <p className="text-lg text-gray-600">Desarrollador Full Stack</p>
      </div>
    </section>
  );
};

export default Dashboard;
