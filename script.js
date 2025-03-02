document.addEventListener("DOMContentLoaded", function() {
  // Initialize AOS for scroll animations
  AOS.init();

  /**************************************************************************/
  /* Project 1: Sentiment Analysis on 1.6 Million Tweets                    */
  /**************************************************************************/
  if (document.getElementById('textAnalysisChart')) {
    // X-axis intervals (e.g., months)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    // Average sentiment from -1 (very negative) to +1 (very positive)
    const avgSentiment = [-0.2, -0.05, 0.1, 0.08, 0.15, 0.3];
    // Engagement measure, e.g. retweets or shares
    const retweetVolume = [120000, 140000, 180000, 160000, 220000, 280000];

    const sentimentTrace = {
      x: months,
      y: avgSentiment,
      name: "Avg Sentiment",
      mode: "lines+markers",
      yaxis: 'y1',
      line: { color: "#007AFF" }
    };

    const retweetTrace = {
      x: months,
      y: retweetVolume,
      name: "Retweet Volume",
      mode: "lines+markers",
      yaxis: 'y2',
      line: { color: "#FF2D55" }
    };

    const layoutSent = {
      title: "Monthly Sentiment & Retweet Volume",
      xaxis: { title: "Month" },
      yaxis: {
        title: "Sentiment Score (-1 to +1)",
        range: [-1, 1]
      },
      yaxis2: {
        title: "Retweet Count",
        overlaying: 'y',
        side: 'right'
      },
      paper_bgcolor: "#fff",
      plot_bgcolor: "#fff"
    };

    Plotly.newPlot('textAnalysisChart', [sentimentTrace, retweetTrace], layoutSent);
  }

  /**************************************************************************/
  /* Project 2: Time Series Forecasting for Retail Demand                  */
  /**************************************************************************/
  if (document.getElementById('forecastChart')) {
    // X-axis intervals (e.g., months)
    const months2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    // Actual monthly sales for multiple categories
    const catA_actual = [2100, 2400, 2800, 2600, 3100, 3400];
    const catB_actual = [700, 750, 900, 850, 980, 1100];
    const catC_actual = [1300, 1400, 1500, 1550, 1600, 1800];

    // Predicted monthly sales
    const catA_pred = [2000, 2350, 2700, 2650, 3000, 3300];
    const catB_pred = [680, 730, 850, 800, 950, 1070];
    const catC_pred = [1250, 1380, 1480, 1530, 1590, 1750];

    // Confidence band for Category A
    const catA_upper = [2200, 2500, 2900, 2800, 3200, 3500];
    const catA_lower = [1900, 2250, 2600, 2500, 2900, 3200];

    const catA_ActualTrace = {
      x: months2,
      y: catA_actual,
      name: "Cat A Actual",
      mode: "lines+markers",
      line: { color: "#007AFF" }
    };
    const catA_PredTrace = {
      x: months2,
      y: catA_pred,
      name: "Cat A Forecast",
      mode: "lines+markers",
      line: { color: "#34C759" }
    };
    const catA_UpperTrace = {
      x: months2,
      y: catA_upper,
      fill: null,
      mode: "lines",
      line: { color: "rgba(52,199,89,0.3)", width: 0 },
      showlegend: false
    };
    const catA_LowerTrace = {
      x: months2,
      y: catA_lower,
      fill: 'tonexty',
      fillcolor: "rgba(52,199,89,0.1)",
      mode: "lines",
      line: { color: "rgba(52,199,89,0.3)", width: 0 },
      name: "Cat A Confidence"
    };

    const catB_ActualTrace = {
      x: months2,
      y: catB_actual,
      name: "Cat B Actual",
      mode: "lines+markers",
      line: { color: "#FF9500" }
    };
    const catB_PredTrace = {
      x: months2,
      y: catB_pred,
      name: "Cat B Forecast",
      mode: "lines+markers",
      line: { color: "rgba(255,149,0,0.7)" }
    };

    const catC_ActualTrace = {
      x: months2,
      y: catC_actual,
      name: "Cat C Actual",
      mode: "lines+markers",
      line: { color: "#5856D6" }
    };
    const catC_PredTrace = {
      x: months2,
      y: catC_pred,
      name: "Cat C Forecast",
      mode: "lines+markers",
      line: { color: "rgba(88,86,214,0.7)" }
    };

    const layoutForecast = {
      title: "Actual vs. Forecasted Monthly Sales (Multiple Categories)",
      xaxis: { title: "Month" },
      yaxis: { title: "Sales (Units)" },
      paper_bgcolor: "#fff",
      plot_bgcolor: "#fff"
    };

    Plotly.newPlot('forecastChart', [
      catA_UpperTrace,
      catA_LowerTrace,
      catA_ActualTrace,
      catA_PredTrace,
      catB_ActualTrace,
      catB_PredTrace,
      catC_ActualTrace,
      catC_PredTrace
    ], layoutForecast);
  }

  /**************************************************************************/
  /* Project 3: Advanced Customer Segmentation in E-Commerce               */
  /**************************************************************************/
  if (document.getElementById('clusteringChart')) {
    // Five distinct clusters, each color-coded
    const clusterA = {
      x: [10, 11, 12, 9],
      y: [60, 65, 58, 68],
      mode: "markers",
      name: "Cluster A: Low-Freq, Low-Spend",
      marker: { color: "#FF2D55", size: 10 }
    };
    const clusterB = {
      x: [22, 25, 24, 27],
      y: [150, 140, 155, 160],
      mode: "markers",
      name: "Cluster B: Med-Freq, Mid-Spend",
      marker: { color: "#FF9500", size: 10 }
    };
    const clusterC = {
      x: [35, 38, 36, 37],
      y: [250, 260, 240, 270],
      mode: "markers",
      name: "Cluster C: Mid-Freq, High-Spend",
      marker: { color: "#007AFF", size: 10 }
    };
    const clusterD = {
      x: [45, 42, 47, 44],
      y: [400, 410, 420, 390],
      mode: "markers",
      name: "Cluster D: High-Freq, Mid-Spend",
      marker: { color: "#34C759", size: 10 }
    };
    const clusterE = {
      x: [60, 63, 58, 65],
      y: [700, 680, 720, 740],
      mode: "markers",
      name: "Cluster E: High-Freq, High-Spend",
      marker: { color: "#5856D6", size: 10 }
    };

    const layoutClust = {
      title: "Five-Cluster Distribution by Frequency & Avg Spend",
      xaxis: { title: "Avg Monthly Purchases" },
      yaxis: { title: "Avg Order Value (USD)" },
      paper_bgcolor: "#fff",
      plot_bgcolor: "#fff"
    };

    Plotly.newPlot('clusteringChart', [clusterA, clusterB, clusterC, clusterD, clusterE], layoutClust);
  }

  /**************************************************************************/
  /* Project 4: Real-Time IoT Anomaly Detection                            */
  /**************************************************************************/
  if (document.getElementById('iotAnomalyChart')) {
    const timeStamps = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00"];
    // Example sensor readings
    const temperatureData = [68, 70, 72, 76, 85, 92];
    const vibrationData = [0.05, 0.2, 0.1, 0.5, 1.0, 1.3];

    // Threshold lines
    const tempUpperThreshold = [80, 80, 80, 80, 80, 80];
    const tempLowerThreshold = [60, 60, 60, 60, 60, 60];
    const vibUpperThreshold = [0.6, 0.6, 0.6, 0.6, 0.6, 0.6];

    const tempTrace = {
      x: timeStamps,
      y: temperatureData,
      name: "Temperature (°F)",
      mode: "lines+markers",
      yaxis: 'y1',
      line: { color: "#007AFF" }
    };

    const vibTrace = {
      x: timeStamps,
      y: vibrationData,
      name: "Vibration (G-Force)",
      mode: "lines+markers",
      yaxis: 'y2',
      line: { color: "#FF2D55" }
    };

    const tempUpperTrace = {
      x: timeStamps,
      y: tempUpperThreshold,
      mode: "lines",
      name: "Temp Upper Limit",
      yaxis: 'y1',
      line: { dash: 'dash', color: "rgba(0,122,255,0.5)" }
    };
    const tempLowerTrace = {
      x: timeStamps,
      y: tempLowerThreshold,
      mode: "lines",
      name: "Temp Lower Limit",
      yaxis: 'y1',
      line: { dash: 'dash', color: "rgba(0,122,255,0.5)" }
    };
    const vibThresholdTrace = {
      x: timeStamps,
      y: vibUpperThreshold,
      mode: "lines",
      name: "Vib Upper Limit",
      yaxis: 'y2',
      line: { dash: 'dash', color: "rgba(255,45,85,0.5)" }
    };

    const layoutIoT = {
      title: "Temperature & Vibration (Anomaly Detection)",
      xaxis: { title: "Time of Day" },
      yaxis: {
        title: "Temperature (°F)",
        range: [50, 100]
      },
      yaxis2: {
        title: "Vibration (G-Force)",
        overlaying: 'y',
        side: 'right',
        range: [0, 1.5]
      },
      paper_bgcolor: "#fff",
      plot_bgcolor: "#fff"
    };

    Plotly.newPlot('iotAnomalyChart', [
      tempTrace,
      vibTrace,
      tempUpperTrace,
      tempLowerTrace,
      vibThresholdTrace
    ], layoutIoT);
  }

  /**************************************************************************/
  /* Project 5: Credit Card Fraud Detection                                */
  /**************************************************************************/
  if (document.getElementById('fraudChart')) {
    // Confusion matrix: row=actual, col=pred
    const confusionMatrix = [
      [980,  20],  // actual legit: predicted legit=980, predicted fraud=20
      [ 15,  85]   // actual fraud: predicted legit=15, predicted fraud=85
    ];

    const matrixTrace = {
      z: confusionMatrix,
      x: ["Pred: Legit", "Pred: Fraud"],
      y: ["Act: Legit", "Act: Fraud"],
      type: "heatmap",
      colorscale: "Greens",
      showscale: true
    };

    // Example ROC curve data
    const fprValues = [0, 0.01, 0.03, 0.1, 0.2, 1];
    const tprValues = [0, 0.8, 0.9, 0.93, 0.97, 1];

    const rocTrace = {
      x: fprValues,
      y: tprValues,
      mode: "lines+markers",
      name: "ROC Curve",
      line: { color: "#FF2D55" }
    };

    // Diagonal reference line
    const diagonalTrace = {
      x: [0,1],
      y: [0,1],
      mode: "lines",
      name: "Random (AUC=0.5)",
      line: { dash: 'dash', color: "#666" }
    };

    const layoutFraud = {
      title: "Fraud Detection: Confusion Matrix & ROC Curve",
      grid: { rows: 1, columns: 2, pattern: "independent" },
      paper_bgcolor: "#fff",
      plot_bgcolor: "#fff"
    };

    // Confusion Matrix as Subplot 1
    const trace1 = { 
      ...matrixTrace, 
      xaxis: "x", 
      yaxis: "y" 
    };
    // ROC Curve as Subplot 2
    const trace2 = { 
      ...rocTrace, 
      xaxis: "x2", 
      yaxis: "y2" 
    };
    const trace3 = {
      ...diagonalTrace, 
      xaxis: "x2", 
      yaxis: "y2"
    };

    Plotly.newPlot('fraudChart', [trace1, trace2, trace3], {
      ...layoutFraud,
      xaxis: {domain: [0, 0.45], title: "Predicted Class"},
      yaxis: {domain: [0, 1], title: "Actual Class"},
      xaxis2: {domain: [0.55, 1], title: "False Positive Rate"},
      yaxis2: {domain: [0, 1], title: "True Positive Rate"}
    });
  }
});
