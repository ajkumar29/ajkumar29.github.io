import React, { useEffect } from "react";
import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

import NeonButton from "./components/button/neonButton";

function App() {
  const LINKEDIN_COLOUR_CODE = "#2867B2";
  const GITHUB_COLOUR_CODE = "#BD2C00";
  const EMAIL_COLOUR_CODE = "#6CC644";
  const CV_COLOUR_CODE = "#f6cd61";

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

  const toggle = () => {
    var sec = document.getElementById("sec");
    var navigation = document.getElementById("navigation");

    sec.classList.toggle("active");
    navigation.classList.toggle("active");
  };

  const tick = (
    typewriteList,
    el,
    loopCounter = 0,
    repeatCounter = 0,
    period = 1000,
    isDeleting = false,
    txt = "",
    htmlAdd = ""
  ) => {
    if (loopCounter < typewriteList.length) {
      const typewrite = typewriteList[loopCounter];
      const { fullTxts, componentStart, componentEnd, repeat } = typewrite;
      const fullTxt = fullTxts[repeatCounter % fullTxts.length];
      if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
      } else {
        txt = fullTxt.substring(0, txt.length + 1);
      }
      const html = '<span class="line-1 anim-typewriter">' + txt + "</span>";

      el.innerHTML = htmlAdd + componentStart + html + componentEnd;

      var delta = 200 - Math.random() * 100;

      if (isDeleting) {
        delta /= 2;
      }

      if (!isDeleting && txt === fullTxt) {
        delta = period;
        if (repeat) {
          delta = 2000;

          isDeleting = true;
        } else {
          loopCounter++;
          htmlAdd += componentStart + fullTxt + componentEnd;
          txt = "";
        }
      } else if (isDeleting && txt === "") {
        if (repeat) {
          repeatCounter++;
        }
        isDeleting = false;
      }
      setTimeout(function () {
        console.log(delta);
        tick(
          typewriteList,
          el,
          loopCounter,
          repeatCounter,
          delta,
          isDeleting,
          txt,
          htmlAdd
        );
      }, delta);
    }
  };

  useEffect(() => {
    const el = document.getElementsByClassName("typewrite")[0];
    tick(typewriteList, el);
  }, []);

  return (
    <React.Fragment>
      <section className="banner" id="sec">
        <div className="content">
          <div className="typewrite"></div>
          <div className="buttons">
            <NeonButton id={"linkedin"} color={LINKEDIN_COLOUR_CODE}>
              <i className="fab fa-linkedin-in"></i>
              <span className="logoText"> LinkedIn</span>
            </NeonButton>
            <NeonButton id={"github"} color={GITHUB_COLOUR_CODE}>
              <i className="fab fa-github"></i>
              <span className="logoText"> GitHub</span>
            </NeonButton>
            <NeonButton id={"email"} color={EMAIL_COLOUR_CODE}>
              <i className="far fa-envelope"></i>
              <span className="logoText"> Email</span>
            </NeonButton>
          </div>
          <div className="cvButton">
            <NeonButton id={"cv"} color={CV_COLOUR_CODE}>
              <i className="far fa-file"></i> Download My CV
            </NeonButton>
          </div>
        </div>
      </section>

      <section className="About"></section>

      <section className="Projects"></section>

      <section className="Contact me"></section>
    </React.Fragment>
  );
}

export default App;
