export default function Media() {
  return (
    <div
      id="media"
      className="container mx-auto md:h-screen flex flex-col items-center lg:border-b lg:border-neutral-800 my-10"
    >
      <h1 className="my-10 uppercase text-2xl md:text-3xl lg:text-4xl font-extrabold text-pretty">
        Venha conhecer este Paraíso...
      </h1>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-evenly items-center">
        <div className="p-10 lg:p-0">
          <h2 className="font-semibold text-center mb-5">Como Chegar?</h2>
          <video
            className="rounded-lg"
            width="300"
            height="200"
            controls
            preload="auto"
          >
            <source src="como_chegar.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="p-10 lg:p-0">
          <h2 className="font-semibold text-center mb-5">A Chácara</h2>
          <video
            className="rounded-lg"
            width="300"
            height="200"
            controls
            preload="auto"
          >
            <source src="promotion.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="p-10 lg:p-0">
          <h2 className="font-semibold text-center mb-5">
            Sessão Fotográfica na Chácara
          </h2>
          <video
            className="rounded-lg"
            width="300"
            height="200"
            controls
            preload="auto"
          >
            <source src="sessao_fotografica.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
