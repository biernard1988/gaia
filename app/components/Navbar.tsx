import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative h-64">
      <div className="absolute inset-0">
        <Image
          src="/nav-bg.png"
          alt="Foto da Chacara Panoramica"
          fill
          className="object-cover object-center blur-[0.5px]"
          priority
        />
        <div className="absolute bg-black opacity-20 inset-0"></div>
      </div>
      <div className="relative container mx-auto flex flex-col justify-center items-center space-y-4 text-white px-4 z-10">
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
          priority
        />
      </div>
    </nav>
  );
}
