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
import { PanoramaSharp } from "@material-ui/icons"; 
import Container from '@material-ui/core/Container';  
import SaveIcon from '@material-ui/icons/Save'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const QuestionsByQuery = (props) => {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState({
    questionList: [],
  }); 
  //const [listItems, setItems] = React.useState([]);
  const { id } = useParams(); 
  const [answer, setAnswer] = React.useState({
    content: ''
  }); 
  const [list, setList] = React.useState([]); 
  const classes = useStyles(); 

  

  useEffect(() => {
    getQuery(id);
  }, []);

  /*const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   const handleQuestions = () => { 
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

  // tallennusbuttonin click-funktio, index on vastattavan kysymyksen paikka kysymyslistassa
  const handleSave = (index) => { 

    // tehdään tallennettava objekti json-muotoon
    /* vastauksen backendissä oletettu formaatti:
      {
        "content": "Käyn osa-aikaisesti", 
        "question": {
          "id":3
        }
      }
    */
    const newAnswer = { 
      ...answer, content: answer.content, 
      question: {id: query.questionList[index].id}
      }; 
    
    //setList(newAnswer);
    console.log(newAnswer); 
    console.log(list);
    addAnswer(newAnswer);  
    //console.log(list);
    console.log("seivasin");
    //setOpen(false); 
    
  } 

  const addAnswer = (newAnswer) => { 
    console.log("menin fetchiin");
    fetch('https://sysoquery.herokuapp.com/answer',  
    {
        method: 'POST', 
        body: JSON.stringify(newAnswer),   
        //body: '{"content": "Käyn juuuuuu","question": {"id":3}}',   
        headers: { 'Content-type' : 'application/json' }  
        
    })  
    
    .catch(err => console.error(err))
}  

  return (
    <div> 
      <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc' }}> 
      {query.questionList.map((d, index) =>  
      <div> 
        <h2><p>""""""""""""""""""""""""""""""""""""""""""""""</p> {d.text}</h2>
       <TextField
       id="filled-full-width"
       style={{ margin: 80, width: 350 }}
       name="questions" 
       margin="dense"
       label="Vastaus"
       name="content"
       value={d.answers.content}
       onChange={inputChanged}
       fullWidth
     /> 
     <Button onClick={() => handleSave(index)} variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}>
            Tallenna
          </Button>
     </div>
      )}
    </Container>
          <Link to={"/"}>
          <Button color="primary">
            Back to frontpage
          </Button>
        </Link>


    </div>
  );
};

export default QuestionsByQuery;
