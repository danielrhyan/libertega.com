var ctx = document.getElementById("durbinCostBD").getContext("2d");
var costBreakdownChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Property Cost", "Construction Cost", "Agent Fee", "Profit"],
    datasets: [
      {
        //label: "Cost Breakdown",
        data: [49830.03, 78928.73, 11820.0, 56421.24], // Example data
        backgroundColor: ["#7eb0d5", "#11818c", "#80dce8", "#64b76a"],
        borderColor: ["#7eb0d5", "#11818c", "#80dce8", "#64b76a"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: false,
      animateRotate: false,
    },
  },
});

var ctx = document.getElementById("durbinProfitBD").getContext("2d");
var costBreakdownChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Property Cost", "Construction Cost", "Other Cost"],
    datasets: [
      {
        label: "Cost Breakdown",
        data: [300000, 500000, 200000], // Example data
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: false,
      animateRotate: false,
    },
  },
});
