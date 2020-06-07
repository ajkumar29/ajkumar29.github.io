import React from "react";
import "./contact.css";

import NeonButton from "../button/neonButton";

export default function Contact() {
  return (
    <div id="contactContainer">
      <h2>Contact Me</h2>
      <div className="row100">
        <div className="col">
          <div className="inputBox">
            <input type="text" name="" required="required" />
            <span className="text">First Name</span>
            <span className="line"></span>
          </div>
        </div>
        <div className="col">
          <div className="inputBox">
            <input type="text" name="" required="required" />
            <span className="text">Last Name</span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="row100">
        <div className="col">
          <div className="inputBox">
            <input type="text" name="" required="required" />
            <span className="text">Email</span>
            <span className="line"></span>
          </div>
        </div>
        <div className="col">
          <div className="inputBox">
            <input type="text" name="" required="required" />
            <span className="text">Mobile</span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="row100">
        <div className="col">
          <div className="inputBox textarea">
            <textarea required="required" />
            <span className="text">Type your message here</span>
            <span className="line"></span>
          </div>
        </div>
      </div>
      <div className="row100">
        <div className="col">
          <div className="sendButton">
            <NeonButton color={"#45f3ff"}>Send</NeonButton>
          </div>
        </div>
      </div>
    </div>
  );
}
