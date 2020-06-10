import React from "react";
import "./glitchText.css";

export default function GlitchText({ text }) {
  return (
    <div className="content">
      <h1 className="text" data-text={text}>
        {text}
      </h1>
    </div>
  );
}
