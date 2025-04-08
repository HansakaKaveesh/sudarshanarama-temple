// pages/index.js
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import WelcomeSection from "./components/WelcomeSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <OurServices />
      <Footer />
    </div>
  );
}
