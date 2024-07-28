import React from "react"

export default function Events() {
  return (
    <section
      id="events"
      className="container mx-auto md:h-screen flex flex-col md:flex-row justify-center items-center gap-14 lg:border-b lg:border-neutral-800 my-10"
    >
      <div className="p-4">
        <h1 className="text-white italic text-5xl md:text-6xl font-extrabold mb-20 text-center">
          Eventos
        </h1>
        <div className="space-y-10">
          <h2 className="font-extrabold text-xl text-center text-yellow-200">
            NÃO PERCA!
          </h2>
          <h2 className="font-semibold text-2xl text-center">
            1° Gaia Retreat - 3 e 4 de Agosto
          </h2>
          <p className="font-semibold text-2xl text-center">
            Com a presença de nossas Terapeutas:
          </p>
          <p className="font-semibold text-2xl text-center">
            Marissa Chicre, Maysa Chicre, Fátima Chicre e Lícia Paixão
          </p>
        </div>
      </div>
      <video
        className="rounded-lg"
        width="400"
        height="400"
        muted
        autoPlay
        controls
        aria-label="Evento na Chácara em Agosto 2024"
      >
        <source src="event_august.mp4" type="video/mp4" />
      </video>
    </section>
  )
}
