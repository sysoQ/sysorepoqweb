import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Snackbar, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import QueriesList from "./components/QueriesList";
import QuestionsByQuery from "./components/QuestionsByQuery";
import "./App.css";

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
            <Typography variant="h5">All Queries</Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <QueriesList queries={queries} />
          </Route>
          <Route path="/queries/:id">
            <QuestionsByQuery queries={queries} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
