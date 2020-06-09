import React, { useRef } from "react";
import "./App.css";

import Home from "./panels/home";
import Contact from "./components/contactForm/contact";

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
      fullTxts: ["I'm a"],
      componentStart: "<h2>",
      componentEnd: "",
      repeat: false,
    },
    {
      fullTxts: [" Web Developer", "n App Developer", " Software Engineer"],
      componentStart: "",
      componentEnd: "</h2>",
      repeat: true,
    },
  ];

  const contactMeRef = useRef(null);

  return (
    <React.Fragment>
      <section className="home">
        <Home typewriteList={typewriteList} contactMeRef={contactMeRef} />
      </section>

      <section className="About"></section>

      <section className="Projects"></section>

      <section className="Contact me" ref={contactMeRef}>
        <Contact />
      </section>
    </React.Fragment>
  );
}

export default App;
