"use client"
import { useEffect, useState } from "react";
import FormEditar from "../FormEditar";
import { useParams } from "next/navigation";
type Props = {};

const EditarPage = (props: Props) => {

  const params = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://dashboard-comercial-cup.vercel.app/api/producto/${params.id}`);
      const newData = await res.json();
      setData(newData);
    };
    fetchData();
  }, []);
    return (
    data ? 
    <section className="w-full flex justify-center">
      <div className="w-96 flex items-center justify-center bg-white rounded-3xl py-5 shadow-lg border-2 my-4">
        <FormEditar datosPrecargados={data}/>
      </div>
    </section> : <div>Cargando...</div>
  );
};

export default EditarPage;
