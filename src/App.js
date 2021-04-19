import React, { useState, useEffect } from "react" 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 
import { Snackbar, Typography } from "@material-ui/core" 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import QueriesList from './components/QueriesList' 
import QuestionsByQuery from './components/QuestionsByQuery'
import './App.css';

const App = () => {
  
  
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            All Queries
          </Typography>
        </Toolbar>
      </AppBar> 
      <QueriesList />
    </div> 
  );
}

export default App; 


