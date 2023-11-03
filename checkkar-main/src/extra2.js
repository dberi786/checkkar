import React, { useState } from "react";
import "./DotAnimation.css";
const DotAnimation = () => {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);

  const handleClick1 = () => {
    setIsClicked1(true);
  };
  const handleClick2 = () => {
    setIsClicked2(true);
  };
  const handleClick3 = () => {
    setIsClicked3(true);
  };
  const handleClick4 = () => {
    setIsClicked4(true);
  };
  const handleClick5 = () => {
    setIsClicked5(true);
  };
  const [selectedCircle, setSelectedCircle] = useState(null);

  const handleCircleClick = (circleId) => {
    setSelectedCircle(circleId);
  };

  const circles = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];
  const circleElements = [];
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    const isSelected = selectedCircle === circle.id;
    const circleClassName = `circle ${isSelected ? 'selected' : ''}`;
    
    circleElements.push(
      <div
        key={circle.id}
        className={circleClassName}
        onClick={() => handleCircleClick(circle.id)}
      ></div>
    );
  }

  return (
    <div
    
      style={{
        marginTop: "-220px",
        marginLeft: "1100px",
        display: "flex",
        flex: "horizontal",
      }}
    >
      <p style={{color:"lightgrey"}}>━━━━━━━━━━━━</p>
      <div style={{ marginLeft: "-198px", marginTop: "-1px" }}>
        <div
       
          className={`circle1 ${isClicked1 ? "enlarged1" : ""}` }
          onClick={circleElements}
          
        >
             <p style={{ marginTop: "3px", fontWeight: "bold" }}></p>
          
        </div>
        <p style={{marginTop:"12px",fontWeight:"bold"}}>1</p>
      {/* <div>
        <p style={{fontWeight:"bold",marginTop:"15px"}}>1</p>
      </div> */}
      </div>
      <div
        className={`circle2 ${isClicked2 ? "enlarged2" : ""}`}
        onClick={handleClick2}
      >
        <p style={{ marginTop: "35px", fontWeight: "bold" }}>2</p>
      </div>
      <div
        className={`circle3 ${isClicked3 ? "enlarged3" : ""}`}
        onClick={handleClick3}
      >
        <p style={{ marginTop: "35px", fontWeight: "bold" }}>3</p>
      </div>

      <div
        className={`circle4 ${isClicked4 ? "enlarged4" : ""}`}
        onClick={handleClick4}
      >
        <p style={{ marginTop: "35px", fontWeight: "bold" }}>4</p>
      </div>

      <div
        className={`circle5 ${isClicked5 ? "enlarged5" : ""}`}
        onClick={handleClick5}
      >
        <p style={{ marginTop: "35px", fontWeight: "bold" }}>5</p>
      </div>
        add 
        <div className="circle-container">
        {circleElements}
        </div>
      
    
    </div>
  );
};

export default DotAnimation;
