import React from "react";
import './Landingpage.css';
import {motion} from 'framer-motion';

function LandingPg() {
    return (
        <>
        <div className="Landingpg">
            <motion.div
              initial= {{x: "70rem" , opacity: 0 }}
              animate= {{x: 0 , opacity: 1}}
              transition={{
                duration: 2,
                type: "spring",
                transition:2,
              }
              }

            className="intro"></motion.div>
            </div>
            </>
    );
}

export default LandingPg;
