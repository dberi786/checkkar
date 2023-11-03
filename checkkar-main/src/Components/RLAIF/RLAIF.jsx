import React from "react";
import Header from "../Header/Header";
import SideBar from "../Sidebar/Sidebar";

const RLAIF = () => {
  return (
    <div className={{}}>
      <Header />
      <SideBar />
      <div
        style={{
          width: "1060px",
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
            marginTop: "30px",
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
          width: "1061px",
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
        <div style={{ textAlign: "left", marginLeft: "15px" }}>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>
            Prompt-Response with RLAIF
          </p>
        </div>
      </div>
      <div
        style={{
          width: "1061px",
          height: "400px",
          marginLeft: "110px",
          backgroundColor: "#FFFFF",

          borderWidth: "1px",
          border: "1px solid  #CACACA",

          // borderRadius: "10px",
          marginTop: "213",
          boxShadow: "2px 2px 4px rgba(0.1,0.1,0.1,0.1)",
        }}
      >
        <div style={{ marginTop: "8px", marginLeft: "-780px" }}>
          <p
            style={{
              fontWeight: "SemiBold",
              fontSize: "20px",
              marginLeft: "-50px",
            }}
          >
            Prompt
          </p>
          <div>
            <textarea
              style={{
                marginTop: "-10px",
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
        <div style={{ marginTop: "-4px", marginLeft: "-780px" }}>
          <p
            style={{
              fontWeight: "SemiBold",
              fontSize: "20px",
              marginLeft: "-50px",
            }}
          >
            Output
          </p>

          <textarea
            style={{
              marginTop: "-10px",
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
        <div style={{ marginTop: "1px", marginLeft: "-780px" }}>
          <p
            style={{
              fontWeight: "SemiBold",
              fontSize: "20px",
              marginLeft: "32px",
            }}
          >
            {" "}
            Expected Output
          </p>
          <input
            type=""
            style={{
              marginTop: "-10px",
              borderWidth: "1px",
              borderRadius: "10px",
              borderColor: "black",
              width: "700px",
              height: "82px",
              marginLeft: "605px",
              paddingLeft: "10px",
              paddingTop: "-20px",
            }}
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};

export default RLAIF;
