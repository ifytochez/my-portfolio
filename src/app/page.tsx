import About from "./components/about/page";
import Navbar from "./components/navbar/page";
import Services from "./components/services/page";
import Skills from "./components/skills/page";
import LatestProject from "./components/latestProject/page";
import Contact from "./components/contact/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <Skills />
      <LatestProject />
      <Contact />
    </div>
  );
}
