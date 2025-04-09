// pages/index.js
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import ImageCollage from "./components/ImageCollage";
import WelcomeSection from "./components/WelcomeSection";
import ChiefMonkMessage from "./components/ChiefMonkMessage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <OurServices />
      <ImageCollage />
      <ChiefMonkMessage />
      <Footer />
    </div>
  );
}
