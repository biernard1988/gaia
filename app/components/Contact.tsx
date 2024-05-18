"use client";
import React, { useRef, useState, FormEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const { toast } = useToast();

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    try {
      if (form.current) {
        const result: EmailJSResponseStatus = await emailjs.sendForm(
          "service_dodm32w",
          "template_8cqu7n7",
          form.current,
          "VZknpnI-pjMDvsOyv"
        );
        console.log(result.text);
        toast({
          description: "Mensagem enviada com sucesso!",
        });
        form.current!.reset();
      }
    } catch (error: any) {
      console.log(error.text);
    } finally {
      setIsSending(false);
    }
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
      toast({
        description: "Por favor, preencha todo formulário!",
      });
    }
  };

  return (
    <section
      id="contact"
      className="h-4/5 text-white mx-auto container flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit}
        ref={form}
        className="w-full md:max-w-lg my-14"
      >
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
            aria-label="Seu email"
          />
          <label htmlFor="subject">Assunto</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Seu assunto..."
            aria-label="Assunto"
          />
          <label htmlFor="message">Mensagem</label>
          <textarea
            className="resize-none"
            cols={10}
            rows={8}
            name="message"
            id="message"
            placeholder="Envie sua mensagem..."
            aria-label="Mensagem"
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
        </div>
      </form>
    </section>
  );
}
