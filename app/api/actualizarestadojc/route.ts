// ruta para actualizar el status de todos mis labs usando prisma en nextjs api routes
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newLab = await prisma.laboratorios.updateMany({
    data: {
      status: body.status,
    },
  });
  return NextResponse.json({ mensaje: `Estado Actualizado con Éxito a: ${body.status} ` });
}