import React from "react";

const TooltipGmail = ({ onFormHandler }) => {
  return (
    <section className="flex justify-center items-center">
      <button
        className="group relative flex justify-center p-2 rounded-md drop-shadow-xl bg-[#D14836] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-[#B23121]"
        onClick={() => onFormHandler()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="1em"
          height="1.1em"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M502.3 190.8 327.4 338.5 512 482.1V214.1c0-8.6-3.6-16.9-9.7-23.3zM480 128.7v-.6c0-20.1-15.8-35.7-35.2-35.7H67.2C47.8 92.4 32 108 32 128.1v.5l223.4 183.1c11.6 9.4 27.7 9.4 39.3 0L480 128.7zM9.7 190.8C3.6 197.2 0 205.5 0 214.1v268l184.6-143.6L9.7 190.8zM307.9 368.3c-17.7 14.6-40.7 22.6-63.9 22.6s-46.2-8-63.9-22.6L0 512h512L307.9 368.3z" />
        </svg>
        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
          Gmail
        </span>
      </button>
    </section>
  );
};

export default TooltipGmail;
