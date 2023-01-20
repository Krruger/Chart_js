import Chart from "chart.js/auto";
// import config from './config.js'
// import data from './data.js'
// import "hammerjs";
// import zoomPlugin from "chartjs-plugin-zoom";
import data from "./data.js";

// Chart.register(zoomPlugin);
window.onload = function () {
  // console.log(data["x"]);
  // const x = data["x"];

  var myChart = new Chart(document.getElementById("acquisitions"), {
    type: "line",
    data: {
      labels: x,
      datasets: [],
    },
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      stacked: true,
      elements: {
        rectangle: {
          borderWidth: 0,
          borderSkipped: "bottom",
        },
      },

      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
              speed: 0.3,
            },
            pinch: {
              enabled: true,
            },
            drag: {
              enabled: false,
            },
            mode: "x",
          },
          pan: {
            enabled: true,
            threshold: 5,
            modifierKey: null,
            mode: "x",
          },
        },
      },
    },
  });
  const d = data;
  const datasetValue = [];

  for (const [key, value] of Object.entries(d["signal"])) {
    datasetValue[key] = {
      label: d["signal"][key]["name"],
      data: d["signal"][key]["y"],
      // borderColor: "red",
      // fill: false,
    };
    myChart.config.data.datasets.push(datasetValue[key]);
  }
  myChart.update();
};

// "build": "parcel build public/index.html --public-url ./"
