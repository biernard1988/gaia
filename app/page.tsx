import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import History from "./components/History";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="relative container h-screen w-full mt-20 flex items-center">
        <div id="home" className="container mx-auto space-y-10 z-10 text-white">
          <h1 className="uppercase md:text-6xl sm:text-3xl font-semibold font-sans">
            Chácara GAIA
          </h1>
          <p className="md:text-2xl sm:text-xl font-sans pl-5">
            Ecoturismo e lazer no coração de <br />
            <span className="text-slate-400 sm:text-2xl md:text-4xl uppercase font-extrabold italic">
              Rio Preto da Eva
            </span>
          </p>
        </div>
        <Image
          src="/main1.png"
          width={500}
          height={500}
          alt="Foto da entrada da Casa Principal"
          className="w-[900px] rounded-lg"
        />
      </main>
      <History />
      <Gallery />
      <Contact />
    </>
  );
}
