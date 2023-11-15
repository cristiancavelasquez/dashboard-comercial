import {Rol} from "@prisma/client"

declare module "next-auth" {
  interface Session {
    user: {
      id: number
      name: string
      email: string
      image: string
      rol: Rol
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number
    name: string
    email: string
    image: string
    rol: Rol
  }
}
