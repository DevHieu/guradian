import React from "react";
import Header from "../../components/Header/Header.js";
import NavBar from "../../components/NavBar/NavBar.js";
import TrailerVideo from "../../components/TrailerVideo/TrailerVideo.js";
import Description from "../../components/Description/Description.js";
import Story from "../../components/Story/Story.js";
import CharSkill from "../../components/CharSkill/CharSkill.js";
import Guild from "../../components/Guild/Guild.js";
import Footer from "../../components/Footer/Footer.js";

export default function Main() {
  return (
    <div>
      <NavBar />
      <Header />
      <TrailerVideo />
      <Story />
      <Description />
      <CharSkill />
      <Guild />
      <Footer />
    </div>
  );
}
