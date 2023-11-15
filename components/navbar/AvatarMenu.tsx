import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface Props {
  nombre: string;
}

const AvatarMenu = (props: Props) => {
  const iniciales = props.nombre
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="rounded-full">
          {iniciales}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{props.nombre}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="font-normal hover:font-semibold">
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="font-normal hover:font-semibold">
          <Link href="/productos">Mis productos</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600 font-normal hover:font-bold">
          <Link href="/api/auth/signout">Cerrar Sesión</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;
