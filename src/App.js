import React from 'react';
import './App.css';
import TopPage from './TopPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {

 // GithubPages Empty pages Solution#2 Adding basename (https://reactrouter.com/web/api/BrowserRouter/basename-string)
  return (
    <Router basename={window.location.pathname || ''}> 
      <div className="App">
        <Switch>
          <Route exact path="/" component={TopPage} />
        </Switch>
      </div>
    </Router>
  );

  /* // Solution#1 for empty github pages with <Switch> tag. adding component by import (import Main from "./components/main/Main";)
    return (
    <Router> 
      <div className="App">
        <Main />
        <About />
        <Photos />
        <Work />
        <Skills />
        <Contacts />
      </div>
    </Router>
  );
  */ 

  //Local Access (http://localhost:3000/)
  // return (
  //   <Router> 
  //     <div className="App">
  //         <Switch>
  //           <Route path="/" exact component= {TopPage} />
  //         </Switch>
  //     </div>
  //   </Router>
  // );
  
}

export default App;
