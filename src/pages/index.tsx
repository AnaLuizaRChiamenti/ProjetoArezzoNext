import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import MainHome from "./home";

export default function Home() {
  return (
    <main>
      <Header />
      <MainHome />
    </main>
  );
}
