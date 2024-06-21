import BigScreens from "@/components/BigScreens";
import Hero from "@/components/Hero";
import News from "@/components/News";
import PageOne from "@/components/PageOne";
import TimeCalc from "@/components/TimeCalc";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <BigScreens />
      <Hero />
      <PageOne />
      <TimeCalc />
      <News />
    </main>
  );
}
