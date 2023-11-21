import React, { useState } from "react";

import Header from "../Header/Header";
import SideBar from "../Sidebar/Sidebar";
import DotAnimation from "../../DotAnimation/DotAnimation";
import { BsFillSendFill } from "react-icons/bs";



const RLAIF = () => {
  const [inputHeight, setInputHeight] = useState("37px");
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [firstRowContent, setFirstRowContent] = useState("");
  const [firstRowContent1, setFirstRowContent1] = useState("");
  const handleInputChange = (event) => {
    // Adjust the height based on the input value or any other logic
    const inputValue = event.target.value;
    if (inputValue.length > 10) {
      setInputHeight("1000px"); // Set a taller height when the input value is longer
    } else {
      setInputHeight("37px"); // Use the default height for shorter input values
    }
  };
  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    const handleChange = (e) => {
      const newText1 = e.target.value;
      setText(newText1);

      // Extract the content of the first row
      const lines = newText.split("\n");
      const firstRow = lines[0];

      // Do something with the first row content
      setFirstRowContent(firstRow);
      setFirstRowContent(firstRow);
    };
  };
  return (
    <div>
      <Header />
      <SideBar />
      <div
        style={{
          width:"90vw",
          marginLeft: "110px",
          height: "82px",
          marginTop: "140px",
          backgroundColor: "#FFFFFF",
          borderWidth: "2px",
          borderRadius: "20px",
          boxShadow: "2px 2px 4px rgba(0.6, 0.6, 0.6, 0.6)",
        }}
      >
        <p
          style={{
            textItems: "center",
            padding: "28px",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          RLAIF
        </p>
      </div>
      <div
        style={{
          marginTop: "25px",
          width:"90vw",
          height: "73px",
          backgroundColor: "#FFFFF",
          marginLeft: "110px",
          borderWidth: "1px",
          // borderRadius: "10px",
          boxShadow: "2px 2px 4px rgba(0.1,0.1,0.1,0.1)",
          borderBottom: "0.5px gray #000",
          border: " 2px solid lightgrey",
        }}
      >
        <div
          style={{ textAlign: "left", marginLeft: "15px", textItems: "center" }}
        >
          <p
            style={{
              fontSize: "20px",
              padding: "15px",
              marginLeft: "8px",
              fontWeight: "500",
            }}
          >
            Reinforcement Learning with AI feedback
          </p>
        </div>
      </div>
      <div
        style={{
          width:"90vw",
          height: "400px",
          marginLeft: "110px",
          backgroundColor: "#FFFFF",

          borderWidth: "1px",
          border: " 1px solid  #CACACA",

          // borderRadius: "10px",
          marginTop: "213",
          boxShadow: "2px 2px 4px rgba(0.1,0.1,0.1,0.2)",
        }}
      >
        <div style={{ marginTop: "10px", marginLeft: "-1200px" ,
        '@media (max-width: 600px)': {
          width: '10px', // Adjusted width for smaller screens
          height: '80px', // Adjusted height for smaller screens
        },}}>
          <p
            style={{
              fontSize: "20px",
              marginLeft: "-50px",
            }}
          >
            Prompt
          </p>
          <div>
           
            <textarea
              style={{
                marginTop: "10px",
                borderWidth: "1px",
                borderRadius: "10px",
                borderColor: "black",
                width: "697px",
                height: "37px",
                marginLeft: "600px",
                paddingLeft: "20px",
                paddingTop: "8px",
              }}
              // rows="6"
              // cols="40"
              placeholder=""
              value=""
              onChange=""
            />
          </div>
        </div>
        <div style={{ marginTop: "14px", marginLeft: "-1200px" }}>
          <p
            style={{
              fontSize: "20px",
              marginLeft: "-50px",
            }}
          >
            Output
          </p>

          <textarea
            style={{
              marginTop: "10px",
              borderWidth: "1px",
              borderRadius: "10px",
              borderColor: "black",
              width: "697px",
              height: "72px",
              marginLeft: "600px",
              paddingLeft: "20px",
              paddingTop: "10px",
            }}
            rows="6"
            cols="40"
            placeholder=""
            //  value={text}
            // onChange={handleChange}
          />
        </div>
       
      </div>
      <div style={{ marginTop: "-360px", marginLeft: "890px" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Relevance</p>
        <p style={{ fontSize: "20px", fontWeight: "200" }}>
          How relevant is the output to the prompt ?
        </p>
        {/* <p style={{ fontSize: "20px", fontWeight: "200", marginTop: "-4px" }}>
          your selected AI model or LLM?
        </p> */}
      </div>
      <div style={{ marginTop: "-170px", marginLeft: "1285px",'@media (max-width: 600px)': {
        marginLeft:"-220px",
         
        },
       " @media (max-width: 768px)": {
          marginLeft:"-2000px", /* Example adjustment for larger screens */
        },
        }}>
        <p
          style={{
            border: "solid #000 0.5px",
            borderRadius: 10,
            padding: 5,
            marginLeft: 60,
            fontSize: "0.8em",
            width: 90,
            cursor:"pointer"
          }}
        >
          Submit
        </p>
      </div>
      <div style={{ marginTop: "350px", marginLeft: "1285px" }}>
        <p
          style={{
            border: "solid #000 0.5px",
            borderRadius: 10,
            padding: 5,
            marginLeft: 60,
            fontSize: "0.8em",
            width: 90,
            cursor:"pointer"
          }}
        >
          Next
        </p>
      </div>
      <div>
        <DotAnimation />

      </div>
      <div style={{backgroundColor:"#D9D9D9",width:"42px",height:"40px",marginLeft:"860px",borderRadius:"15px",borderColor:"black",borderWidth:"2px",marginTop:"-135px"}}>
      <BsFillSendFill  style={{ transform: 'rotate(51deg)',fontSize:"31px",marginTop:"2px"}}
     />
      </div>
     
      {/* <div className={`circle ${isClicked ? 'enlarged' : ''}`} onClick={handleClick}>
      Click Me
    </div> */}
    </div>
  );
};

export default RLAIF;
