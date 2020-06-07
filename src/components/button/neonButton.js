import React, { useEffect } from "react";
import "./neonButton.css";

export default function NeonButton(props) {
  const { children, id, color, onClick } = props;

  useEffect(() => {
    document
      .getElementById(`containerButton_${id}`)
      .style.setProperty("--main-color", color);
  }, []);
  return (
    <div className="containerButton" id={`containerButton_${id}`}>
      <a id="neonButton" onClick={onClick}>
        {children}
      </a>
    </div>
  );
}
