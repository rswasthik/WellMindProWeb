import React from "react";
import FixedButtons from "../components/FixedButton";
import Navbar2 from "../components/Navbar2";
import GlassContainer from "../components/glassContainer";
import ParticleBackground from "../components/particleBackground";
import ImageSlider from "/components/imageSlider";

function Main() {
  return (
    <>
     
      <ParticleBackground />
      <Navbar2 />

      {/* <ImageSlider /> */}
      <GlassContainer />

      <FixedButtons />
    </>
  );
}

export default Main;
