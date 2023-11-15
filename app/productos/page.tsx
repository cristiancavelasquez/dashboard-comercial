import React from "react";
import Cards from "../Cards";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "@/prisma/client";
import Link from "next/link";

interface Props {}

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const misLabs = await prisma.laboratorios.findMany({
    where: {
      kamId: session!.user.id,
    },
    include: {
      kam: true,
    },
  });
  const todosLabs = await prisma.laboratorios.findMany({
    include: {
      kam: true,
    },
  });
  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/crear"
        className="self-end bg-white border-2 rounded-lg p-2
         text-green-700 font-bold border-green-600"
      >
        Crear Producto
      </Link>
      <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {session?.user.rol === "ADMIN"
          ? todosLabs.map((lab) => (
              <Cards
                key={lab.id}
                id={lab.id}
                name={lab.name}
                kamId={lab.kamId}
                RM={lab.RM}
                TD={lab.TD}
                geo360={lab.geo360}
                geoPx={lab.geoPx}
                tipo={lab.tipo}
                status={lab.status}
                kam={lab.kam}
              />
            ))
          : misLabs.map((lab) => (
              <Cards
                key={lab.id}
                id={lab.id}
                name={lab.name}
                kamId={lab.kamId}
                RM={lab.RM}
                TD={lab.TD}
                geo360={lab.geo360}
                geoPx={lab.geoPx}
                tipo={lab.tipo}
                status={lab.status}
                kam={lab.kam}
              />
            ))}
      </section>
    </div>
  );
};

export default page;
