import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import AvatarMenu from "./AvatarMenu";
import Menu from "./Menu";

interface Props {}

const Navbar = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const nombre = session?.user?.name;
  return (
    <section className="bg-white border-b-2 border-black px-8 py-4 flex justify-between items-center">
      <div className="flex gap-20">
        <img
          src="https://www.close-upinternational.mx/regional_analyzer/images/logoCup.png"
          alt="LOGO"
          className="w-24"
        />
        {session && <Menu />}
      </div>
      {session && <AvatarMenu nombre={nombre!} />}
    </section>
  );
};

export default Navbar;
