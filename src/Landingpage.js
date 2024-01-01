import React from "react";
import "./Landingpage.css";
import { motion } from "framer-motion";
import videoBg from "./images/fight.mp4";
import logo from "./images/devduel.jpg";

function LandingPg() {
  return (
    <>
      <div className="bgvideo">
        <div className="content-outer"></div>
        <div className="content">
          <h1>DevDuel</h1>
          <h3>Programming quizz</h3>

          <div class="button-borders">
            <button class="primary-button">START</button>
          </div>
        </div>
        <video src={videoBg} autoPlay loop muted />
      </div>
    </>
  );
}

export default LandingPg;
