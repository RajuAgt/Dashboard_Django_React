import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChart extends Component {
		constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const options = {
			animationEnabled: true,
			colorSet: "colorSet1",
			title: {
				text: ""
			},
			axisX: {
        title: "Week of CUT Plan",
				prefix: "W",
				interval: 1
			},
			axisY: {
        title: "CUT Progress",
				includeZero: false,
				suffix: "%"
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries,
				verticalAlign: "top"
			},
			data: [{
				type: "line",
				name: "Planned Completion",
				showInLegend: true,
				dataPoints: [
					{ x: 1, y: 3 },
					{ x: 2, y: 11 },
					{ x: 3, y: 23 },
					{ x: 4, y: 29 },
					{ x: 5, y: 38 },
					{ x: 6, y: 43 },
					{ x: 7, y: 59 },
					{ x: 8, y: 72 },
					{ x: 9, y: 83 },
					{ x: 10, y: 94 },
					{ x: 11, y: 98 },
					{ x: 12, y: 100 }
				]
			},{
				type: "line",
				name: "Actual Completion",
				showInLegend: true,
				dataPoints: [
          { x: 1, y: 1 },
					{ x: 2, y: 4 },
					{ x: 3, y: 15 },
					{ x: 4, y: 24 },
					{ x: 5, y: 35 },
					{ x: 6, y: 38 },
					{ x: 7, y: 43 },
					{ x: 8, y: 68 },
					{ x: 9, y: 84 },
					{ x: 10, y: 92 },
					{ x: 11, y: 100 },
					{ x: 12, y: 100 }
				]
			}]
		}

		return (
		<div>
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default LineChart;
