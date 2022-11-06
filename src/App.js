import React, { useEffect, useState } from 'react'

import BubbleChart from './BubbleChart';

import axios from "axios"

const App = () => {
  const [instagramDailyInfluencerStats,setInstagramDailyInfluencerStats]=useState();

  useEffect(()=>{
    const fetchStats= async ()=>{
      const res = await axios.get("http://localhost:3500/stats");
      const instagramData=res.data;
      setInstagramDailyInfluencerStats(instagramData)
    }
    fetchStats()
  },[])

  // console.log(instagramDailyInfluencerStats)
  let instagramDailyInfluencersDate= []
  instagramDailyInfluencersDate=instagramDailyInfluencerStats?.instagram?.timelineStats?.dailyInfluencers?.map((data,index)=>{
    // console.log(data.date.split('T')[0])
    return data.date.split('T')[0];
  })

  let sortedInstagramDailyInfluencersDate=[]
  sortedInstagramDailyInfluencersDate=instagramDailyInfluencersDate?.reverse()
  // console.log(sortedInstagramDailyInfluencersDate)

  let instagramDailyInfluencersTotal= []
  instagramDailyInfluencersTotal = instagramDailyInfluencerStats?.instagram?.timelineStats?.dailyInfluencers?.map((data,index)=>{
    // const influencersTotal= "influencers Total :"+data.influencersTotal
    // console.log(influencersTotal)
    return data.influencersTotal;
  })
  let instagramDailyPositiveInfluencers= [];
  instagramDailyPositiveInfluencers = instagramDailyInfluencerStats?.instagram?.timelineStats?.dailyInfluencers?.map((data,index)=>{
    // const positiveInfluencers="Positive influencers Total :"+data.positiveInfluencersTotal
    // console.log(positiveInfluencers)
    return data.positiveInfluencersTotal
  })
  let instagramDailyNegativeInfluencers= [];
  instagramDailyNegativeInfluencers = instagramDailyInfluencerStats?.instagram?.timelineStats?.dailyInfluencers?.map((data,index)=>{
    // const negativeInfluencers="Negative influencers Total :"+data.negativeInfluencersTotal
    // console.log(negativeInfluencers)
    return data.negativeInfluencersTotal
  })

  let instagramDailyNeutralInfluencers= [];
  instagramDailyNeutralInfluencers = instagramDailyInfluencerStats?.instagram?.timelineStats?.dailyInfluencers?.map((data,index)=>{
    // const neutralInfluencers="Neutral influencers Total :"+data.neutralInfluencersTotal
    // console.log(neutralInfluencers)
    return data.neutralInfluencersTotal
  })

  // console.log("total:",instagramDailyInfluencersTotal)
  // console.log("positive:",instagramDailyPositiveInfluencers)
  // console.log("neutral:",instagramDailyNegativeInfluencers)
  // console.log("negative:",instagramDailyNeutralInfluencers)
  // console.log(dates)

  const sortedInstagramDailyInfluencersStats = {
    sortedInstagramDailyInfluencersDate,
    instagramDailyInfluencersTotal,
    instagramDailyPositiveInfluencers,
    instagramDailyNegativeInfluencers,
    instagramDailyNeutralInfluencers,
  }
// console.log(sortedInstagramDailyInfluencersStats)



  
    return (
      <div style={{width:'100%',height:'100%'}}>
        <BubbleChart sortedInstagramDailyInfluencersStats={sortedInstagramDailyInfluencersStats}/>
      </div>

    );
  
}
export default App;