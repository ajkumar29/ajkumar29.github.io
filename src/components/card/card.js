import React from "react";
import "./card.css";

export default function Card() {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="imgBx" data-text="Design">
          <p>Text 1</p>
        </div>
        <div className="cardContent">
          <div>
            <h3>Design</h3>
            <p>
              Qui reprehenderit nisi nulla elit mollit incididunt cupidatat
              consequat in.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="imgBx" data-text="Code">
          <p>Text 2</p>
        </div>
        <div className="cardContent">
          <div>
            <h3>Code</h3>
            <p>
              Qui reprehenderit nisi nulla elit mollit incididunt cupidatat
              consequat in.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="imgBx" data-text="Launch">
          <p>Text 3</p>
        </div>
        <div className="cardContent">
          <div>
            <h3>Launch</h3>
            <p>
              Qui reprehenderit nisi nulla elit mollit incididunt cupidatat
              consequat in.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="imgBx" data-text="Earn">
          <p>Text 4</p>
        </div>
        <div className="cardContent">
          <div>
            <h3>Earn</h3>
            <p>
              Qui reprehenderit nisi nulla elit mollit incididunt cupidatat
              consequat in.
            </p>
            <a href="#">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}
