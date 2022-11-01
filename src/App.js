import React, { useEffect, useState } from 'react';

//Plotly charts
import BarChart from './BarChart';
import BubbleChart from './BubbleChart';
import PieCharts from './PieCharts';
import ScatteredChart from './ScatteredChart';

import axios from "axios"

const App = () => {
  const [instagramDailyInfluencerStats,setInstagramDailyInfluencerStats]=useState();
  // const [dates,setDates]=useState([]);
  useEffect(()=>{
    const fetchStats= async ()=>{
      const res = await axios.get("http://localhost:3500/stats");
      const instagramData=res.data;
      setInstagramDailyInfluencerStats(instagramData)
    }
    fetchStats()
  },[])
  console.log(instagramDailyInfluencerStats)
  let dates= []
  dates=instagramDailyInfluencerStats?.instagram?.timelineStats?.dailyInfluencers?.map((data,index)=>{
    // console.log(data.date.split('T')[0])
    return data.date.split('T')[0];
  })
  // console.log(dates)

  let dailyInfluencersTotal= []
  dailyInfluencersTotal = instagramDailyInfluencerStats?.instagram?.timelineStats?.dailyInfluencers?.map((data,index)=>{
    const influencersTotal= "influencers Total :"+data.influencersTotal
    console.log(influencersTotal)
    // return [...dailyInfluencersTotal,JSON.stringify(data.influencersTotal)]
  })




  
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
export default App;