import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { Iconbutton, Button, Snackbar as SnackBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import QuestionsByQuery from "./QuestionsByQuery";

const QueriesList = (props) => {
  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);

  const openSnackBar = () => {
    setOpen(true);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  const columns = [
    { field: "name", sortable: true, headerName: "Kysely" },

    {
      headerName: "Show questions",
      field: "id",
      width: 200,
      cellRendererFramework: (params) => (
        <Link to={"/queries/" + params.value}>
          <Button link={params.value} query={params.data} color="primary">
            Click {params.value} 
          </Button> 
        </Link>  
      ), 

    }, 
    
  ]; 
  
  return (
    <div
      className="ag-theme-material"
      style={{ height: 600, width: "80%", margin: "auto" }}
    >
      <AgGridReact
        rowData={props.queries}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={8}
        floatingFilter={true}
        suppressCellSelection={true}
      />
      <SnackBar
        open={open}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        message={msg}
      />
    </div>
  );
};
export default QueriesList;
