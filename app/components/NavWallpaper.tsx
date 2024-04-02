import Image from "next/image";
export default function NavWallpaper() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <Image
        src="/nav-bg.png"
        alt="Foto da Chacara Panoramica"
        layout="fill" // Fills the container
        className="w-full h-10"
      />
    </div>
  );
}
