import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const FormContact = ({ setForm }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gjnguv6", "template_a9jjafs", form.current, {
        publicKey: "gkLcPZMu1Yr_zY7uM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Mensaje enviado con exito!", {
            style: {
              background: "green",
              color: "white",
            },
          });
          setForm(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(error.text, {
            style: {
              background: "red",
              color: "white",
            },
          });
        }
      );
  };

  return (
    <div className="max-w-md mx-auto relative overflow-hidden z-10 bg-white p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-500 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
      <button
        onClick={() => setForm(false)}
        className="absolute top-2 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
        aria-label="Cerrar formulario"
      >
        ✕
      </button>
      <h2 className="text-2xl text-gray-700 font-bold mb-6">
        Contactate Conmigo!
      </h2>
      <form method="post" ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="name"
          >
            Nombre Completo
          </label>
          <input
            className="text-black mt-1 p-2 w-full border rounded-md"
            type="text"
            name="user_name"
          />
        </div>

        <div className="mb-4">
          <label
            className=" block text-sm font-medium text-gray-600"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="text-black mt-1 p-2 w-full border rounded-md"
            id="email"
            type="email"
            name="user_email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-600"
            htmlFor="bio"
          >
            Mensaje
          </label>
          <textarea
            className="text-black mt-1 p-2 w-full border rounded-md"
            rows={3}
            name="message"
            id="bio"
            defaultValue={""}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="[background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#242424)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
            type="submit"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
