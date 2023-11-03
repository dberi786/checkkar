import "./Header.css";
import { AiOutlineMenu, AiOutlineSearch, AiFillBell } from "react-icons/ai";
import { CiGrid41 } from "react-icons/ci";
import { toggle } from "../../features/navbar/sidebar";
import { FaCircleUser } from "react-icons/fa6";

import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: "0px", marginBottom: "-25px" }}>
      <div className="navbar">
        <div className="icons-navbar-left">
          <div onClick={() => dispatch(toggle())}>
            <AiOutlineMenu style={{width:"25px"}} />
          </div>
          <a href="/">
            <div className="icon"></div>
          </a>
        </div>
        <div className="icons-navbar-right">
          <AiOutlineSearch style={{ paddingRight: 10, fontSize: "30px" }} />

          <CiGrid41 style={{ paddingRight: 10, fontSize: "30px" }} />

          <AiFillBell style={{ paddingRight: 10, fontSize: "30px" }} />
          <FaCircleUser style={{ paddingRight: 10, fontSize: "40px" }} />
        </div>
      </div>
    </div>
  );
}
