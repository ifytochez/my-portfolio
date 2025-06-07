import About from "./components/about/page";
import Navbar from "./components/navbar/page";
import Services from "./components/services/page";
import Skills from "./components/skills/page";
import LatestProject from "./components/latestProject/page";
import Contact from "./components/contact/page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Services />
      <Skills />
      <LatestProject />
      <Contact />
      <ToastContainer />
    </div>
  );
}
