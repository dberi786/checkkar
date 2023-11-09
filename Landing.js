// import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./Landing.css";
import React, { useState } from "react";
import cx from "classnames";
import zIndex from "@mui/material/styles/zIndex";
const Landing = ({ rounded = false, isToggled, onToggle }) => {
  const slideCX = cx("slider", {
    rounded: rounded,
  });
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
// Repaired one
  return (
    <div className="popup">
      <div className="popup-inner">
        <div>
          <p className="heading">Create RLHF Project</p>
          <p className="line">
            ──────────────────────────────────────────────────
          </p>
          <p className="heading2">RLHF Project Name</p>

          <div>
            <input
              type="text"
              id="myInput"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
         <div>
              <p style={{ fontWeight: "400",textAlign:"left" }}>File Format</p>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleToggle}
                  id="toggle"
                />
                <label htmlFor="toggle" className="slider"></label>
              </div>
            </div>
        
      <div>
        <p
          style={{
            marginLeft:"29px",
             position: "absolute",
             zIndex: "-1px",
             fontWeight: "bold",
             marginTop: "-40px",
             fontSize: "18px",
           }}
        >
          CSV
        </p>

        <p
          style={{
           marginLeft:"105px",
            position: "absolute",
            zIndex: "-1px",
            fontWeight: "bold",
            marginTop: "-40px",
            fontSize: "18px",
          }}
        >
          JSON
        </p>
      </div>
        </div>
      </div>

      <div style={{ marginTop: "200px" }}>
        <button
          style={{
            borderRadius: "8px",
            marginLeft: "-215px",
            width: "157px",
            height: "65px",
            backgroundColor: "#0874E4",
            fontSize: "25px",
            color:"white"
          }}
        >
          Create
        </button>
      </div>
    </div>
    
  );
};

export default Landing;
