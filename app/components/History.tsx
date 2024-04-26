import Image from "next/image";
import React from "react";

export default function History() {
  return (
    <section
      id="history"
      className="h-screen w-full text-white flex flex-col justify-center md:flex-row p-5"
    >
      <div className="place-content-center p-4">
        <Image
          src="/front.png"
          width={800}
          height={600}
          alt="Foto da área frontal da Chácara"
          className="rounded-3xl"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-end p-10 gap-10">
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
