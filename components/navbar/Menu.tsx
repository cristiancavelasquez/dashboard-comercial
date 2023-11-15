"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();
  return (
    <ul className="gap-3 hidden md:flex lg:flex xl:flex items-center">
      <Link className={`${pathname === "/" && "font-bold "}`} href="/">
        Home
      </Link>
      <Link
        className={`${pathname === "/productos" && "font-bold"}`}
        href="/productos"
      >
        Mis Productos
      </Link>
    </ul>
  );
};

export default Menu;
