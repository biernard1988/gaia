import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
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
    src: "/photos/IMG-20231016-WA0044.jpg",
    alt: "Image 13",
    caption: "Igarapé",
  },
  {
    id: 14,
    src: "/photos/IMG-20240213-WA0014.jpg",
    alt: "Image 14",
    caption: "Igarapé",
  },
];

export default function Gallery() {
  return (
    <section className="h-screen flex flex-col justify-center items-center mt-20 gap-3 mb-10">
      <h1 className="text-white uppercase text-6xl font-extrabold">Galeria</h1>
      <div>
        <Carousel
          className="w-full max-w-sm md:max-w-3xl"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id} className="basis-auto">
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
      </div>
    </section>
  );
}
