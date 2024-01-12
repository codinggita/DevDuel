import React from "react";
import {useNavigate} from "react-router-dom";
import "./Explore.css";

function Explore(){
    const navigate = useNavigate();
    return(
        <>
      <div className="aa">
        <h1>Explore</h1>
        <button className="explore-btn" onClick={()=>navigate("/")}>back</button>
      </div>
        
        </>
    )
}
export default Explore;