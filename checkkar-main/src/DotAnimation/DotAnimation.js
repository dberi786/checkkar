import React, { useState } from "react";
import "./DotAnimation.css";
const DotAnimation = ({ onCircleClick }) => {
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
      // Call the onCircleClick function to send the selected circle id to the parent component
      onCircleClick(circleId);
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
    <div style={{width:"200px",marginLeft:"1100px",marginTop:"-245px"}}>
    {/* <p style={{color:"black",position:"relative",marginTop:"1px",width:"1px"}}>━━━━━━━━━━━━━</p> */}
      <div>
      <div className="circle-container">

      {circleElements}
    </div>
    </div>
    <p style={{color:"black",position:"fixed",marginTop:"-25px",width:"1px",zIndex:"-100"}}>━━━━━━━━━━━━</p>
    <div style={{ display: "flex",
        flex: "horizontal",}}>
        <p style={{fontWeight:"bold"}}>1</p>
        <p style={{fontWeight:"bold",marginLeft:"42px"}}>2</p>
        <p style={{fontWeight:"bold",marginLeft:"42px"}}>3</p>
        <p style={{fontWeight:"bold",marginLeft:"35px"}}>4</p>
        <p style={{fontWeight:"bold",marginLeft:"35px"}}>5</p>

    </div>
    </div>
  );
};

export default DotAnimation;
