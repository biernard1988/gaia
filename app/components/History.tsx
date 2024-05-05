import Image from "next/image";
import React from "react";

export default function History() {
  return (
    <section
      id="history"
      className="container mx-auto h-screen w-full text-white flex flex-col items-center justify-center md:flex-row p-5 md:border-b md:border-neutral-800"
    >
      <Image
        src="/we.jpg"
        width={500}
        height={500}
        alt="Foto da área frontal da Chácara"
        className="w-[300px] md:w-[500px] rounded-full"
      />

      <div className="md:w-1/2 flex flex-col justify-center items-end p-5 gap-5">
        <h1 className="uppercase text-3xl md:text-6xl font-extrabold">
          História
        </h1>
        <p className="sm:text-xl md:text-1xl lg:text-2xl italic tracking-widest text-end">
          O nome <b>Gaia</b> tem origem grega e está associado à personificação
          feminina da Terra na mitologia. Gaia é considerada a mãe primordial,
          responsável pela criação e fertilidade da natureza. E é no seio da
          natureza, em meio ao ar puro, árvores e animais que decidimos investir
          e proporcionar a mais pessoas a oportunidade de vivenciar momentos de
          paz e tranquilidade, entre a família ou amigos.
        </p>
      </div>
    </section>
  );
}
