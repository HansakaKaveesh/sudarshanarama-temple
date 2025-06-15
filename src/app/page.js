// pages/index.js

import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import ImageCollage from "./components/ImageCollage";
import WelcomeSection from "./components/WelcomeSection";
import ChiefMonkMessage from "./components/ChiefMonkMessage";
import DhammaTalksSection from "./components/DhammaTalksSection";
import Not from "./components/notac";

export default function Home() {
  return (
    <div>
     {/* <Not /> */}
      <Hero />
      <WelcomeSection />
      <OurServices />
      <DhammaTalksSection/>
      <ImageCollage />
      <ChiefMonkMessage /> 
    </div> 
  );
}
