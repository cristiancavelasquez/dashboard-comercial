import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newLab = await prisma.laboratorios.create({
    data: {
      name: body.name,
      kamId: body.kamId,
    },
  });

  return NextResponse.json({ mensaje: "lab creado", name: newLab.name });
}

export async function GET(request: NextRequest) {
  const labs = await prisma.laboratorios.findMany();
  return NextResponse.json(labs);
}
