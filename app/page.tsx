"use client"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import History from "./components/History"
import Image from "next/image"
import Media from "./components/Media"
import { Slide } from "react-awesome-reveal"
import Events from "./components/Events"

const Home: React.FC = () => {
  return (
    <>
      <main className="container h-[70vh] lg:h-screen mx-auto w-full flex flex-col lg:flex-row items-center lg:justify-center lg:border-b lg:border-neutral-800">
        <Slide triggerOnce direction="up">
          <div className="space-y-5 my-10 lg:my-0 text-white">
            <h1 className="uppercase md:text-5xl text-4xl font-semibold font-sans">
              Chácara GAIA
            </h1>
            <p className="md:text-2xl text-xl font-sans md:pl-5">
              Ecoturismo e lazer no coração de <br />
              <br />
              <span className="text-slate-400 text-2xl md:text-2xl lg:text-4xl uppercase font-extrabold italic md:pl-10 leading-1">
                Rio Preto da Eva
              </span>
            </p>
          </div>
        </Slide>
        <Slide triggerOnce direction="up">
          <Image
            src="/main1.png"
            width={500}
            height={500}
            alt="Foto da entrada da Casa Principal"
            className="w-[500px] md:w-[900px] rounded-full"
          />
        </Slide>
      </main>
      <Slide triggerOnce>
        <History />
      </Slide>
      <Slide triggerOnce direction="up">
        <Events />
      </Slide>
      <Slide triggerOnce direction="up">
        <Media />
      </Slide>
      <Slide triggerOnce direction="up">
        <Gallery />
      </Slide>
      <Slide triggerOnce direction="up">
        <Contact />
      </Slide>
    </>
  )
}

export default Home
