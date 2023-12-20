import React from "react";
import "./RLHFE.css";
// import SideBar from "../Components/Sidebar/Sidebar";
import Header from "../Header/Header";
import SideBar from "../Sidebar/Sidebar";
import { useState } from "react";
import axios from 'axios';
// import Header from "../Components/Header/Header";

const RLHFE = () => {

  const [projectName,setProjectName]=useState('rlhf');
  const [datasetSize,setDatasetSize]=useState(100);
  const [fileType,setFileType]=useState("csv");

  const handleDownload=async()=>{

    const data={
      projectName:projectName,
      datasetSize:datasetSize,
      fileType:fileType
    }
    try {
      // Make a request to the backend API to trigger the download
      // const response = await axios.get(`http://localhost:7071/api/DownloadProjecttoCSV/${projectName}`);

      const response= await axios.post('http://localhost:7071/api/DownloadProjecttoCSV',data);
      
      // Handle the response, e.g., show a success message or initiate download
      console.log(response.data);
      // Create a blob from the response data
    const blob = new Blob([response.data], { type: 'text/csv' });

    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${projectName}_data.csv`;

    // Append the link to the document and trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);

    } catch (error) {
      console.error('Error downloading data:', error);
    }
  }
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
        <div className="display">{projectName}</div>
      </div>
      <div>
        <p className="text">Dataset Size(in Pairs)</p>
        {/* To display the data set size */}
        <div className="display">{datasetSize}</div>
      </div>
      <div>
        <p className="text">File Type</p>
        {/* To display file type here */}
        <div className="display">{fileType}</div>
      </div>
      </div>
     
      </div>
      <div className="container4">
      <button className="submit-button" onClick={handleDownload}>Download</button>
    </div>
    </div>
  );
};

export default RLHFE;