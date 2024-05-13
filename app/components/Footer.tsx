import Image from "next/image";
import Link from "next/link";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { TbBrandAirbnb } from "react-icons/tb";

export default function Footer() {
  return (
    <section className="h-56 place-content-center px-8 lg:px-20 text-white border-t border-neutral-800">
      <div className="flex justify-between mt-10">
        <div className="flex flex-col w-1/3 gap-5">
          <Link className="hover:text-amber-300" href="#home">
            Início
          </Link>
          <Link className="hover:text-amber-300" href="#history">
            História
          </Link>
          <Link className="hover:text-amber-300" href="#gallery">
            Galeria
          </Link>
        </div>
        <div className="hidden w-1/3 justify-center items-start md:flex">
          <Image
            src="/logo-cru.png"
            alt="Logo Chácara"
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col w-1/3 items-end gap-5">
          <div className="text-end">
            <h3>Estr. do Baixo Rio, n-410</h3>
            <h3>Rio Preto da Eva</h3>
            <h3>CEP: 69117-000</h3>
            <h3>Amazonas - Brasil</h3>
            <h3>chacaragaiaam@gmail.com</h3>
          </div>
          <div className="flex gap-3 text-2xl transition-all">
            <Link
              className="hover:text-amber-300"
              href={"https://www.instagram.com/chacara_gaia/"}
              target="_blank"
            >
              <LuInstagram />
            </Link>
            <Link
              className="hover:text-amber-300"
              href={"https://m.facebook.com/fehmeninaterapias"}
              target="_blank"
            >
              <LuFacebook />
            </Link>
            <Link
              className="hover:text-amber-300"
              href={
                "https://www.airbnb.com/rooms/967659341829689048?check_in=2024-04-05&check_out=2024-04-10&guests=1&adults=1&s=67&unique_share_id=77ddcc9f-3037-4c41-83b5-1478ed5f0efb"
              }
              target="_blank"
            >
              <TbBrandAirbnb />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-stone-400 mt-5 md:mt-0">
        <p>&copy;Chácara Gaia - All Rights Reserved</p>
      </div>
    </section>
  );
}
