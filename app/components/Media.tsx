export default function Media() {
  return (
    <div className="container mx-auto my-5 h-auto md:h-screen flex flex-col items-center lg:border-b lg:border-neutral-800">
      <h1 className="my-10 uppercase text-5xl font-extrabold">Social Media</h1>
      <div className="w-full flex flex-col md:flex-row justify-between gap-5 items-center ">
        <div>
          <h2 className="font-semibold text-center mb-5">Como Chegar?</h2>
          <video
            className="rounded-lg"
            width="320"
            height="240"
            controls
            preload="auto"
            autoPlay
            muted
          >
            <source src="como_chegar.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <h2 className="font-semibold text-center mb-5">A Chácara</h2>
          <video
            className="rounded-lg"
            width="320"
            height="240"
            controls
            preload="auto"
            autoPlay
            muted
          >
            <source src="promotion.mp4" type="video/mp4" />
          </video>
        </div>

        <div>
          <h2 className="font-semibold text-center mb-5">
            Sessão Fotográfica na Chácara
          </h2>
          <video
            className="rounded-lg"
            width="320"
            height="240"
            controls
            preload="auto"
            autoPlay
            muted
          >
            <source src="sessao_fotografica.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
