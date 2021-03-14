import React from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="app">
          <Switch>
              <Route path="/checkout">
                  
              </Route>
              <Route path="/login">

              </Route>
              <Route path="/">
                
              </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
