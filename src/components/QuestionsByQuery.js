import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
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
  const [query, setQuery] = React.useState({
    questionList: [],
  });
  const { id } = useParams();
  const [answer, setAnswer] = React.useState({
    content: "",
  });
  const classes = useStyles();

  useEffect(() => {
    getQuery(id);
  }, []);

  const getQuery = (id) => {
    const element = props.queries.find((q) => q.id == id);
    setQuery(element);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inputChanged = (event) => {
    setAnswer({ ...answer, [event.target.name]: event.target.value });
  };

  const handleSave = (index) => {
    setOpen(true);
    // makes new object in json format
    const newAnswer = {
      ...answer,
      content: answer.content,
      question: { id: query.questionList[index].id },
    };
    addAnswer(newAnswer);
  };

  //Post new answer to answer endpoint
  const addAnswer = (newAnswer) => {
    fetch("https://sysoquery.herokuapp.com/answer", {
      method: "POST",
      body: JSON.stringify(newAnswer),
      //newAnswer in JSON: '{"content": "Käyn juu","question": {"id":3}}',
      headers: { "Content-type": "application/json" },
    }).catch((err) => console.error(err));
  };

  switch (query.id) {
    case 1:
      return (
        <div className="wrapper">
          <div
            className="background"
            style={{
              backgroundImage:
                "url(" +
                "https://cdn.pixabay.com/photo/2017/11/18/09/42/concept-2959615_960_720.jpg" +
                ")",
            }}
          ></div>
          <Container maxWidth="md">
            <Box className="card" textAlign="center">
              <Button variant="outlined" color="primary" href="/">
                Back to frontpage
              </Button>
            </Box>
            {
              //Loops all the questions from query
            }
            {query.questionList.map((d, index) => (
              <Container
                maxWidth="sm"
                style={{
                  backgroundColor: "rgba(255,255,255,0.9)",
                  marginTop: "16px",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                }}
              >
                <div>
                  <h2>{d.text}</h2>
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
                  <Button
                    onClick={() => handleSave(index)}
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                  >
                    Tallenna
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity="success">
                      Vastauksesi on tallennettu!
                    </Alert>
                  </Snackbar>
                </div>
              </Container>
            ))}
          </Container>
        </div>
      );

    case 2:
      return (
        <div className="wrapper">
          <div
            className="background"
            style={{
              backgroundImage:
                "url(" +
                "https://cdn.pixabay.com/photo/2016/11/22/22/04/float-1850828_960_720.jpg" +
                ")",
            }}
          ></div>
          <Container maxWidth="md">
            <Box className="card" textAlign="center">
              <Button variant="outlined" color="primary" href="/">
                Takaisin etusivulle
              </Button>
            </Box>
            {
              //Loops all the questions from query
            }
            {query.questionList.map((d, index) => (
              <Container
                maxWidth="sm"
                style={{
                  marginTop: "16px",
                  backgroundColor: "rgba(255,255,255,0.7)",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                }}
              >
                <div>
                  <h2>{d.text}</h2>
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
                  <Button
                    onClick={() => handleSave(index)}
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                  >
                    Tallenna
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity="success">
                      Vastauksesi on tallennettu!
                    </Alert>
                  </Snackbar>
                </div>
              </Container>
            ))}
          </Container>
        </div>
      );

    default:
      return (
        <div>
          <Box textAlign="center">
            <Button variant="outlined" color="primary" href="/">
              Takaisin etusivulle
            </Button>
          </Box>
          <Container
            maxWidth="md"
            style={{
              backgroundImage:
                "url(" +
                "https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476_960_720.jpg" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {
              //Loops all the questions from query
            }
            {query.questionList.map((d, index) => (
              <Container
                maxWidth="sm"
                style={{
                  marginTop: "16px",
                  backgroundColor: "rgba(255,255,255,0.7)",
                  opacity: "70%",
                  paddingTop: "16px",
                  paddingBottom: "16px",
                }}
              >
                <div>
                  <h2>{d.text}</h2>
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
                  <Button
                    onClick={() => handleSave(index)}
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                  >
                    Tallenna
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity="success">
                      Vastauksesi on tallennettu!
                    </Alert>
                  </Snackbar>
                </div>
              </Container>
            ))}
          </Container>
        </div>
      );
  }
};

export default QuestionsByQuery;
