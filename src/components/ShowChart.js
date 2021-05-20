import React, { useState } from "react";
import Chart from "react-google-charts";
import IconButton from "@material-ui/core/IconButton";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import _ from "lodash";

const ShowChart = ({ queries }) => {
  const [open, setOpen] = useState(false);
  const [results, setResult] = useState([]);

  const groupObjects = () => {
    //use lodash function groupBy and group queries by names
    const data = _(queries.queries)
      .groupBy("name")
      .map((names, n) => {
        return {
          name: n,
          questionList: names[0].questionList.length,
        };
      })
      .value();
    setResult(data);
  };

  const handleClickOpen = () => {
    setOpen(true);
    groupObjects();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getQueryData = (data) => {
    //set query name ja questionList length in array by reduce function for Chart data
    return data.reduce(
      (acc, item) => {
        const { name, questionList } = item;

        return [...acc, [name, questionList]];
      },
      [["Kyselyn nimi", "Kysymysten määrä"]]
    );
  };

  return (
    <>
      <IconButton
        variant="outlined"
        color="primary"
        onClick={() => handleClickOpen()}
      >
        <AddCircleTwoToneIcon /> Näytä tilastotietoja
      </IconButton>
      <Dialog
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="form-dialog-title"
      >
        {queries.queries.length > 0 ? (
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="BarChart"
            loader={<div>Ladataan kuvaa</div>}
            data={getQueryData(results)}
            options={{
              title: "Kyselyt kysymyksittäin",
              chartArea: { width: "50%" },
              hAxis: {
                title: "Kysymysten maara",
                minValue: 0,
              },
              vAxis: {
                title: "Kysely",
              },
            }}
            // For tests
            rootProps={{ "data-testid": "1" }}
          />
        ) : (
          <p>Ladataan..</p>
        )}
        <Button onClick={() => handleClose()} color="primary">
          Sulje
        </Button>
      </Dialog>
    </>
  );
};

export default ShowChart;
