import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Bienvenido {session?.user?.name}</h1>
        <p>Aqui irá la tabla o cards principales, solo lectura</p>
        
      </div>
    );
  }
  return (
    <section className="flex flex-col gap-4">
      <h1>Bienvenido</h1>
      <div className="flex items-center gap-2">
        <p>Para realizar cambios en sus productos, por favor inicie sesión:</p>
        <Link
          href="/api/auth/signin"
          className="px-4 py-2 bg-blue-700 text-white rounded-lg"
        >
          Iniciar Sesión
        </Link>
      </div>
    </section>
  );
}
