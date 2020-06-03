import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { EventTracker, HoverState } from '@devexpress/dx-react-chart';


const data = [
  { day: '04/22', posts: 5.2},
  { day: '04/23', posts: 10},
  { day: '04/24', posts: 15},
  { day: '04/25', posts: 9},
  { day: '04/26', posts: 6.6},
  { day: '04/27', posts: 12},
  { day: '04/28', posts: 10},
];


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
          // width={400}
          height={200}
        >

          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            valueField="posts"
            argumentField="day"
            color="#44C5BB"
            barWidth="0.3"
          />



          <EventTracker />
          <HoverState />
        </Chart>
      </Paper>
    );
  }
}
