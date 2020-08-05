import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

import { aggregateDates } from '../../api/aggregateData';

class ReleaseDate extends Component {
    constructor() {
        super();

        this.state = {
            redraw: true,
            data: {
                labels: [],
                datasets: []
            }
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.playlistItems !== this.props.playlistItems) {
            this.fetchData();
        }
    }

    fetchData = () => {
        const dateArray = aggregateDates(this.props.playlistItems, false);
        //console.log(dateArray);
        this.parseDateArray(dateArray);
    }

    parseDateArray = (dateArray) => {
        //console.log(dateArray);
        var xAxisDate = [];
        var yAxisNumTracks = [];

        dateArray.sort();

        for (var i = 0; i < dateArray.length; i++) {
            //console.log(dateArray[i]);
            xAxisDate[i] = new Date(0).setFullYear(dateArray[i].date);
            yAxisNumTracks[i] = dateArray[i].tracksAdded;

        }

        var chartData = {
            labels: xAxisDate,

            datasets: [
                {
                    label: 'Track Release Year',
                    data: yAxisNumTracks,
                    backgroundColor: '#0074d9'
                }
            ] 
        }

        //console.log(chartData);

        this.setState({ data: chartData });
    }

	render() {
        //console.log(this.state.data);
		
		return (
			<Container>
                <Bar
                    data = {this.state.data}
                    width={300}
                    height={300}
                    redraw={this.state.redraw}
                    options={{ 
                        maintainAspectRatio: false,
                        distribution: 'series',
                        scales: {
                            xAxes: [{
                                type: 'time',
                                time: {
                                    unit: 'year'
                                },
                                bounds: 'data',
                                ticks: {
                                    source: 'labels',
                                    autoSkip: true,
                                    autoSkipPadding: 5,
                                    minRotation: (this.state.data.labels.length < 10) ? 0 : 45,
                                    padding: 5
                                },
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                }
                            }],
                        },
                        layout: {
                            padding: {
                                right: 20,
                                left: 10,
                                bottom: 15
                            }
                        }
                    }}
                />
			</Container>
		);
	}
}


export default ReleaseDate;