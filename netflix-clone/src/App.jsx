import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <div className="app">
      {/* Header goes here — T-07/T-08 */}
      <header>
        <Header />
      </header>
      <main>
        {/* Banner goes here — T-10/T-11 */}
        <section>
          <Banner />
        </section>

        {/* Movie rows go here — T-12/T-13/T-14 */}
        <section>
          <SectionTwo />
        </section>
      </main>

      {/* Footer goes here — T-09 */}
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
