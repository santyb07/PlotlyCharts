import React from 'react'
import Plot from 'react-plotly.js';

const PieCharts = () => {
    var data = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };      
  return (
  <Plot
    data={data}
    layout={layout}
    />  )
}

export default PieCharts