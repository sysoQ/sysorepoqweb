import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { IconButton, Button, Snackbar as SnackBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import QuestionsByQuery from "./QuestionsByQuery";
import Container from "@material-ui/core/Container";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Box from "@material-ui/core/Box";
import ShowChart from "./ShowChart";

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
      headerName: "Kysymykset",
      field: "id",
      width: 200,
      cellRendererFramework: (params) => (
        <Link to={"/queries/" + params.value}>
          <IconButton link={params.value} query={params.data} color="primary">
            <HelpOutlineIcon />
          </IconButton>
        </Link>
      ),
    },

    {
      headerName: "Vastaukset",
      field: "id",
      width: 200,
      cellRendererFramework: (params) => (
        <Link to={"/question/" + params.value}>
          <IconButton link={params.value} query={params.data} color="primary">
            <FormatListNumberedIcon />
          </IconButton>
        </Link>
      ),
    },
  ];

  return (
    <div className="wrapper">
      <div
        className="background"
        style={{
          backgroundImage:
            "url(" +
            "https://cdn.pixabay.com/photo/2015/10/26/03/44/marble-1006628_960_720.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Container maxWidth="md">
        <div className="card">
          <h2>Katso tästä kaikki kyselymme!</h2>
          <div
            className="ag-theme-material"
            style={{ width: "100%", margin: "auto" }}
          >
            <AgGridReact
              rowData={props.queries}
              columnDefs={columns}
              pagination={false}
              paginationPageSize={8}
              suppressCellSelection={true}
              domLayout="autoHeight"
            />
          </div>
          <ShowChart queries={props} />

          <SnackBar
            open={open}
            autoHideDuration={5000}
            onClose={closeSnackbar}
            message={msg}
          />
        </div>
      </Container>
    </div>
  );
};
export default QueriesList;
