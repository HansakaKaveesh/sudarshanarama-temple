// pages/index.js

import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import ImageCollage from "./components/ImageCollage";
import WelcomeSection from "./components/WelcomeSection";
import ChiefMonkMessage from "./components/ChiefMonkMessage";


export default function Home() {
  return (
    <div>
      
      <Hero />
      <WelcomeSection />
      <OurServices />
      <ImageCollage />
      <ChiefMonkMessage />
    </div>
  );
}
