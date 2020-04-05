// Post List For Homepage

import React, { Component } from "react";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, HorizontalBarSeries, LineSeries} from 'react-vis';

import AxiosInstance from "../../AxiosInstance";
import Spinner from "../../components/UI/Spinner/Spinner";
import cssClass from "./PostProjects.css";
import Timeline from "./timeline"
import Outages from "./outages"
import Dashboard from "./../MaterialUI/Dashboard"

class PostList extends Component {
    state = {
        posts: null,
        loading: true
    };

    componentWillMount() {
        AxiosInstance.get("posts/")
            .then(response =>
                this.setState({ posts: response.data, loading: false })
            )
            .catch(err => console.log("Error From PostList.js", err));
    }

    render() {

        return (
          <div>
          <Dashboard/>
            </div>
          )
    }
}

export default PostList;
