import React from 'react'
import Plot from 'react-plotly.js';

const BubbleChart = (props) => {

  // console.log(props.sortedInstagramDailyInfluencersStats.instagramDailyNegativeInfluencers)


  let instagramDailyNeutralInfluencersText= [];
  instagramDailyNeutralInfluencersText = props?.sortedInstagramDailyInfluencersStats?.instagramDailyNeutralInfluencers?.map((value,index)=>{
    const neutralInfluencersText="Neutral influencers Total :"+ value
    // console.log(neutralInfluencersText)
    return neutralInfluencersText
  })

  let instagramDailyNegativeInfluencersText= [];
  instagramDailyNegativeInfluencersText = props?.sortedInstagramDailyInfluencersStats?.instagramDailyNegativeInfluencers?.map((value,index)=>{
    const negativeInfluencers="Negative influencers Total :"+value
    // console.log(negativeInfluencers)
    return negativeInfluencers
  })

  let instagramDailyPositiveInfluencersText= [];
  instagramDailyPositiveInfluencersText = props?.sortedInstagramDailyInfluencersStats?.instagramDailyPositiveInfluencers?.map((value,index)=>{
    const negativeInfluencers="Positive influencers Total :"+value
    // console.log(negativeInfluencers)
    return negativeInfluencers
  })

  //*******************BUBBLE COLOR FOR INFLUENCERS*******************
  let bubblePositiveInfluencersColor=[]
  bubblePositiveInfluencersColor = props?.sortedInstagramDailyInfluencersStats?.sortedInstagramDailyInfluencersDate?.map((value)=>{
    return "rgb(44, 160, 101)";
  });
  // console.log(bubblePositiveInfluencersColor)

  let bubbleNegativeInfluencersColor=[]
  bubbleNegativeInfluencersColor = props?.sortedInstagramDailyInfluencersStats?.sortedInstagramDailyInfluencersDate?.map((value)=>{
    return "rgb(255, 65, 54)";
  });
  // console.log(bubbleNegativeInfluencersColor)

  let bubbleNeutralInfluencersColor=[]
  bubbleNeutralInfluencersColor = props?.sortedInstagramDailyInfluencersStats?.sortedInstagramDailyInfluencersDate?.map((value)=>{
    return "rgb(255, 144, 14)";
  });
  // console.log(bubbleNeutralInfluencersColor)

  //*******************BUBBLE SIZE FOR INFLUENCERS*******************
  let bubbleSize= []
  bubbleSize = props?.sortedInstagramDailyInfluencersStats?.instagramDailyPositiveInfluencers?.map((value,index)=>{
    return 200;
  });
  
  let positiveInfluencersBubbleSize = [];
  positiveInfluencersBubbleSize = props?.sortedInstagramDailyInfluencersStats?.instagramDailyPositiveInfluencers?.map((value,index)=>{
    return value*100;
  });

  let negativeInfluencersBubbleSize = [];
  negativeInfluencersBubbleSize = props?.sortedInstagramDailyInfluencersStats?.instagramDailyNegativeInfluencers?.map((value,index)=>{
    if(value===0){
      return 100;
    }else{
      return value*200;
    }
  });

  let neutralInfluencersBubbleSize = [];
  neutralInfluencersBubbleSize = props?.sortedInstagramDailyInfluencersStats?.instagramDailyNeutralInfluencers?.map((value,index)=>{
    return value*100;
  });
  // console.log(negativeInfluencersBubbleSize)
    
  var  negativeInfluencersData= {
    x: props.sortedInstagramDailyInfluencersStats.sortedInstagramDailyInfluencersDate,
    y: props.sortedInstagramDailyInfluencersStats.instagramDailyNegativeInfluencers,
    text: instagramDailyNegativeInfluencersText,
    mode: 'markers',
    name: 'Negative Influencers',
    marker: {
      color:bubbleNegativeInfluencersColor,
      size: negativeInfluencersBubbleSize,
      sizemode: 'area'
    }
  };
  
  var neutralInfluencersData = {
    x: props.sortedInstagramDailyInfluencersStats.sortedInstagramDailyInfluencersDate,
    y: props.sortedInstagramDailyInfluencersStats.instagramDailyNeutralInfluencers,
    text: instagramDailyNeutralInfluencersText,
    name: 'neutral Influencers',
    mode: 'markers',
    marker: {
      color:bubbleNeutralInfluencersColor,
      size: neutralInfluencersBubbleSize,
      // sizeref: 0.2,
      sizemode: 'area'
    }
  };
  
  var positiveInfluencersData = {
    x: props.sortedInstagramDailyInfluencersStats.sortedInstagramDailyInfluencersDate,
    y: props.sortedInstagramDailyInfluencersStats.instagramDailyPositiveInfluencers,    
    text: instagramDailyPositiveInfluencersText,
    mode: 'markers',
    name: 'Positive Influencers',
    marker: {
      color:bubblePositiveInfluencersColor,
      size:positiveInfluencersBubbleSize,
      // sizeref: 1,
      sizemode: 'area'
    }
  };
  
  var data = [negativeInfluencersData, neutralInfluencersData, positiveInfluencersData];
  
  var layout = {
    title: 'Instagram Daily Influencers Stats',
    showlegend:true,
    height: 800,
    width: 800
  };
  return (
    <Plot
    data={data}
    layout={layout}
    />
  )
}

export default BubbleChart