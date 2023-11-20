"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

type Props = {
  texto: string;
  estado: string;
};

const ButtonJC = (props: Props) => {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        fetch("https://dashboard-comercial-cup.vercel.app/api/actualizarestadojc", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ status: props.estado }),
        })
          .then((response) => response.json())
          .then((data) => {
            alert(data.mensaje);
            router.push("/productos");
          })
          .then(() => {
            router.refresh();
          })
          .catch((error) => {
            console.error(error);
          });
      }}
      className="bg-white border-2 rounded-lg p-2
   text-indigo-700 font-bold border-indigo-600 hover:bg-indigo-600 hover:text-white"
    >
      {props.texto}
    </Button>
  );
};

export default ButtonJC;
