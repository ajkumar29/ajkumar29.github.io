import React, { useEffect } from "react";
import "./home.css";
import NeonButton from "../components/button/neonButton";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Morph from "../components/deviceMorph/morph";

export default function Home({ typewriteList, contactMeRef }) {
  const LINKEDIN_COLOUR_CODE = "#2867B2";
  const GITHUB_COLOUR_CODE = "#BD2C00";
  const EMAIL_COLOUR_CODE = "#6CC644";
  const CV_COLOUR_CODE = "#F6CD61";
  const BEGIN_COLOUR_CODE = "#F6CD61";

  const GITHUB_URL = "https://github.com/ajkumar29";
  const LINKEDIN_URL = "https://www.linkedin.com/in/aj-uthayakumar";

  const scrollToRef = (ref) =>
    window.scrollTo({
      left: 0,
      top: ref.current.offsetTop,
      behavior: "smooth",
    });

  const tick = (
    typewriteList,
    el,
    loopCounter = 0,
    repeatCounter = 0,
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
        tick(
          typewriteList,
          el,
          loopCounter,
          repeatCounter,
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

  const openUrl = (url) => {
    window.open(url, "_blank");
  };

  return (
    <React.Fragment>
      <div className="content">
        <div className="typewrite"></div>
        <div className="buttons">
          <NeonButton
            id={"linkedin"}
            color={LINKEDIN_COLOUR_CODE}
            onClick={() => openUrl(LINKEDIN_URL)}
          >
            <i className="fab fa-linkedin-in"></i>
            <span className="logoText"> LinkedIn</span>
          </NeonButton>
          <NeonButton
            id={"github"}
            color={GITHUB_COLOUR_CODE}
            onClick={() => openUrl(GITHUB_URL)}
          >
            <i className="fab fa-github"></i>
            <span className="logoText"> GitHub</span>
          </NeonButton>
          <NeonButton
            id={"email"}
            color={EMAIL_COLOUR_CODE}
            onClick={() => scrollToRef(contactMeRef)}
          >
            <i className="far fa-envelope"></i>
            <span className="logoText"> Email</span>
          </NeonButton>
          <NeonButton id={"cv"} color={CV_COLOUR_CODE}>
            <span className="logoText">
              <i className="far fa-file"></i> Download My{" "}
            </span>
            CV
          </NeonButton>
        </div>
      </div>
      <Morph />

      <div className="beginButton">
        <NeonButton id={"begin"} color={BEGIN_COLOUR_CODE}>
          See my journey
        </NeonButton>
      </div>
    </React.Fragment>
  );
}
