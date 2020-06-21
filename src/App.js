import React from 'react';
import './App.css';
import TopPage from './TopPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router> 
      <div className="App">
          <Switch>
            <Route path="/" exact component= {TopPage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
