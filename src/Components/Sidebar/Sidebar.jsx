import "./Sidebar.css"
import {AiFillFolder,AiOutlineBlock} from "react-icons/ai";
//import ArticleIcon from '@mui/icons-material/Article';
import { useSelector } from "react-redux";

export default function SideBar(){
    const showSideBar = useSelector(state => state.navbar.value)
    return(
        <div className={showSideBar ? "sidebar-hide":"sidebar"}>
            <div>
                <div style={{width:"43px",height:"43px"}}><AiFillFolder style={{width:"36px",height:"24px"}}/></div>
                <div style={{width:"43px",height:"43px"}}><AiOutlineBlock style={{width:"36px",height:"24px"}}/></div>
            </div>
        </div>
    )
}