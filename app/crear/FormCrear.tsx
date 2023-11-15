"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface Props {}

const FormSchema = z.object({
  name: z.string({ required_error: "El nombre es requerido" }).min(2, {
    message: "Username must be at least 2 characters.",
  }),
  geo360: z.string({ required_error: "Este valor es requerido" }),
  geopx: z.string({ required_error: "Este valor es requerido" }),
  td: z.string({ required_error: "Este valor es requerido" }),
  rm: z.string({ required_error: "Este valor es requerido" }),
  tipo: z.string({ required_error: "Este valor es requerido" }),
});

const FormCrear = (props: Props) => {
  const { data: datosSession } = useSession();
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const tdBooleano = JSON.parse(data.td.toLowerCase());
    const rmBooleano = JSON.parse(data.rm.toLowerCase());
    const geo360Booleano = JSON.parse(data.geo360.toLowerCase());
    const geoPxBooleano = JSON.parse(data.geopx.toLowerCase());

    const objeto: any = {
      name: data.name,
      kamId: datosSession?.user?.id,
      geo360: geo360Booleano,
      geopx: geoPxBooleano,
      td: tdBooleano,
      rm: rmBooleano,
      tipo: data.tipo,
    };

    fetch("http://localhost:3000/api/laboratorio", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(objeto),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.mensaje + data.name);
        router.push("/productos");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombre del laboratorio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>RM</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Por favor seleccionar..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="true">Sí</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="td"
          render={({ field }) => (
            <FormItem>
              <FormLabel>TD</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Por favor seleccionar..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="true">Sí</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="geo360"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Geo 360</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Por favor seleccionar..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="true">Sí</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="geopx"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Geo Px</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Por favor seleccionar..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="true">Sí</SelectItem>
                  <SelectItem value="false">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tipo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Por favor seleccionar..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Demo">Demo</SelectItem>
                  <SelectItem value="Recurrente">Recurrente</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between gap-5">
          <Button variant="destructive">
            <Link href="/productos">Cancelar</Link>
          </Button>
          <Button type="submit">Crear</Button>
        </div>
      </form>
    </Form>
  );
};

export default FormCrear;
