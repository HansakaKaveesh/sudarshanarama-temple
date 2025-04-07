// pages/index.js
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WelcomeSection from "./components/WelcomeSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <Footer />
    </div>
  );
}
