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
                   lineWidth: 2
               }]
           }
        };
    }
    componentDidMount() {
        this.updateDataGraph(myData);
    }

    updateDataGraph = (data) => {
        console.log(data);
        const seriesL = data.map( line => ({
            lineWidth: 2,
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
    };

    render() {
        return (
            <div>
                <input
                    type="file"
                    id="input"
                    onChange={e => {
                        console.log(e.target.files);
                        const fileReader = new FileReader();
                        fileReader.onloadend = (e) => {
                            const content = fileReader.result;
                            console.log("obj", JSON.parse(content.toString()));
                            this.updateDataGraph(JSON.parse(content.toString()))
                        };
                        fileReader.readAsText(e.target.files[0]);
                    }}
                />
                <HighchartsReact
                    highcharts={Highcharts}
                    options={this.state.options}
                />
            </div>
        );
    }
}

export default App;
