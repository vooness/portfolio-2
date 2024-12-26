import Navbar from "@/components/Navbar";
import LandingPage from "@/components/Landingpage";
import AboutMe from "@/components/Aboutme";
import Aibussines from "@/components/Aibussines";
import AiProcessTimeline from "@/components/AiProcessTimeline";
import AiToolsGrid from "@/components/AiToolsGrid"; // Import AI Tools Grid
import ToolsSection from "@/components/ToolSection";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact"; // Import kontakt komponenty
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutMe />
      <Aibussines />
      <AiProcessTimeline /> {/* Vertikální časová osa */}
      <Contact /> {/* Sekce kontaktu přidána pod časovou osu */}
      <ToolsSection />
      <AiToolsGrid /> {/* Původní sekce zůstává na svém místě */}
     
      <BlogSection />
      <Footer />
    </div>
  );
}
