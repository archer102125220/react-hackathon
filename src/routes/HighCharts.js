import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import { connect } from 'react-redux';
//https://github.com/jerairrest/react-chartjs-2


class HighCharts extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: '第一個資料列',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#4bc0c0'
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: '您的購買統計圖',
                    fontSize: 16
                },
                legend: {
                    position: 'bottom'
                }
            }
        };
        this.DataIni();
    }
    DataIni(){
        if (this.props.products[0] !== undefined && this.props.shoppingcars[0] !== undefined) {
            let { data } = this.state;
            const product = this.props.products[0].product;
            const shoppingcars = this.props.shoppingcars[0].cars;
            console.log(shoppingcars);
            data.labels = product.map((val) => val.homepage);
            this.setState({ data });
        }
    }
    render() {
        
        return (
            <div>
                <Chart type="bar" data={this.state.data} options={this.state.options} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ products: state.products, shoppingcars: state.cars });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HighCharts);
