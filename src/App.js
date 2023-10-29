import logo from './logo.svg';
import './App.css';
 import {Routes,Route} from "react-router-dom";
 import RLHF from './Components/RLHF/RLHF';
import RLAIF from './Components/RLAIF/RLAIF';
import Landing from "./Components/Landing/Landing"




function App() {
  return (
    <div className="App">  
    <RLHF/> 
  {/* <Landing/> */}
    {/* <RLAIF/> */}

     {/* <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
     {/* </Routes>  */}
    </div>
  );
}

export default App;
