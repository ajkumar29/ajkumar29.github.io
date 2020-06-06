import React, {useEffect} from 'react'
import './home.css'
import NeonButton from "../components/button/neonButton";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";



export default function Home({typewriteList}) {
    const LINKEDIN_COLOUR_CODE = "#2867B2";
    const GITHUB_COLOUR_CODE = "#BD2C00";
    const EMAIL_COLOUR_CODE = "#6CC644";
    const CV_COLOUR_CODE = "#f6cd61";

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
            console.log(delta);
            tick(
              typewriteList,
              el,
              loopCounter,
              repeatCounter,
              isDeleting,
              txt,
              htmlAdd
            );
          }, delta)
        }};
    
      useEffect(() => {
        const el = document.getElementsByClassName("typewrite")[0];
        tick(typewriteList, el);
      }, []);
      
    return (
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
    )
}
