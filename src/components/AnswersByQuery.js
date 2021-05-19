import React from "react";
import { useEffect } from "react"; 
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button"; 
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'; 
import Box from "@material-ui/core/Box"; 


const AnswersByQuery = (props) => { 
    const [query, setQuery] = React.useState({
        questionList: [],
      });   

    const { id } = useParams(); 

    useEffect(() => {
        getQuery(id);
    }, []); 

    const getQuery = (id) => {
        const element = props.queries.find((q) => q.id == id);
        setQuery(element)
    }; 

    //set different background picture for different queries
    switch(query.id) { 
        case 1:
          return (
            <div>  
                <Box textAlign='center'>
                  <Button variant="outlined" color="primary" href="/">
                    Back to frontpage
                  </Button> 
                </Box>
              <Container maxWidth="md" style={{ backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2017/11/18/09/42/concept-2959615_960_720.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' }}>  
                <Container maxWidth="sm" style={{backgroundColor: "white", opacity: '90%' }}>
                {query.questionList.map((d, index) => 
                  <div><h2>{d.text}</h2> 
                    {d.answers.map((a, index) =>   
                      <div> {index +1}. {a.content}  
                        <p></p>
                      </div> 
                    )} 
                  </div>
                )}   
                </Container>
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
              <Container maxWidth="md" style={{ backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2016/11/22/22/04/float-1850828_960_720.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat' }}>  
                <Container maxWidth="sm" style={{backgroundColor: "white", opacity: '70%' }}>
                 {query.questionList.map((d, index) => 
                  <div><h2>{d.text}</h2> 
                    {d.answers.map((a, index) =>   
                      <div> {index +1}. {a.content}  
                        <p></p>
                      </div> 
                    )} 
                  </div>
                )}   
                </Container>
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
              <Container maxWidth="sm" style={{backgroundColor: "white", opacity: '70%' }}>
               {query.questionList.map((d, index) => 
                <div><h2>{d.text}</h2> 
                  {d.answers.map((a, index) =>   
                    <div> {index +1}. {a.content}  
                      <p></p>
                    </div> 
                  )} 
                </div>
              )}   
              </Container>
            </Container>
         </div>
          )
       }
} 

export default AnswersByQuery; 

