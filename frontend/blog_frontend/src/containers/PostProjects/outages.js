import React from "react/";
//import createReactClass from "create-react-class";

// Pond
import { TimeSeries, TimeRangeEvent, TimeRange } from "pondjs";
import { Charts, ChartContainer, ChartRow, EventChart, Resizable } from "react-timeseries-charts";
// Imports from the charts library

//
// Test data
//

const projectEventsDCExit = [
    {
        startTime: "2019-11-25T09:00:00Z",
        endTime: "2020-01-08T14:00:00Z",
        title: "UAT Preparation",
        description: "Preparation activities for Testing",
        status: "Completed",
        RAGx: "Green"
    },
    {
        startTime: "2020-01-09T03:30:00Z",
        endTime: "2020-04-10T16:50:00Z",
        title: "UAT Execution",
        description: "UAT Testcase Execution",
        status: "InProgess",
        RAGx: "Green"
    },
    {
        startTime: "2020-04-11T03:30:00Z",
        endTime: "2020-07-05T13:00:00Z",
        description: "Project Support",
        title: "Project Support",
        status: "YetToStart",
        RAGx: ''
    }
];

const projectEventsNOCC = [
    {
        startTime: "2019-11-26T09:00:00Z",
        endTime: "2019-12-20T14:00:00Z",
        title: "Requirement Gathering",
        description: "Project Requirements gathering",
        status: "Completed",
        RAGx: "Green"
    },
    {
        startTime: "2019-12-21T03:30:00Z",
        endTime: "2020-03-15T16:50:00Z",
        title: "Solution Design",
        description: "Design activities",
        status: "Completed",
        RAGx: "Green"
    },
    {
        startTime: "2020-03-16T03:30:00Z",
        endTime: "2020-05-08T13:00:00Z",
        description: "Development Phase",
        title: "Coding and Unit Testing",
        status: "InProgess",
        RAGx: "Red"
    },
    {
        startTime: "2020-05-09T03:30:00Z",
        endTime: "2020-08-08T13:00:00Z",
        description: "Development Phase",
        title: "Coding and Unit Testing",
        status: "YetToStart",
        RAGx: ""
    }
];
//
// Turn data into TimeSeries
//

let events = projectEventsDCExit.map(
    ({ startTime, endTime, ...data }) =>
        new TimeRangeEvent(new TimeRange(new Date(startTime), new Date(endTime)), data)
);
const seriesDCExit = new TimeSeries({ name: "outages", events });

events = projectEventsNOCC.map(
    ({ startTime, endTime, ...data }) =>
        new TimeRangeEvent(new TimeRange(new Date(startTime), new Date(endTime)), data)
);

const seriesNOCC = new TimeSeries( { name: "outages", events } );

//
// Render event chart
//

function outageEventStyleFunc(event, state) {
    let color = null;
    if(event.get("status") === "Completed"){
        color = "#264653";
    } else if(event.get("status") === "InProgess"){

        if(event.get("RAGx") === "Red"){
            color = "#d62828";
        }else if(event.get("RAGx") === "Amber"){
            color = "#f77f00";
        }else{
            color = "#2a9d8f";
        }

    }else{
        color = "#8D99AE";
    }
    switch (state) {
        case "normal":
            return {
                fill: color
            };
        case "hover":
            return {
                fill: color,
                opacity: 0.4
            };
        case "selected":
            return {
                fill: color
            };
        default:
        //pass
    }
}

export default class Outages extends React.Component{
    constructor() {
      super()
      this.state ={
          tracker: null,
          timerange: seriesDCExit.timerange()
      }
      this.handleTrackerChanged = this.handleTrackerChanged.bind(this)
      this.handleTimeRangeChange = this.handleTimeRangeChange.bind(this)
    }
    handleTrackerChanged(tracker) {
        this.setState({ tracker });
    }
    handleTimeRangeChange(timerange) {
        this.setState({ timerange });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div claOutagesssName="col-md-12">
                        <Resizable>
                            <ChartContainer
                                timeRange={this.state.timerange}
                                enablePanZoom={true}
                                onTimeRangeChanged={this.handleTimeRangeChange}
                            >
                                <ChartRow height="30">
                                    <Charts>
                                        <EventChart
                                            series={seriesDCExit}
                                            size={45}
                                            style={outageEventStyleFunc}
                                            label={e => e.get("title")}
                                        />

                                    </Charts>
                                </ChartRow>
                                <ChartRow height="30">
                                    <Charts>
                                        <EventChart
                                            series={seriesNOCC}
                                            visible={true}
                                            size={45}
                                            style={outageEventStyleFunc}
                                            label={e => e.get("title")}
                                        />

                                    </Charts>
                                </ChartRow>
                            </ChartContainer>
                        </Resizable>

                    </div>
                </div>
            </div>
        );
    }
};

// Export example
//export default Outages;
