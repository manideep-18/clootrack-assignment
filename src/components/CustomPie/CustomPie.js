import React from "react";
import { Pie } from "react-chartjs-2";

export const CustomPie = (props) => {
  const state = {
    labels: props.labelValues,
    datasets: [
      {
        backgroundColor: props.backgroundColors,
        data: props.data,
      },
    ],
  };

  return (
    <div style={{ width: "475px" }}>
      <h1>Pie</h1>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
