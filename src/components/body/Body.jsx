import React from "react";
import { Line } from "react-chartjs-2";
import { HeaderText } from "../../utils/Utility";
import "./../../assets/styles/Body.css";

export const Body = () => {
  return (
    <div>
      <section className="chart-container">
        <HeaderText text={"نمودار میزان مصرف کل"} />
      </section>
      <section></section>
    </div>
  );
};
export default Body;
