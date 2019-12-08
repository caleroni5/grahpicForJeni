import React, {Component} from 'react';
import './App.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import myData from './data.json';

class App extends Component {
    constructor(props) {
       super(props);
       this.state = {
           options: {
               chart: {
                   zoomType: 'x'
               },
               title: {
                   text: 'My Graphic'
               },
               series: [{
                   data: [[1,1], [2,2], [3,2]],
                   lineWidth: 0.5
               }]
           }
        };
    }
    componentDidMount() {
        console.log(myData);
        var seriesL = myData.map( line => ({
            lineWidth: 0.5,
            name: line.name,
            data: line.points.map( point => [Number(point.x), Number(point.y)] )
        }) );
        console.log(seriesL);
        this.setState({
            options: {
                chart: {
                    zoomType: 'x'
                },
                title: {
                    text: 'My Graphic'
                },
                series: seriesL
            }
        })
        // Подписаться на оповещения
    }
    render() {
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={this.state.options}
                />
            </div>
        );
    }
}

export default App;
