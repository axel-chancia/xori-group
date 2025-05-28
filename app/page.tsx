import SectionServices from "@/components/Section-service";
import Galeries from "@/components/Galeries";
import Heroe from "@/components/Heroe";
import Apropos from "@/components/About";

export default function HomePage() {
  return (
    <main className="flex flex-col space-y-32">
      <Heroe />
      <Apropos />
      <SectionServices />
      <Galeries />
    </main>
  );
}
