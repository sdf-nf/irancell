import React from "react";
import { Line } from "react-chartjs-2";
import { HeaderText } from "../../utils/Utility";
import "./../../assets/styles/Body.css";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);

const state = {
  labels: ["7/1", "7/8", "7/25", "7/30", "8/5"],
  datasets: [
    {
      label: "",
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(179,207,0,0.5)",
      borderColor: "yellow",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

export const Body = () => {
  return (
    <div>
      <section className="chart-container">
        <HeaderText text={"نمودار میزان مصرف کل"} />
        <Line
          data={state}
          options={{
            legend: {
              display: true,
            },
          }}
        />
      </section>
      <section></section>
    </div>
  );
};
export default Body;
