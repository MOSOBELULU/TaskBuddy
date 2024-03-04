import { Inter } from "next/font/google";
import Task from "./tasks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Task />
  )
  }
      