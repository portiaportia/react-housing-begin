import { useState } from "react";
import "../styles/slideshow.css";

const About = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../images/slideshow", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <>
      <h1>About Us</h1>
    </>
  );
};

export default About;
