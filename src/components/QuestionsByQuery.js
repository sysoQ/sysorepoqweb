import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';  
import SaveIcon from '@material-ui/icons/Save'; 
import { makeStyles } from '@material-ui/core/styles'; 
import Snackbar from '@material-ui/core/Snackbar'; 
import MuiAlert from '@material-ui/lab/Alert'; 
import Box from "@material-ui/core/Box"; 

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
})); 

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const QuestionsByQuery = (props) => {
  const [open, setOpen] = React.useState(false); 
  const [msg, setMsg] = React.useState("");
  const [query, setQuery] = React.useState({
    questionList: [],
  }); 
  const { id } = useParams(); 
  const [answer, setAnswer] = React.useState({
    content: ''
  }); 
  const [list, setList] = React.useState([]); 
  const classes = useStyles();  
  


  useEffect(() => {
    getQuery(id);
  }, []);

  /*
   const handleQuestions = () => { 
    const items = props.query.map((d) => <li key={d.text}></li>);
    setItems(items); 
  };*/

   // etsitään yksittäinen query
   const getQuery = (id) => {
    const element = props.queries.find((q) => q.id == id);
    setQuery(element)
  };  

  const openSnackBar = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputChanged = (event) => {
    setAnswer({...answer, [event.target.name]: event.target.value}); 
  } 

  // tallennusbuttonin click-funktio, index on vastattavan kysymyksen paikka kysymyslistassa
  const handleSave = (index) => {  
    setOpen(true);
    // tehdään tallennettava objekti json-muotoon
    /* vastauksen backendissä oletettu formaatti:
      {
        "content": "Käyn osa-aikaisesti", 
        "question": {
          "id":3
        }
      }*/ 
      const newAnswer = { 
      ...answer, content: answer.content, 
      question: {id: query.questionList[index].id}
      }; 
      addAnswer(newAnswer);  
    } 

    //Post new answer to answer endpoint
    const addAnswer = (newAnswer) => { 
      console.log("menin fetchiin");
      fetch('https://sysoquery.herokuapp.com/answer',  
      {
        method: 'POST', 
        body: JSON.stringify(newAnswer),   
        //newAnswer in JSON: '{"content": "Käyn juu","question": {"id":3}}',   
        headers: { 'Content-type' : 'application/json' }  
        
    })  
    .catch(err => console.error(err))
    }  


    switch(query.id) { 
        case 1:
          return (
            <div> 
              <Box textAlign='center'>
                  <Button variant="outlined" color="primary" href="/">
                    Back to frontpage
                  </Button> 
                </Box>
              <Container maxWidth="md" style={{  backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2017/11/18/09/42/concept-2959615_960_720.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}> 
              {//Loops all the questions from query 
              } 
                {query.questionList.map((d, index) =>  
                  <Container maxWidth="sm" style={{backgroundColor: "white", opacity: '90%' }}>
                  <div> 
                    <h2><p><br></br></p> {d.text}</h2>
                    <TextField
                      id="filled-full-width"
                      style={{ margin: 80, width: 350 }}
                      name="questions" 
                      margin="dense"
                      label="Kirjoita vastaus"
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
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                          Vastauksesi on tallennettu!
                        </Alert>
                    </Snackbar>
                  </div> 
                  </Container>
                )}
              </Container>    
              </div>
         
          ) 

          case 2:
          return (
            <div>  
              <Box textAlign='center'>
                  <Button variant="outlined" color="primary" href="/">
                    Back to frontpage
                  </Button> 
                </Box>
              <Container maxWidth="md" style={{ backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2018/06/07/16/38/blueberry-3460421_960_720.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' }}> 
              {//Loops all the questions from query 
              } 
                {query.questionList.map((d, index) =>   
                <Container maxWidth="sm" style={{backgroundColor: "white", opacity: '70%' }}>
                  <div> 
                    <h2><p><br></br></p> {d.text}</h2>
                    <TextField
                      id="filled-full-width"
                      style={{ margin: 80, width: 350 }}
                      name="questions" 
                      margin="dense"
                      label="Kirjoita vastaus"
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
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                          Vastauksesi on tallennettu!
                        </Alert>
                    </Snackbar>
                  </div> 
                  </Container>
                )}
              </Container>  
            </div>
          ) 

          default: 
          return (
            <div>  
            <Box textAlign='center'>
                  <Button variant="outlined" color="primary" href="/">
                    Back to frontpage
                  </Button> 
                </Box>
            <Container maxWidth="md" style={{ backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_960_720.jpg" + ")",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat' }}> 
            {//Loops all the questions from query 
            } 
              {query.questionList.map((d, index) =>   
              <Container maxWidth="sm" style={{backgroundColor: "white", opacity: '70%' }}>
                <div> 
                  <h2><p><br></br></p> {d.text}</h2>
                  <TextField
                    id="filled-full-width"
                    style={{ margin: 80, width: 350 }}
                    name="questions" 
                    margin="dense"
                    label="Kirjoita vastaus"
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
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                          Vastauksesi on tallennettu!
                        </Alert>
                    </Snackbar>
                </div> 
                </Container>
              )}
            </Container>  
          </div>
          )
    }
};

export default QuestionsByQuery;
