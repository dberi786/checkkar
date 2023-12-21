import React from "react";
import "./RLAIF_Pro.css";




import SideBar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";

import { FaCircleUser } from "react-icons/fa6";

const RLAIF_Pro = () => {
  return (
    <div>
  
    <SideBar/>
    <div>
    <div style={{ marginTop: "115px", marginBottom: "-25px" }}>
      <div className="navbar">
        <div className="icons-navbar-left">
          <a href="/">
            <div className="icon"></div>
          </a>
        </div>
        <div className="icons-navbar-right">
          <FaCircleUser style={{ paddingRight: 10, fontSize: "40px" }} />
        </div>
      </div>
    </div>
    </div>
    <div className="container1">
        <div className="item-list">
        <p className="list1">Projects</p>
{/* add text area here */}
<div className="center-placeholder">
        <textarea
          className="custom-textarea"
          placeholder="Search for your Projects"
        ></textarea>
      </div>
      <div className="search-icon">
        <i className="AiOutlineSearch"><AiOutlineSearch/></i> 
      </div>
       <div className="container3">
      <div className="display_result">
        {/* Content of black box */}
        <p className="title1">Title</p>
        <p className="description">Description</p> 
      </div>
      <div className="display_result">
          
      </div>
      <div className="display_result">
         
      </div>
      
       </div>
       </div>
      
    </div>
    </div>
    
  );
};

export default RLAIF_Pro;