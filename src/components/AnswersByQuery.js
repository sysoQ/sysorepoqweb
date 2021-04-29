import React from "react";
import { useEffect } from "react"; 
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
        {query.questionList.map((d, index) => 
            <div><h2>{d.text}</h2> 
                {d.answers.map((a, index) =>   
                <div>{a.content}</div>
                )}
            </div>
        )}
        <Link to={"/"}>
          <Button color="primary">
            Cancel
          </Button>
        </Link>
    </div>
)

} 

export default AnswersByQuery; 

