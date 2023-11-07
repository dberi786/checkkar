import React from "react";
import "./RLHFE.css";


import SideBar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/Header";

const RLHFE = () => {
  return (
    <div>
      <Header/>
      <SideBar />
      <div
        className="container"
      >
        <p
          style={{
            textItems: "center",
            padding: "26px",
            fontSize: "22px",
            fontWeight: "semibold",
          }}
        >
         Instruct and RLHF
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

export default RLHFE;