export default function Media() {
  return (
    <section
      id="media"
      className="container mx-auto md:h-screen flex flex-col items-center lg:border-b lg:border-neutral-800 my-10"
    >
      <h1 className="my-10 uppercase text-2xl md:text-3xl lg:text-4xl font-extrabold text-center">
        Venha conhecer este Paraíso...
      </h1>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-evenly items-center">
        <article className="p-10 lg:p-0">
          <h2 className="font-semibold text-center mb-5">Como Chegar?</h2>
          <video
            className="rounded-lg"
            width="300"
            height="200"
            controls
            preload="metadata"
            aria-label="Vídeo sobre como chegar à Chácara"
          >
            <source src="como_chegar.mp4" type="video/mp4" />
          </video>
        </article>
        <article className="p-10 lg:p-0">
          <h2 className="font-semibold text-center mb-5">Nossa Estrutura</h2>
          <video
            className="rounded-lg"
            width="300"
            height="200"
            controls
            preload="metadata"
            aria-label="Vídeo de promoção da Chácara"
          >
            <source src="promotion.mp4" type="video/mp4" />
          </video>
        </article>

        <article className="p-10 lg:p-0">
          <h2 className="font-semibold text-center mb-5">
            Sessão Fotográfica na Chácara
          </h2>
          <video
            className="rounded-lg"
            width="300"
            height="200"
            controls
            preload="metadata"
            aria-label="Vídeo da sessão fotográfica na Chácara"
          >
            <source src="sessao_fotografica.mp4" type="video/mp4" />
          </video>
        </article>
      </div>
    </section>
  )
}
