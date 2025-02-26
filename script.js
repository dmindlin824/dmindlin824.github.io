document.addEventListener("DOMContentLoaded", function() {
  // Initialize AOS for scroll animations
  AOS.init();

  // Smooth scrolling for nav links
  const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
  navAnchors.forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = anchor.getAttribute("href");
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        const headerOffset = 70;
        const elementPosition = targetElem.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    });
  });

  // 1) Sentiment Analysis on Kaggle Tweets
  if (document.getElementById("textAnalysisChart")) {
    const textTrace = {
      x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      y: [800, 1400, 2100, 3000, 3700, 4500],
      mode: "lines+markers",
      name: "Avg Sentiment Scores",
      line: { color: "#007AFF" }
    };
    Plotly.newPlot("textAnalysisChart", [textTrace], {
      title: "Monthly Average Sentiment (Example)",
      xaxis: { title: "Month" },
      yaxis: { title: "Sentiment Score" },
      paper_bgcolor: "#fff",
      plot_bgcolor: "#fff"
    });
  }

  // 2) Time Series Forecasting on Retail
  if (document.getElementById("forecastChart")) {
    const actualData = {
      x: ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5", "Wk6"],
      y: [2200, 2100, 2300, 2400, 2650, 2700],
      name: "Actual Sales",
      type: "bar",
      marker: { color: "#007AFF" }
    };
    const predictedData = {
      x: ["Wk1", "Wk2", "Wk3", "Wk4", "Wk5", "Wk6"],
      y: [2150, 2050, 2350, 2450, 2600, 2680],
      name: "Predicted Sales",
      type: "bar",
      marker: { color: "#34C759" }
    };
    Plotly.newPlot("forecastChart", [actualData, predictedData], {
      barmode: "group",
      title: "Actual vs. Predicted Retail Sales",
      xaxis: { title: "Week" },
      yaxis: { title: "Sales (Units)" },
      paper_bgcolor: "#fff",
      plot_bgcolor: "#fff"
    });
  }

  // 3) Customer Segmentation on E-Commerce Data
  if (document.getElementById("clusteringChart")) {
    const clusterA = {
      x: [30, 33, 35],
      y: [600, 620, 610],
      mode: "markers",
      name: "Cluster A",
      marker: { color: "#FF2D55", size: 12 }
    };
    const clusterB = {
      x: [50, 54, 56],
      y: [800, 820, 810],
      mode: "markers",
      name: "Cluster B",
      marker: { color: "#FF9500", size: 12 }
    };
    const clusterC = {
      x: [15, 18, 19],
      y: [350, 380, 365],
      mode: "markers",
      name: "Cluster C",
      marker: { color: "#5856D6", size: 12 }
    };
    Plotly.newPlot("clusteringChart", [clusterA, clusterB, clusterC], {
      title: "Customer Segments by Frequency & Spend",
      xaxis: { title: "Monthly Purchase Frequency" },
      yaxis: { title: "Avg Spend (USD)" },
      paper_bgcolor: "#fff",
      plot_bgcolor: "#fff"
    });
  }
});
