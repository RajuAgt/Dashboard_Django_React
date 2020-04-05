import React from 'react';
//import ShowcaseButton from '../showcase-components/showcase-button';
import {
  XYPlot,
  HorizontalBarSeries, WhiskerSeries,
} from 'react-vis';

export default class Timeline extends React.Component {

  render() {
    const myData = [
      {x: 1, y: 50, xVariance: 40, yVariance: 2},

      {x: 3, y: 15, xVariance: 10, yVariance: 2},

    ];

    return (
      <div>
      <XYPlot height={80} width={300}
        stackBy="x"
        xDomain={[ 0, 50]}
        yDomain={[ 0, 2]}
        >
        <HorizontalBarSeries
          cluster="stack 1"
          data={[
            { x: 10, y: 0 },
          ]}
          style={{}}
        />
        <HorizontalBarSeries
          cluster="stack 1"
          data={[
            {x: 10, y: 0 },
          ]}
          style={{}}
        />
        <HorizontalBarSeries
          cluster="stack 1"
          data={[
            { x: 10, y: 0 },
          ]}
          style={{}}
        />
        <HorizontalBarSeries
          cluster="stack 1"
          data={[
            {x: 10, y: 0 },
          ]}
          style={{}}
        />
        </XYPlot>

        <XYPlot height={80} width={300}
          stackBy="x"
          xDomain={[ 0, 50]}
          yDomain={[ 0, 2]}
          >
          <HorizontalBarSeries
            cluster="stack 1"
            data={[
              { x: 10, y: 0 },
            ]}
            style={{}}
          />
          <HorizontalBarSeries
            cluster="stack 1"
            data={[
              {x: 10, y: 0 },
            ]}
            style={{}}
          />
          <HorizontalBarSeries
            cluster="stack 1"
            data={[
              { x: 10, y: 0 },
            ]}
            style={{}}
          />
          <HorizontalBarSeries
            cluster="stack 1"
            data={[
              {x: 10, y: 0 },
            ]}
            style={{}}
          />
          </XYPlot>

      </div>
    );
  }
}
