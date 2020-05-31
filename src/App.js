import React from 'react';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'; 

import Scrollbar from './components/scrollbar/scrollbar'
import NeonButton from './components/button/neonButton'
import GlitchText from './components/glitchText/glitchText'

import Contact from './components/contactForm/contact'

function App() {
  return (
    <React.Fragment>
      <GlitchText text={"AJ.KUMAR"}/>
    <div id="buttons">
      <NeonButton text={"LinkedIn"} color={"#0e76a8"}>
      <i className="fab fa-linkedin-in"/> LinkedIn
      </NeonButton>
      <NeonButton text={"GitHub"} color={"#bd2c00"}>
      <i className="fab fa-github"/> GitHub
      </NeonButton>
      <NeonButton text={"Contact Me"} color={"#6cc644"}>
      <i class="far fa-envelope"/> Contact Me
      </NeonButton>
    </div>

    <Contact/>
    </React.Fragment>


  );
}

export default App;
