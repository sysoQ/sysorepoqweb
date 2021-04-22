import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListIcon from "@material-ui/icons/List";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const QuestionsByQuery = (props) => {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState({
    questionList: [],
  }); 
  const [listItems, setItems] = React.useState([]);
  const { id } = useParams(); 
  const [answer, setAnswer] = React.useState({
    context: ''
  });

  useEffect(() => {
    getQuery(id);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /* const handleQuestions = () => { 
    const items = props.query.map((d) => <li key={d.text}></li>);
    setItems(items); 
  };*/

   // etsitään yksittäinen query
   const getQuery = (id) => {
    const element = props.queries.find((q) => q.id == id);
    setQuery(element)
  }; 

  const inputChanged = (event) => {
    setAnswer({...answer, [event.target.name]: event.target.value});
  } 

  const handleSave = () => {
    addAnswer(answer);
    //setOpen(false);
  } 

  const addAnswer = (newA) => { 
    fetch('https://sysoquery.herokuapp.com/queries',  
    {
        method: 'POST', 
        body: JSON.stringify(newA), 
        headers: { 'Content-type' : 'application/json' } 
    }) 
    .catch(err => console.error(err))
}  

  return (
    <div>
      {query.questionList.map((d) => 
      <div><h2>{d.text}</h2>
       <TextField
       id="filled-full-width"
       style={{ margin: 80, width: 300 }}
       name="questions" 
       margin="dense"
       label="Vastaus"
       name="brand"
       value={d.answers.content}
       onChange={inputChanged}
       fullWidth
     />
     <Button onClick={handleSave} color="primary">
            Tallenna vastaus
          </Button>
     </div>
      )}
  
          <Link to={"/"}>
          <Button color="primary">
            Cancel
          </Button>
        </Link>


    </div>
  );
};

export default QuestionsByQuery;
