import Link from "next/link";
import NavWallpaper from "./NavWallpaper";

export default function Navbar() {
  return (
    <div>
      <NavWallpaper />
      <nav className="flex justify-between p-3 mx-auto border border-green-700 container">
        <div>
          <span className="text-xl font-extrabold border border-red-700">
            GAIA
          </span>
        </div>
        <div className="flex justify-evenly border border-red-700 w-1/2">
          <Link href={""}>Home</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contacts</Link>
        </div>
      </nav>
    </div>
  );
}
