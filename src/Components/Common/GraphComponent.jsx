import { Chart } from "chart.js";
export const DisplayCardGraph = ({ id, data, brColor, bgColor }) => {
  var ctx = document.getElementById(id).getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: id,
      datasets: [
        {
          label: id,
          data: data,
          fill: true,
          borderColor: brColor,
          backgroundColor: bgColor,
          tension: 0.5,
          steppedLine: false,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        xAxes: [
          {
            display: false,
            title: { display: false },
          },
        ],

        yAxes: [
          {
            display: false,
          },
        ],
      },
      plugins: {
        legend: { display: false },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  });

  return myChart;
};

export const GeneralGraphComponent = ({ id, type, datasets, xAxisLabels }) => {
  var ctx = document.getElementById(id).getContext("2d");
  var myChart = new Chart(ctx, {
    type: type ? type : "line",
    data: {
      labels: xAxisLabels,
      datasets: datasets,
    },
    options: {
      legend: { position: "bottom" },
      scales: {
        xAxes: [
          {
            display: false,
            title: { display: false },
          },
        ],

        yAxes: [
          {
            display: false,
          },
        ],
      },
      plugins: {
        legend: { display: true },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  });

  return myChart;
};
