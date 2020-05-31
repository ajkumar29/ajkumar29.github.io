import React, {useEffect} from 'react';
import './App.css';

function App() {
  
  const toggle = () => {
    var sec = document.getElementById('sec');
    var navigation = document.getElementById('navigation');

    sec.classList.toggle('active');
    navigation.classList.toggle('active')
  }

  return (
    <React.Fragment>
    <section className="banner" id="sec">
      <header>
        <a href="#" className="logo">Logo</a>
        <div id="toggle" onClick={toggle}></div>
      </header>
       <div class="content">
         <h2>Hello World, <br/>I'm <span>AJ Kumar</span></h2>
         <p>Culpa ex amet reprehenderit excepteur commodo nulla ipsum quis Lorem Lorem elit. Enim Lorem eiusmod ex tempor minim ipsum excepteur laborum adipisicing aliqua dolor culpa tempor est. Excepteur aliqua aliqua aliquip excepteur veniam culpa duis ea anim.</p>
       <a href="#">Know More</a>
       </div>
       <ul className="sci">
         <li><a href="#">Image 1</a></li>
         <li><a href="#">Image 2</a></li>
         <li><a href="#">Image 3</a></li>
       </ul>
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
