import React, {Component} from 'react';

import {RadialChart} from 'react-vis';

export default class ProjectStatus extends Component {

  render() {

    return (

              <RadialChart colorType={'literal'} colorDomain={[0, 100]} colorRange={[0, 10]}
              data={[
                {angle: 8, color: '#2a9d8f', name: '8'},
                {angle: 2, color: '#f77f00', name: '3'},
                {angle: 1, color: '#d62828', name: '1'},
              ]}
              labelsRadiusMultiplier={1.1}
              style={{stroke: '#fff', strokeWidth:0}} width={63}
              height={48}
              />

    );
  }
}
