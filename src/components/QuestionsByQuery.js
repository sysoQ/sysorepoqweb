import React from "react";  
import { Link } from "react-router-dom";  
import Table from 'react-bootstrap/Table';  
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'; 
import ListIcon from '@material-ui/icons/List'; 
import IconButton from '@material-ui/core/IconButton';


const QuestionsByQuery = (props) => {  
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState({
    questionList: ''
  });  
  const [listItems, setItems] = React.useState([]);

  const handleClickOpen = () => { 
    setQuery({
      questionList: props.query.questionList
    });
    setOpen(true); 
    }; 

    const handleClose = () => {
      setOpen(false);
    }; 

   /* const handleQuestions = () => { 
      const items = props.query.map((d) => <li key={d.text}></li>);
      setItems(items); 
    };*/

    return (
      <div>
      <IconButton color="primary" onClick={handleClickOpen}>
      <ListIcon/>
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="customized-dialog-title" 
      >
        <DialogTitle id="customized-dialog-title">All questions</DialogTitle>
        <DialogContent dividers>
           <TextField 
           id="filled-full-width"
           style={{ margin: 80, width: 300 }}
            name="questions"
            value={props.query.questionList[0].text}

          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default QuestionsByQuery;
