import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

import { aggregateDates } from '../../api/aggregateData';

class DateAdded extends Component {
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
        const dateArray = aggregateDates(this.props.playlistItems, true);
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
            xAxisDate[i] = new Date(dateArray[i].date);
            yAxisNumTracks[i] = dateArray[i].tracksAdded;

        }

        var chartData = {
            labels: xAxisDate,

            datasets: [
                {
                    label: 'Tracks Added',
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
        //console.log(this.state.data.labels);
        //console.log(this.state.data.labels.length);
        
		
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
                                    source: 'auto',
                                },
                                barPercentage: Math.pow(Math.log10(this.state.data.labels.length), 1.5)
                            }],
                            yAxes: [{
                                ticks: {
                                    autoSkip: true,
                                    beginAtZero: true,
                                }
                            }],
                        },
                        dataset: {
                            barPercentage: 4
                        },
                        layout: {
                            padding: {
                                right: 20,
                                left: 10
                            }
                        }
                    }}
                />
			</Container>
		);
	}
}


export default DateAdded;