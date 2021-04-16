import React from "react"  
import { Link } from "react-router-dom"  
import Table from 'react-bootstrap/Table'; 

const QuestionsByQuery = ({ data }) => { 
    return (
        <div> 
            <Table striped bordered hover variant="dark"> 
            <tbody>
            <tr><th>Questions</th></tr> 
              { 
                data.map((query, index) => 
                  <tr key={index}> 
                        <td>{query.questionList[0]}</td>
                  </tr>
                ) 
             }  
          </tbody>
          </Table>
        </div>
      )

} 
export default QuestionsByQuery;
