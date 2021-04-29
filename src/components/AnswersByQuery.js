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

return (
    <div>  
         <Link to={"/"}>
         <Box textAlign='center'>
          <Button variant="outlined" color="secondary">
            Back to frontpage
          </Button> 
          </Box>
        </Link>  
        <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc' }}> 
            {query.questionList.map((d, index) => 
            <div><h2>{d.text}</h2> 
                {d.answers.map((a, index) =>   
                    <div> {index +1}. {a.content}  
                    <p></p>
                    </div> 
                )} 
                <p>±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±±</p>
            </div>
            )}  
        </Container>
    </div>
)

} 

export default AnswersByQuery; 

