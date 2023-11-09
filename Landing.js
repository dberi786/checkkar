// import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./Landing.css";
import React, { useState } from "react";
import cx from "classnames";
import zIndex from "@mui/material/styles/zIndex";
const Landing = ({ rounded = false, isToggled, onToggle }) => {
  const slideCX = cx("slider", {
    rounded: rounded,
  });
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <div>
          <p
            style={{
              fontWeight: "semi-bold",
              fontSize: "24px",
              marginTop: "-10px",
            }}
          >
            {" "}
            Create Prompt-Response Pair Project Name
          </p>
          <p style={{ color: "#dcdcdc", marginTop: "-20px" }}>
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </p>
          <div>
            <p style={{ fontSize: "20px" }}>Prompt-Response Pair Project Name</p>
            <input
              style={{
                width: "275px",
                borderRadius: "4px",
                borderColor: "gray",
              }}
              type="text"
              id="textInput"
              value={text} // Bind the input value to the state
              onChange={handleChange} // Call handleChange function on input change
            />

            {/* Adding Toggle Switch Button */}
            <div>
              <p style={{ fontWeight: "500" }}>File Format</p>
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
          </div>
        </div>
      </div>

      <div>
        <p
          style={{
            marginLeft: "-740px",
            position: "absolute",
            zIndex: "-1px",
            fontWeight: "bold",
            marginTop: "82px",
            fontSize: "18px",
          }}
        >
          CSV
        </p>

        <p
          style={{
            marginLeft: "-670px",
            position: "absolute",
            zIndex: "-1px",
            fontWeight: "bold",
            marginTop: "82px",
            fontSize: "18px",
          }}
        >
          JSON
        </p>
      </div>
      <div style={{ marginTop: "200px" }}>
        <button
          style={{
            borderRadius: "8px",
            marginLeft: "-215px",
            width: "157px",
            height: "65px",
            backgroundColor: "0874E4",
            fontSize: "25px",
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Landing;
