import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

interface Props {}

const MainTable = async (props: Props) => {
  const session = await getServerSession(authOptions);
  const res = await fetch("http://localhost:3000/api/laboratorio");
  const data = await res.json();
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Laboratorio</TableHead>
          <TableHead>Geo 360</TableHead>
          <TableHead>Geo Px</TableHead>
          <TableHead>TD</TableHead>
          <TableHead>RM</TableHead>
          <TableHead>Kam</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item: any) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.geo360.toString()}</TableCell>
            <TableCell>{item.geoPx.toString()}</TableCell>
            <TableCell>{item.TD.toString()}</TableCell>
            <TableCell>{item.RM.toString()}</TableCell>
            <TableCell>{item.kamId}</TableCell>
            <TableCell>{item.tipo}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MainTable;
