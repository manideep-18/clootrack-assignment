import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const CustomBar = (props) => {
  // console.log(props.randomColor, "???");
  const state = {
    labels: props.labelValues,
    datasets: [
      {
        backgroundColor:
          "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: props.data,
      },
    ],
  };

  return (
    <div>
      <h1>Bar</h1>
      <Bar
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
        height="80%"
      />
    </div>
  );
};
