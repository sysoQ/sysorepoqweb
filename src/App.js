import React, { useState, useEffect } from "react" 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import QueriesList from './components/QueriesList'
import './App.css';

const App = () => {
  const [queries, setQueries] = useState([])
  
  
  useEffect(() => {
    fetch("https://sysoquery.herokuapp.com/queries")
      .then((response) => response.json())
      .then((response) => setQueries(response))
      .catch((err) => console.log(err))
  }, [])
  
  
  
  
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <QueriesList data={queries} />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
