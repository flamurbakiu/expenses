import React from "react";
import Chart from "../Chart/Chart";

function ExpenseChart(props) {
  const chartDataPoints = [
    { id: 1, label: "Jan", value: 0 },
    { id: 2, label: "Feb", value: 0 },
    { id: 3, label: "Mar", value: 0 },
    { id: 4, label: "Apr", value: 0 },
    { id: 5, label: "May", value: 0 },
    { id: 6, label: "Jun", value: 0 },
    { id: 7, label: "Jul", value: 0 },
    { id: 8, label: "Aug", value: 0 },
    { id: 9, label: "Sep", value: 0 },
    { id: 10, label: "Oct", value: 0 },
    { id: 11, label: "Nov", value: 0 },
    { id: 12, label: "Dec", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //start at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  console.log(chartDataPoints);

  return (
    <div>
      <Chart dataPoints={chartDataPoints} />
    </div>
  );
}

export default ExpenseChart;
