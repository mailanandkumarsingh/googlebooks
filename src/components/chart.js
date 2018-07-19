import _ from 'lodash';
import React from 'react';
import { BarChart } from 'react-d3';

const barDataNeeded = (data) => {
  if (data.length > 8) {
    return [
      { 
        "name": "Series A",
        "values": [
          { "x": 'Day 1', "y":  data[0]},
          { "x": 'Day 2', "y":  data[8]},
          { "x": 'Day 3', "y":  data[16]},
          { "x": 'Day 4', "y":  data[24]},
          { "x": 'Day 5', "y":  data[32]},
        ]
      },
    ];
  } else {
    return [
      { 
        "name": "Series A",
        "values": [
          { "x": 'Day 1', "y":  data[0]},
        ]
      },
    ];
  }
  
};


export default (props) => {
  const barData = barDataNeeded(props.data);

  return (
    <div>
      <BarChart
        data={barData}
        width={350}
        height={250}
        fill={'#3182bd'}
        //title='Bar Chart'
        yAxisLabel='Temperature'
        //xAxisLabel='Day'
      />
    </div>
  );
}
