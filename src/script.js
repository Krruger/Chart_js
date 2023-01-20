// var ctx = document.getElementById("myChart");

// var stars = [135850, 52122, 148825, 16939, 9763];
// var frameworks = ["React", "Angular", "Vue", "Hyperapp", "Omi"];
// // console.log(config)
// var myChart = new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: frameworks,
//     datasets: [
//       {
//         label: "Github Stars",
//         data: stars,
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//         borderColor: "rgba(255, 99, 132, 1)",
//         borderWidth: 1
//       }
//     ]
//   }
// });
import config from './config.js'
import Chart from '../node_modules/chart.js/auto'
(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
  console.log(config)

  new Chart(
    document.getElementById('script'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();


      // "dev": "parcel src/index.html",
      // "build": "parcel build src/index.html "