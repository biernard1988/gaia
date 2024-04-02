import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative h-125">
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/nav-bg.png"
          alt="Foto da Chacara Panoramica"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute bg-black opacity-40 inset-0"></div>
      </div>
      <div className="relative container mx-auto flex flex-col justify-center items-center space-y-8 text-white px-4 z-10">
        <div className="flex justify-evenly w-1/2 mt-5 text-xl">
          <Link href={""}>Home</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contacts</Link>
        </div>
        <Image
          src="/logo.png"
          alt="Logotipo da Chacara"
          width={200}
          height={200}
        />
      </div>
    </nav>
  );
}
