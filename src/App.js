import React from 'react'
// import workHome from "./component/SimpleGame";
// import GameScreen from './component/SimpleGame/GameScreen';
import HomeScreen from './OurBuild/HomeScreen';
import HomePage from "./NewProject/Homepage"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import { DommyHome, DommyAbout, DommySettings, DommyFlag } from './TestComp/DommyHome';
import HeaderNav from "./TestComp/HeaderNav";



const App = () => {
  return(
    <Router>
     <HeaderNav/> 
        <Switch>
        <Route path="/" exact component={DommyHome}/>
        <Route path="/about" component={DommyAbout} />
        <Route path="/flag" exact component={DommyFlag} />
        <Route path="/setting" exact component={DommySettings} /> */} */} */}
      
      </Switch>
   </Router> 
    
    
    
  );
};

export default App;