import React, { useState, useEffect } from "react" 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 
import { Snackbar } from "@material-ui/core"
import QueriesList from './components/QueriesList' 
import QuestionsByQuery from './components/QuestionsByQuery'
import './App.css';

const App = () => {
  const [queries, setQueries] = useState([]) 
  const [msg, setMsg] = useState("")
  const [open, setOpen] = useState(false)
  
  
  useEffect(() => {
    fetch("https://sysoquery.herokuapp.com/queries")
      .then((response) => response.json())
      .then((response) => setQueries(response))
      .catch((err) => console.log(err))
  }, [])
  
  
  const closeSnackbar = () => {
    setOpen(false)
  }

  if (!queries) {
    return <div>Wait a moment hurry Harry</div>
  }
  
  
  return (
    <Router>
      <div className="App"> 
      
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={closeSnackbar}
          message={msg}
        />
        <Switch>
          <Route path="/">
            <QueriesList data={queries} />
          </Route>  
         
          <Route path="/:id">
            <QuestionsByQuery
              data={queries}
              msg={msg}
              setMsg={setMsg}
              open={open}
              setOpen={setOpen}
            />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App; 


