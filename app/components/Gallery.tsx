"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

interface ImageData {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const images: ImageData[] = [
  {
    id: 1,
    src: "/photos/20231228_173727.jpg",
    alt: "Image 1",
    caption: "Quarto de casal",
  },
  {
    id: 2,
    src: "/photos/20231228_174150.jpg",
    alt: "Image 2",
    caption: "Sala de estar",
  },
  {
    id: 3,
    src: "/photos/20231230_193620.jpg",
    alt: "Image 3",
    caption: "Banheiro",
  },
  {
    id: 4,
    src: "/photos/20240104_144707.jpg",
    alt: "Image 4",
    caption: "Quarto de família",
  },
  {
    id: 5,
    src: "/photos/20240104_144837.jpg",
    alt: "Image 5",
    caption: "Quarto de família",
  },
  {
    id: 6,
    src: "/photos/IMG-20230820-WA0003.jpg",
    alt: "Image 6",
    caption: "Cozinha Equipada",
  },
  {
    id: 7,
    src: "/photos/IMG-20240102-WA0032.jpg",
    alt: "Image 7",
    caption: "Sala de estar",
  },
  {
    id: 8,
    src: "/photos/IMG-20240214-WA0043.jpg",
    alt: "Image 8",
    caption: "Cozinha",
  },
  {
    id: 9,
    src: "/photos/IMG-20230820-WA0004.jpg",
    alt: "Image 9",
    caption: "Área externa ampla",
  },
  {
    id: 10,
    src: "/photos/IMG-20230905-WA0027.jpg",
    alt: "Image 10",
    caption: "Gazebo",
  },
  {
    id: 11,
    src: "/photos/IMG-20230905-WA0028.jpg",
    alt: "Image 11",
    caption: "Churrasqueira",
  },
  {
    id: 12,
    src: "/photos/IMG-20230909-WA0019.jpg",
    alt: "Image 12",
    caption: "Quadra de Vôlei",
  },
  {
    id: 13,
    src: "/photos/IMG-20230820-WA0002.jpg",
    alt: "Image 13",
    caption: "Entrada Piscina",
  },
  {
    id: 14,
    src: "/photos/IMG-20231231-WA0030.jpg",
    alt: "Image 14",
    caption: "Piscina",
  },
  {
    id: 15,
    src: "/photos/IMG-20231016-WA0044.jpg",
    alt: "Image 15",
    caption: "Igarapé",
  },
  {
    id: 16,
    src: "/photos/IMG-20240213-WA0014.jpg",
    alt: "Image 16",
    caption: "Igarapé",
  },
  {
    id: 17,
    src: "/photos/front.png",
    alt: "Image 17",
    caption: "Entrada da Chácara",
  },
  {
    id: 18,
    src: "/photos/arvore.jpg",
    alt: "Image 18",
    caption: "Árvores frutíferas",
  },
  {
    id: 19,
    src: "/photos/infantil.jpg",
    alt: "Image 19",
    caption: "Área de lazer infantil",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeDialog = () => {
    setSelectedImage(null);
  };
  return (
    <section
      id="gallery"
      className="container mx-auto h-[80vh] md:h-screen flex flex-col justify-center items-center md:border-b md:border-neutral-800 my-12"
    >
      <h1 className="text-white uppercase text-5xl md:text-6xl font-extrabold">
        Galeria
      </h1>
      <Carousel
        className="max-w-72 md:max-w-xl"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem
              key={image.id}
              className="lg:basis-auto cursor-pointer flex flex-col items-center justify-center"
              onClick={() => handleImageClick(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="rounded-lg"
              />

              <p className="text-white text-xl font-semibold text-center">
                {image.caption}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Dialog open={!!selectedImage}>
        <DialogContent onClick={closeDialog}>
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Imagem selecionada"
              width={800}
              height={800}
            />
          )}
          <DialogClose asChild>
            <button className="font-semibold text-white" onClick={closeDialog}>
              Fechar
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
}
