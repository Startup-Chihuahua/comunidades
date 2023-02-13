import React from "react";
import First from "../First/First";
import Border from "../Border/Border";
import Second from "../Second/Second";
import SecondBorder from "../SecondBorder/SecondBorder";
import Model from "../Model/Model";
import Text from "../Text/Text";
import Events from "../Events/Events";
import Sponsors from "../Sponsors/Sponsors";
import Contact from "../Contact/Contact";

export const Home = () => {
  return (
    <>
      <First />
      <Border />
      <Second />
      <SecondBorder />
      <Model/>
      <Text/>
      <Events />
      <Sponsors />
      <Contact />
    </>
  );
};
