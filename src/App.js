
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./views/authentication/Login"
import Register from "./views/authentication/Register"
import React from 'react';

const App = () => {
  return (
    <Router> 
      <div className="App">
        <Switch>
          <div className='content'>
           <Route exact path = "/"><Register/></Route>
           <Route path= "/login"><Login/></Route>
         </div>
        </Switch>
      </div>  
    </Router>
    
  )
}

export default App;
