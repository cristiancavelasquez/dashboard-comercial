import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import MainTable from "./MainTable";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Bienvenido {session?.user?.name}</h1>
        {/* <p>{JSON.stringify(session)}</p> */}
        <MainTable />
      </div>
    );
  }
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-7xl font-semibold">¡Bienvenido!</h1>
      <div className="flex-col gap-2">
        <p className="mb-8">Para realizar cambios en sus productos, por favor inicie sesión:</p>
        <Link
          href="/api/auth/signin"
          className="px-4 py-2 border-t border-l border-b-4 border-r-4 border-black text-black rounded-lg hover:border-t-2 hover:border-l-2 hover:border-b-4 hover:border-r-4"
        >
          Iniciar Sesión
        </Link>
      </div>
    </section>
  );
}
