import "./globals.css";
import type { Metadata } from "next";
import AuthProvider from "./auth/Provider";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Dashboard Productos Comercial - Close Up International",
  description: "Dashboard desarrollado por @cristiancavelasquez para el manejo de productos por parte de los KAM del área comercial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg">
      <body className="bg-zinc-50">
        <AuthProvider>
          <main>
            <Navbar />
            <section className="container mx-auto mt-4">{children}</section>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
