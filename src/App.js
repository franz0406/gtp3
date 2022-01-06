import React from "react";

import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from "./container";
import { Navbar, Brand, Cta} from "./components";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="gradient__bg">
        <Navbar />
        <Header />
      </header>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
