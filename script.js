document.addEventListener("DOMContentLoaded", function() {
  // Initialize AOS (Animate On Scroll)
  AOS.init();

  /**************************************************************************/
  /* Project 1: Sentiment Analysis on 1.6 Million Tweets                    */
  /**************************************************************************/
  if (document.getElementById('textAnalysisChart')) {
    // Time labels (e.g., months or other intervals)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    // Average sentiment from -1 to +1
    const avgSentiment = [-0.2, -0.05, 0.1, 0.08, 0.15, 0.3];
    // Retweet volume or total engagement
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
    // X-axis (months or time intervals)
    const months2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    // Actual sales for multiple categories
    const catA_actual = [2100, 2400, 2800, 2600, 3100, 3400];
    const catB_actual = [700, 750, 900, 850, 980, 1100];
    const catC_actual = [1300, 1400, 1500, 1550, 1600, 1800];

    // Predicted sales
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
    // Five distinct clusters, each with a color-coded group
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
    // Example temperature readings
    const temperatureData = [68, 70, 72, 76, 85, 92];
    // Example vibration readings
    const vibrationData = [0.05, 0.2, 0.1, 0.5, 1.0, 1.3];

    // Threshold lines
    const tempUpperThreshold = [80, 80, 80, 80, 80, 80];
    const tempLowerThreshold = [60, 60, 60, 60, 60, 60];
    const vibUpperThreshold = [0.6, 0.6, 0.6, 0.6, 0.6, 0.6];

    // Temperature trace
    const tempTrace = {
      x: timeStamps,
      y: temperatureData,
      name: "Temperature (°F)",
      mode: "lines+markers",
      yaxis: 'y1',
      line: { color: "#007AFF" }
    };

    // Vibration trace
    const vibTrace = {
      x: timeStamps,
      y: vibrationData,
      name: "Vibration (G-Force)",
      mode: "lines+markers",
      yaxis: 'y2',
      line: { color: "#FF2D55" }
    };

    // Temperature thresholds
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

    // Vibration threshold
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
});
