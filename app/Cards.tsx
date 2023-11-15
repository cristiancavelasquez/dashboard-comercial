import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  name: string;
  kamId: string;
  geo360: boolean;
  geoPx: boolean;
  TD: boolean;
  RM: boolean;
  tipo: string;
  status: string;
  id: string;
  kam: any;
}

const Cards = async (props: Props) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.kam.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-1">
          <Label>Geo 360:</Label>
          <p>{props.geo360 ? "Si" : "No"}</p>
        </div>
        <div className="flex items-center gap-1">
          <Label>Geo Px:</Label>
          <p>{props.geoPx ? "Si" : "No"}</p>
        </div>
        <div className="flex items-center gap-1">
          <Label>TD:</Label>
          <p>{props.TD ? "Si" : "No"}</p>
        </div>
        <div className="flex items-center gap-1">
          <Label>RM:</Label>
          <p>{props.RM ? "Si" : "No"}</p>
        </div>
        <div className="flex items-center gap-1">
          <Label>Tipo:</Label>
          <p>{props.tipo.toString()}</p>
        </div>
        <div className="flex items-center gap-1">
          <Label>Status:</Label>
          <p>{props.status.toString()}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <Link href={`/productos/eliminar/${props.id}`}>Eliminar</Link>
        </Button>
        <Button>
          <Link href={`/productos/editar/${props.id}`}>Editar</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cards;
