import React from 'react';
import "./Bottom.css";
import { LiaCopyrightSolid } from "react-icons/lia";

function Bottom() {
  return (
    <div id="bottom">
         <div id='bottom1'>
                <div id="bottom2">
                  <LiaCopyrightSolid id="bottom-rights-icon" />
                  <p id="bottom-p">2024 Restaurant. All Right Reserved. Developed by <u id="bottom-p-u">Intwhizz</u></p>
                </div>
                <div id="bottom3">
                    <a id='bottom-a' href="/">Terms of Services</a>
                    <a id="bottom-a-1" href="/">Privacy Policy</a>
                </div>
         </div>
    </div>
  )
}

export default Bottom