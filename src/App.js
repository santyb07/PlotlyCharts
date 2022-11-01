import React from 'react';

import BarChart from './BarChart';
import BubbleChart from './BubbleChart';
import PieCharts from './PieCharts';
import ScatteredChart from './ScatteredChart';

class App extends React.Component {
  render() {
    return (
      <div className='charts'>
        <div>
          <h3>Barchart</h3>
          <BarChart/>
        </div>
        <div>
        <h3>Bubble chart</h3>
          <BubbleChart/>
        </div>
        <div>
        <h3>Pie chart</h3>
          <PieCharts/>
        </div>
        <div>
        <h3>Scattered chart</h3>
          <ScatteredChart/>
        </div>
      </div>
    );
  }
}
export default App;