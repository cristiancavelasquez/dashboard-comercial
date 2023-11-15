"use client";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
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
import { useEffect, useState } from "react";


interface Producto {
  name: string;
  kamId: string;
  geo360: boolean;
  geoPx: boolean;
  TD: boolean;
  RM: boolean;
  tipo: string;
  status: string;
}

interface datosPrecargados {
  datosPrecargados: Producto;
}

const FormSchema = z.object({
  name: z
    .string({ required_error: "El nombre es requerido" })
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .optional(),
  geo360: z.string({ required_error: "Este valor es requerido" }),
  geopx: z.string({ required_error: "Este valor es requerido" }),
  td: z.string({ required_error: "Este valor es requerido" }),
  rm: z.string({ required_error: "Este valor es requerido" }),
  tipo: z.string({ required_error: "Este valor es requerido" }),
  status: z.string({ required_error: "Este valor es requerido" }),
});

const FormEditar = (props: datosPrecargados) => {
  const params = useParams();
  const { data: datosSession } = useSession();
  const router = useRouter();


  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
        defaultValues: {
      name: props.datosPrecargados.name,
      td: props.datosPrecargados.TD.toString(),
      rm: props.datosPrecargados.RM.toString(),
      geo360: props.datosPrecargados.geo360.toString(),
      geopx: props.datosPrecargados.geoPx.toString(),
      tipo: props.datosPrecargados.tipo,
      status: props.datosPrecargados.status,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const tdBooleano = JSON.parse(data.td.toLowerCase());
    const rmBooleano = JSON.parse(data.rm.toLowerCase());
    const geo360Booleano = JSON.parse(data.geo360.toLowerCase());
    const geoPxBooleano = JSON.parse(data.geopx.toLowerCase());

    const objeto: any = {
      name: data.name,
      kamId: props.datosPrecargados.kamId,
      geo360: geo360Booleano,
      geoPx: geoPxBooleano,
      TD: tdBooleano,
      RM: rmBooleano,
      tipo: data.tipo,
      status: data.status,
    };

    fetch(`http://localhost:3000/api/producto/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(objeto),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.mensaje);
        router.push("/productos");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      {Object.keys(props.datosPrecargados).length > 0 && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      defaultValue={props.datosPrecargados.name}
                      placeholder="Nombre del laboratorio"
                      required={false}
                      {...field}
                    />
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={props.datosPrecargados.RM.toString()}
                    required={false}
                  >
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={props.datosPrecargados.TD.toString()}
                    required={false}
                  >
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={props.datosPrecargados.geo360 ? "true" : "false"}
                    required={false}
                  >
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={props.datosPrecargados.geoPx ? "true" : "false"}
                    required={false}
                  >
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={props.datosPrecargados.tipo}
                    required={false}
                  >
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
            {datosSession?.user?.rol === "ADMIN" && (
              <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={props.datosPrecargados.status}
                    required={false}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Por favor seleccionar..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Pendiente">Pendiente</SelectItem>
                      <SelectItem value="QVF">QVF</SelectItem>
                      <SelectItem value="Publicado">Publicado</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />)
              }
            <div className="flex justify-between gap-5">
              <Button variant="destructive">
                <Link href="/productos">Cancelar</Link>
              </Button>
              <Button type="submit">Actualizar</Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default FormEditar;
