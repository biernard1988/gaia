import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const images = [
  {
    id: 1,
    src: "/photos/20231228_173727.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "/photos/20231228_174150.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "/photos/20231230_193620.jpg",
    alt: "Image 3",
  },
];

export default function Home() {
  return (
    <>
      <main className="relative h-screen w-full mt-20 flex items-center">
        <div className="absolute inset-20 w-3/4">
          <Image
            src="/main1.png"
            fill
            alt="Foto da entrada da Casa Principal"
            className="rounded-full object-center"
          />
        </div>
        <div className="relative container mx-auto space-y-10 z-10 text-white ml-28 w-full">
          <h1 className="uppercase md:text-6xl sm:text-3xl font-semibold font-sans">
            Chácara GAIA
          </h1>
          <p className="md:text-2xl sm:text-xl font-sans">
            Ecoturismo e lazer no coração de
            <p className="text-slate-400 sm:text-2xl md:text-4xl uppercase font-extrabold italic">
              Rio Preto da Eva
            </p>
          </p>
        </div>
      </main>
      <section className="h-screen w-full text-black bg-stone-50 flex flex-col justify-center md:flex-row">
        <div className="w-1/2 place-content-center p-4">
          <Image
            src="/front.png"
            width={800}
            height={600}
            alt="Foto da área frontal da Chácara"
            className="rounded-3xl"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-end p-10 gap-10">
          <h1 className="uppercase sm:text-3xl md:text-6xl font-extrabold">
            História
          </h1>
          <p className="sm:text-xl md:text-2xl italic tracking-widest text-end">
            O nome <b>Gaia</b> tem origem grega e está associado à
            personificação feminina da Terra na mitologia. Gaia é considerada a
            mãe primordial, responsável pela criação e fertilidade da natureza.
            E é no seio da natureza, em meio ao ar puro, árvores e animais que
            decidimos investir e proporcionar a mais pessoas a oportunidade de
            vivenciar momentos de paz e tranquilidade, entre a família ou
            amigos.
          </p>
        </div>
      </section>
      <section className="h-screen text-white flex flex-col justify-center items-center">
        <h1>Carrousel</h1>
        <div>
          <Carousel className="w-full max-w-lg">
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.id}>
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={100}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  );
}
