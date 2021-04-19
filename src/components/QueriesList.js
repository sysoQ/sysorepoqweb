import React, { useState, useEffect } from "react"   
import { AgGridReact } from 'ag-grid-react'; 
import { Iconbutton, Snackbar as SnackBar } from '@material-ui/core';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import QuestionsByQuery from "./QuestionsByQuery"


function QueriesList() { 
  const [queries, setQueries] = useState([]) 
  const [msg, setMsg] = useState("")
  const [open, setOpen] = useState(false)
  
  
  useEffect(() => {
    fetchQueries();
  }, []) 

  const openSnackBar = () => { 
    setOpen(true);
} 

  const closeSnackbar = () => {
    setOpen(false)
  } 

  const fetchQueries = () => { 
    fetch("https://sysoquery.herokuapp.com/queries")
      .then((response) => response.json())
      .then(data => setQueries(data))
      .catch(err => console.log(err))
  }

  const columns = [ 
    { field: 'name', sortable: true}, 
    
   {
        headerName: 'Show questions', 
        field: 'id',  
        width: 150,
        cellRendererFramework: params => <QuestionsByQuery link={params.value} query={params.data}  />
   }
]
  return ( 
    <div>
        <div className="ag-theme-material" style={{ height: 600, width: '80%', margin: 'auto' }}>
            <AgGridReact 
                rowData={queries} 
                columnDefs={columns}  
                pagination={true} 
                paginationPageSize={8} 
                floatingFilter={true} 
                suppressCellSelection={true}
                
            />
        </div>   
         <SnackBar
          open={open}
          autoHideDuration={5000}
          onClose={closeSnackbar}
          message={msg}
         />  
        </div>
      )

} 
export default QueriesList;
