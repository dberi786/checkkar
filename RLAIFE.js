import React from "react";
import "./RLAIFE.css";


import Header from "../Header/Header";
import SideBar from "../Sidebar/Sidebar";

const RLAIFE = () => {
  return (
    <div>
      <Header/>
     <SideBar/>
      <div
        className="container"
      >
        <p
          style={{
            textItems: "center",
            padding: "22px",
            fontSize: "22px",
            fontWeight: "semibold",
          }}
        >
       RLAIF
        </p>
      </div>
      <div className="container2">
        <div>
      <div className="cpntainer3">
        <p className="text">Project Name</p>
        {/* To display th project name here */}
        <div className="display"></div>
      </div>
      <div>
        <p className="text">Dataset Size(in Pairs)</p>
        {/* To display the data set size */}
        <div className="display"></div>
      </div>
      <div>
        <p className="text">File Type</p>
        {/* To display file type here */}
        <div className="display"></div>
      </div>
     
      </div>
     
      </div>
      <div className="container4">
      <button className="submit-button">Download</button>
    </div>
    </div>
  );
};

export default RLAIFE;