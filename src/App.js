import React from "react";
import "./App.css";

import Home from "./panels/home";

function App() {
  const typewriteList = [
    {
      fullTxts: ["Hello World, "],
      componentStart: "<h2>",
      componentEnd: "</h2>",
      repeat: false,
    },
    {
      fullTxts: ["I'm "],
      componentStart: "<h2>",
      componentEnd: "",
      repeat: false,
    },
    {
      fullTxts: ["AJ Kumar"],
      componentStart: "<span id='name'>",
      componentEnd: "</span></h2>",
      repeat: false,
    },
    {
      fullTxts: ["I'm a "],
      componentStart: "<h2>",
      componentEnd: "",
      repeat: false,
    },
    {
      fullTxts: ["Software Engineer", "Web Developer"],
      componentStart: "",
      componentEnd: "</h2>",
      repeat: true,
    },
  ];

  return (
    <React.Fragment>
      <section className="home">
        <Home typewriteList={typewriteList} />
      </section>

      <section className="About"></section>

      <section className="Projects"></section>

      <section className="Contact me"></section>
    </React.Fragment>
  );
}

export default App;
