"use client";
import React, { useRef, useState, FormEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    try {
      if (form.current) {
        const result: EmailJSResponseStatus = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_USER_ID!
        );
        console.log(result.text);
        notify(); // Notificar quando o e-mail for enviado com sucesso
      }
    } catch (error: any) {
      console.log(error.text);
    } finally {
      setIsSending(false);
    }
  };

  const notify = () => {
    toast.success("Mensagem envianda com Sucesso!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    form.current!.reset();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = new FormData(form.current!);

    // Verifica se todos os campos estão preenchidos
    const allFieldsFilled: boolean = Array.from(formData.values()).every(
      (value: FormDataEntryValue) =>
        typeof value === "string" && value.trim() !== ""
    );

    if (allFieldsFilled) {
      await sendEmail(e); // Se todos os campos estiverem preenchidos, envia o e-mail
    } else {
      // Caso contrário, exibe uma mensagem de erro
      toast.error("Por favor preencha todo formulário!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <section
      id="contact"
      className="h-4/5 text-white mx-auto container flex justify-center items-center w-100 md:my-14"
    >
      <form onSubmit={handleSubmit} ref={form} className="w-full md:max-w-lg">
        <div className="flex flex-col gap-6">
          <h1 className="text-center uppercase text-5xl md:text-6xl font-extrabold">
            Contato
          </h1>
          <label htmlFor="email">Seu email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="seu@email.com"
          />
          <label htmlFor="subject">Assunto</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Seu assunto..."
          />
          <label htmlFor="message">Mensagem</label>
          <textarea
            className="resize-none"
            cols={10}
            rows={8}
            name="message"
            id="message"
            placeholder="Envie sua mensagem..."
          ></textarea>
          <button
            type="submit"
            className={`border border-yellow-200 hover:bg-gradient-to-r from-yellow-200 to-yellow-600 transition-all hover:text-black font-medium py-2.5 px-5 rounded-lg w-full ${
              isSending ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSending}
          >
            {isSending ? "Enviando..." : "Enviar"}
          </button>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </form>
    </section>
  );
}
