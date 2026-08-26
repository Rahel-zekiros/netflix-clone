import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import SectionTwo from "./Components/SectionTwo/SectionTwo";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default App;
