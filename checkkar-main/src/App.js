import logo from './logo.svg';
import './App.css';
//  import { from "react-router-dom";
 import RLHF from './Components/RLHF/RLHF';
 import RLHFE from './Components/RLHF/RLHFE';
import RLAIF from './Components/RLAIF/RLAIF';
// import Landing from "./Components/Landing/Landing";
import { BrowserRouter as Router, Route, Link,Routes} from "react-router-dom";
import Projects from './Components/RLHF/Projects';
import Landing from './Components/RLHF/Landing';


function App() {
  return (
    <div className="App">  
    {/* <RLHF/>  */}
    {/* <RLHFE/>  */}
    <Landing />
    {/* <Projects/> */}
  {/* <Landing/> */}
    {/* <RLAIF/> */}

     {/* <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
     {/* </Routes>  */}
    </div>
  //   <Router>
  //     <div>
     
  //     <nav>
  //       <ul>
  //         <li>
  //           <Link to="/rlhf">RLHF</Link>
  //         </li>
  //         <li>
  //           <Link to="/submit">RLHFE</Link>
  //         </li>
  //       </ul>
  //     </nav>

  //     <Switch>
  //       <Route exact path="/rlhf" component={RLHF} />
  //       <Route path="/submit" component={RLHFE} />
  //     </Switch>  
  //   </div>
  // </Router>
  );
}

export default App;
