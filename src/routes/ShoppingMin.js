import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

class ShoppingMin extends Component {
    // 既然你要寫建構子，記得補上 props，否則會出問題
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <header className="jumbotron my-4 bg-deepbule">
                    <h1 className="display-3">歡迎來到Shopping！！</h1>
                    <p className="lead">拚好拚滿才4王道！</p>
                </header>
                <div className="row text-center">
                    {
                        (this.props.products.length > 0)
                            ? this.props.products[0].product.map((item, index) => {
                                return (<div key={index} className="col-lg-3 col-md-6 mb-4">
                                    <div className="card h-100">
                                        <img className="card-img-top" src={item.img} alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">{item.homepage}</h4>
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                        <div className="card-footer">
                                            <Link to={{ pathname: `/ShoppingProduct/${index}`, state: { index } }} className="btn btn-primary">產品詳情</Link>
                                        </div>
                                    </div>
                                </div>);
                            }) : <div className="col-lg-3 col-md-6 mb-4">
                                <div className="card h-100">
                                    <img className="card-img-top" src="" alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">&nbsp; &nbsp;</h4>
                                        <p className="card-text">&nbsp; &nbsp; &nbsp;</p>
                                    </div>
                                    <div className="card-footer">
                                        <button disabled className="btn btn-primary">產品詳情</button>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ products: state.products, cars: state.cars });
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingMin);