import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuFacebook, LuInstagram } from "react-icons/lu";
import { TbBrandAirbnb } from "react-icons/tb";

export default function Footer() {
  return (
    <section className="h-56 text-white border-t border-neutral-800 container mx-auto">
      <div className="flex justify-between mt-10">
        <ul className="space-y-2">
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          <li>Calendar</li>
          <li>FAQs</li>
        </ul>
        <div className="pl-60">
          <Image
            src="/logo-cru.png"
            alt="Logo Chácara"
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-col items-end gap-5">
          <div className="text-end">
            <h3>2024 Estr. do Baixo Rio, Rio Preto da Eva</h3>
            <h3>CEP-69117-000, Brasil</h3>
            <h3>info@sitiogaia.com</h3>
          </div>
          <div className="flex gap-3 text-2xl">
            <Link
              href={"https://www.instagram.com/chacara_gaia/"}
              target="_blank"
            >
              <LuInstagram />
            </Link>
            <Link href={""}>
              <LuFacebook />
            </Link>
            <Link
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
      <div className="text-center text-sm text-stone-400">
        <p>&copy;ChácaraGaia All Rights Reserverd 2024</p>
      </div>
    </section>
  );
}
