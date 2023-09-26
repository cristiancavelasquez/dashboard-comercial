"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-3">
      <Link className={`${pathname === "/" && "font-bold"}`} href="/">
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
