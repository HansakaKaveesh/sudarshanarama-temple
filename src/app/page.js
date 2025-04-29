// pages/index.js

import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import ImageCollage from "./components/ImageCollage";
import WelcomeSection from "./components/WelcomeSection";
import ChiefMonkMessage from "./components/ChiefMonkMessage";
import DhammaTalksSection from "./components/DhammaTalksSection";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <WelcomeSection />
      
      <OurServices />
      <DhammaTalksSection/>
      <ImageCollage />
      <ChiefMonkMessage />
    </div>
  );
}
