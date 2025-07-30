import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import Skills from "@/components/skills";
import About from "@/components/about";
import Education from "@/components/experience";
import Contect from "@/components/contect";

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Skills />
      <About />
      <Education />
      <Contect />
    </>
  );
}
