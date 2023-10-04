import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newLab = await prisma.laboratorios.create({
    data: {
      name: body.name,
      kamId: body.kamId,
      geo360: body.geo360,
      geoPx: body.geoPx,
      TD: body.TD,
      RM: body.RM,
      tipo: body.tipo,
    },
  });
  return NextResponse.json({ mensaje: "Producto Creado con Éxito:", name: newLab.name });
}

export async function GET(request: NextRequest) {
  const labs = await prisma.laboratorios.findMany();
  return NextResponse.json(labs);
}
