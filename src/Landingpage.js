  import React from "react";
  import "./Landingpage.css";
  // import { motion } from "framer-motion";
  import { useNavigate } from "react-router-dom"; // Import Link from react-router-dom
  import videoBg from "./images/valorent fight.mp4";
  import githublogo from "./images/github-mark.svg";
  import linkdinlogo from "./images/linkdin.png";

  function LandingPg() {
    const navigate = useNavigate();

    return (
      <>
        <div className="bgvideo">
          <div className="content-outer"></div>
          <div className="content">
            <h1>DevDuel</h1>
            <h3>Programming quizz</h3>
            <p> _____________________________</p>

            <div className="btns">
              <div>
                  <button className="btn" onClick={()=>navigate("./form")} >Start now</button>
                
                <div className="logos">
                  <img src={githublogo} alt="github logo" />
                </div>
              </div>
              <div>
                <button className="btn" onClick={()=>navigate("/Export")}>Explore now</button>
                <div className="logos">
                  <img src={linkdinlogo} alt="linkidin logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="bgvideo-outer">
            <video src={videoBg} autoPlay loop muted />
          </div>
        </div>
      </>
    );
  }

  export default LandingPg;
