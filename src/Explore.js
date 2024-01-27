import React ,{useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Explore.css";
import devduelshort from "./images/Subscrie.mp4"; 

function Explore(){

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      document.getElementById(`entry`).style.display = 'none';
    }, 2000);

       return () => clearTimeout(timeoutId);
  }, []);

      return(
        <>
      <div className="explore-outer">
      <video id="entry" src={devduelshort} autoPlay muted set/>
      <h1>hello yash</h1>
      </div>
        
        </>
    )
}
export default Explore;