import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
//https://github.com/jerairrest/react-chartjs-2

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: '第一個資料列',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: '#4bc0c0'
        },
        {
            label: '第二個資料列',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: '#565656'
        }
    ]
};

const options = {
    title: {
        display: true,
        text: '我4標題',
        fontSize: 16
    },
    legend: {
        position: 'bottom'
    }
};

class HighCharts extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
                <Chart type="line" data={data} options={options} />
            </div>
        );
    }
}

export default HighCharts;
