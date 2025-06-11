// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import TooltipLinkedin from "./tooltip/TooltipLinkedin";
import TooltipSpotify from "./tooltip/TooltipSpotify";
import TooltipDiscord from "./tooltip/TooltipDiscord";
import TooltipGithub from "./tooltip/TooltipGithub";
import TooltipGmail from "./tooltip/TooltipGmail";
import { motion } from "framer-motion";
import FormContact from "./formContact/FormContact";

const Contact = () => {
  const [form, setForm] = useState(false);
  const onFormHandler = () => {
    setForm(!form);
    console.log(form);
  };

  return (
    <section className="px-6 min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(at_30%_75%,_var(--tw-gradient-stops))] from-secondary to-thirdty text-gray-100">
      <h1 className="my-8 flex items-center">
        <span aria-hidden="true" className="h-0.5 grow rounded-sm"></span>
        <span className="mx-3 text-lg font-medium">Contacto</span>
        <span aria-hidden="true" className="h-0.5 grow rounded-sm"></span>
      </h1>

      <motion.p
        className="max-w-2xl text-center text-lg text-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Si te ha interesado mi trabajo y consideras que puedo aportar valor a tu
        equipo o proyecto, no dudes en ponerte en contacto conmigo. <br />
        <br />
        También ofrezco mis servicios como desarrollador freelance para
        proyectos a medida, ya sea para crear una aplicación web, mejorar una
        plataforma existente o asesorar técnicamente. Estoy abierto a colaborar
        en iniciativas innovadoras y desafiantes.
      </motion.p>

      <motion.div
        className="pt-8 flex flex-row items-center justify-center gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <a>
          <TooltipGmail onFormHandler={onFormHandler} />
        </a>
        <a href="https://www.linkedin.com/in/%C3%A1lvaro-johansen-bb147a246/">
          <TooltipLinkedin />
        </a>
        <a href="https://github.com/Alvarojohansen">
          <TooltipGithub />
        </a>
        <a href="https://open.spotify.com/user/21cpwpwfhdco5onirg7uc5efi">
          <TooltipSpotify />
        </a>
        <a href="https://discord.gg/gC5GBuF8">
          <TooltipDiscord />
        </a>
      </motion.div>
      {form && (
        <motion.div
          className="pt-8 flex flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="p-20">
            <FormContact setForm={setForm} />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Contact;
