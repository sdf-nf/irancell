import React from "react";
import { Line } from "react-chartjs-2";
import YellowBgButton, { HeaderText } from "../../utils/Utility";
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

const tableData = [
  {
    expireDate: "۱۴ شهریور ۱۴۰۱",
    name: "بسته اینترنت ۳ماهه",
    discount: "20%",
    price: "130,000",
  },
  {
    expireDate: "۱۴ شهریور ۱۴۰۱",
    name: "بسته اینترنت ۳ماهه",
    discount: "20%",
    price: "130,000",
  },
  {
    expireDate: "۱۴ شهریور ۱۴۰۱",
    name: "بسته اینترنت ۳ماهه",
    discount: "20%",
    price: "130,000",
  },
];

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
      <section className="table-container">
        <HeaderText text={"بسته های پیشنهادی مخصوص خود شما!"} />
        <table dir="rtl">
          <tr>
            <th>تاریخ انقضا بسته</th>
            <th>نام بسته</th>
            <th>تخفیف</th>
            <th>قیمت</th>
            <th></th>
          </tr>
          {tableData.map((specialOffer, index) => {
            return (
              <tr className={index === tableData.length - 1 ? "no-border" : ""}>
                <td>{specialOffer.expireDate}</td>
                <td>{specialOffer.name}</td>
                <td>{specialOffer.discount}</td>
                <td>{specialOffer.price}</td>
                <td>
                  <YellowBgButton text={"خرید"} />
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </div>
  );
};
export default Body;
