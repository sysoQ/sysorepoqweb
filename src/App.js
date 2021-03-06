import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar"; 
import QueriesList from "./components/QueriesList";
import QuestionsByQuery from "./components/QuestionsByQuery";
import "./App.css";
import AnswersByQuery from "./components/AnswersByQuery" 


const App = () => {
  const [queries, setQueries] = useState([]); 
  
  
  const fetchQueries = () => { 
    fetch("https://sysoquery.herokuapp.com/queries")
    .then((response) => response.json())
    .then((response) => setQueries(response))
    .catch((err) => console.log(err));
  };
  
  useEffect(() => { 
    fetchQueries();
  }, []); 
  
  return (
    <Router> 
    <div>
    <AppBar position="static">
    <Toolbar>
    <Typography variant="h5">KyselyAppis</Typography> 
    </Toolbar>
    </AppBar>
    <Switch> 
    <Route exact path="/">
    <QueriesList queries={queries} />
    </Route>
    <Route path="/queries/:id">
    <QuestionsByQuery queries={queries} />
    </Route> 
    <Route path="/question/:id">
    <AnswersByQuery queries={queries} />
    </Route>
    </Switch>
    </div> 
    <div className="footer">
    <p> ©SysoQ Emmi, Krista, Mirka ja Noora 
    </p>
    </div>
    </Router>  
    );
  };
  
  export default App;
  