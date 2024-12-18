/** @format */
import { JWT } from "next-auth/jwt";
declare module "next-auth" {
  interface User {
    id: number;
    full_name: string;
    img: string;
    email: string;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    img: string;
    image: string;
    email: string;
  }
}
