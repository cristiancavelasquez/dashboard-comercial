import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const producto = await prisma.laboratorios.findFirst({
    where: {
      id: context.params.id,
    },
  });
  return NextResponse.json(producto);
}
export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const body = await request.json();
  const producto = await prisma.laboratorios.update({
    where: {
      id: context.params.id,
    },
    data: body,
  });
  return NextResponse.json({"mensaje":`${producto.name} actualizado correctamente`});
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const producto = await prisma.laboratorios.delete({
    where: {
      id: context.params.id,
    },
  });
  return NextResponse.json({"mensaje":`${producto.name} eliminado correctamente`});
}