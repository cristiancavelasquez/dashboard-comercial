"use client";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import prisma from "@/prisma/client";
import { useParams } from "next/navigation";
import Link from "next/link";

type Props = {};

const EliminarProducto = (props: Props) => {
    const params = useParams();
  const handleEliminar = () => {
    fetch(`https://dashboard-comercial.vercel.app/api/producto/${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
        if (response.status === 200) {
            alert("Se ha eliminado correctamente el laboratorio");
            window.location.href = "/productos";
        } else {
            alert("Ha ocurrido un error");
        }
    })
  };
  return (
    <div className="flex items-center justify-center container">
      <Card className="w-64 border-2 shadow-lg">
        <CardHeader>
          <CardDescription className="text-xl text-black font-bold">
            Está seguro de eliminar este laboratorio?
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Link href="/productos">Cancelar</Link>
          </Button>
          <Button className="bg-red-600" onClick={handleEliminar}>
            Eliminar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EliminarProducto;
