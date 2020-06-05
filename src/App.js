import React, {useEffect} from 'react';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

import NeonButton from './components/button/neonButton'


function App() {

  const LINKEDIN_COLOUR_CODE="#2867B2"
  const GITHUB_COLOUR_CODE="#BD2C00"
  const EMAIL_COLOUR_CODE="#6CC644"

  const typewriteList =[
    {
      fullTxt: "Hello World, ",
      componentStart: "<h2>",
      componentEnd:"</h2>",
      repeat:false
    },
    {
      fullTxt: "I'm ",
      componentStart: "<h2>",
      componentEnd:"",
      repeat:false
    },
    {
      fullTxt: "AJ Kumar",
      componentStart: "<span>",
      componentEnd:"</span>",
      repeat:false
    },
    {
      fullTxt: "I'm a ",
      componentStart: "<h2>",
      componentEnd:"",
      repeat:false
    },
    {
      fullTxt: "Software Engineer Web Developer",
      componentStart: "",
      componentEnd:"</h2>",
      repeat: true
    }
  ]
  
  const toggle = () => {
    var sec = document.getElementById('sec');
    var navigation = document.getElementById('navigation');

    sec.classList.toggle('active');
    navigation.classList.toggle('active')
  }

  const tick = (typewriteList, el,loopCounter=0, period=2000, isDeleting=false,txt='', htmlAdd='') => {
    const typewrite = typewriteList[loopCounter]
    const {fullTxt, componentStart, componentEnd, repeat} = typewrite
    
    if (isDeleting) {
    txt = fullTxt.substring(0, txt.length - 1);
    } else {
    txt = fullTxt.substring(0, txt.length + 1);
    }
    const html = htmlAdd+ componentStart+txt+componentEnd

    el.innerHTML = '<span class="wrap">'+html+'</span>';

    var delta = 200 - Math.random() * 100;

    if (isDeleting) { delta /= 2; }

    if (!isDeleting && txt === fullTxt) {
      delta = period;
      if (repeat){
        isDeleting = true;
      } else {
        loopCounter++
        htmlAdd = html
        txt=''
      }
    } else if (isDeleting && txt === '') {
    isDeleting = false;
    delta = 500;
    }

    setTimeout(function() {
      tick(typewriteList, el,loopCounter, period, isDeleting,txt, htmlAdd);
    }, delta);
};


  useEffect(() => {
    const el = document.getElementsByClassName('typewrite')[0]
    tick(typewriteList,el)
  

  }, [])

 

  return (
    <React.Fragment>
    <section className="banner" id="sec">
      <header>
        <a href="#" className="logo">AJ</a>
        <div id="toggle" onClick={toggle}></div>
      </header>
       <div className="content">
         <div className="typewrite">

         </div>

         {/* <h2 className="typewriteText" data-typewrite='["Hello World, "]'/>
           <br/>
           <h2 className="typewriteText" data-typewrite='["Im"]'/>
           <span className="typewriteText" data-typewrite='["AJ Kumar"]'/><br/>
         <h2 className="typewriteText" data-typewrite='["Im a "]'/>
         <h2 className="typewriteText" data-repeat='true' data-typewrite='["Web Developer", "Software Engineer"]'/>
          */}
         <div className="buttons">
      <NeonButton id={"linkedin"} color={LINKEDIN_COLOUR_CODE}><i className="fab fa-linkedin-in"></i> LinkedIn</NeonButton>
      <NeonButton id={"github"} color={GITHUB_COLOUR_CODE}><i className="fab fa-github"></i> GitHub</NeonButton>
      <NeonButton id={"email"} color={EMAIL_COLOUR_CODE}><i className="far fa-envelope"></i> Email</NeonButton>
      </div>
       </div>


    </section>
    <div id="navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
    </div>
    </React.Fragment>

  );
}

export default App;
