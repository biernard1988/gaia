import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import History from "./components/History";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main
        className="container h-screen mx-auto w-full flex flex-col md:flex-row items-center md:justify-center md:border-b md:border-neutral-800 scroll-smooth"
        id="home"
      >
        <div className="space-y-5 my-20 md:my-0 text-white">
          <h1 className="uppercase md:text-6xl text-4xl font-semibold font-sans">
            Chácara GAIA
          </h1>
          <p className="md:text-2xl text-xl font-sans pl-5">
            Ecoturismo e lazer no coração de <br />
            <span className="text-slate-400 text-2xl md:text-4xl uppercase font-extrabold italic">
              Rio Preto da Eva
            </span>
          </p>
        </div>
        <Image
          src="/main1.png"
          width={500}
          height={500}
          alt="Foto da entrada da Casa Principal"
          className="w-[900px] rounded-lg mt-5"
        />
      </main>
      <History />
      <Gallery />
      <Contact />
    </>
  );
}
