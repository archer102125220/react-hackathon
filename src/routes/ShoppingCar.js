import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
// import { addCar } from '../actions';
import models from '../models';
const { addCar } = models;

class ShoppingCar extends Component {
    constructor() {
        super();
        this.state = {};
    }

    UpdataProps(name, val) {
        window.localStorage.setItem(name, JSON.stringify(val));
        this.props.setstates(name, val);
        this.props.addCar(val);
    }

    render() {
        const shoppingcar = (this.props.Shoppingcars.length > 0) ? this.props.Shoppingcars[0].cars : undefined;
        let total = 0;
        if (typeof (shoppingcar) != 'undefined' && this.props.Shoppingcars[0].cars != null && shoppingcar.length > 0) {
            shoppingcar.map((val) => total += val.amount);
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <button className="list-group-item active" onClick={(e) => { this.props.history.go(-1) }}>返回上一頁</button>
                        <h1 className="my-4">
                            我的購物車<br />
                            <small>當前總金額：${total}</small><br />
                            {
                                (typeof (shoppingcar) != 'undefined' && this.props.Shoppingcars[0].cars != null && shoppingcar.length > 0) ? <Link to="/ShoppingCar" className="btn btn-primary" onClick={(e) => {
                                    this.UpdataProps("Shoppingcar", []);
                                }}>清空購物車</Link> : <button disabled className="btn btn-primary">清空購物車</button>
                            }
                        </h1>
                        {
                            (typeof (shoppingcar) != 'undefined' && this.props.Shoppingcars[0].cars != null && shoppingcar.length > 0)
                                ? shoppingcar.map((val, index) =>
                                    <div key={index} className="card mb-4">
                                        <img className="card-img-top img-fluid" src={val.img} alt="" />
                                        <div className="card-body">
                                            <h2 className="card-title">{val.homepage}</h2>
                                            <p className="card-text">{val.description}</p>
                                        </div>
                                        <div className="card-footer text-muted">
                                            <Link to="/ShoppingCar" className="btn btn-primary" onClick={(e) => {
                                                /*let ItemArry = new Set((this.props.Shoppingcars.length < 0) ? [] : this.props.Shoppingcars[0].cars);
                                                ItemArry.delete(this.props.Shoppingcars[0].cars[index]);*/
                                                let ItemArry = (this.props.Shoppingcars.length < 0) ? [] : this.props.Shoppingcars[0].cars;
                                                ItemArry = ItemArry.filter((val,key) => key !== index && val.id !== undefined);
                                                this.UpdataProps("Shoppingcar", ItemArry);
                                            }}>從購物車移除</Link>
                                        </div>
                                    </div>)
                                : <div className="card mb-4">
                                    <img className="card-img-top" src="http://placehold.it/750x300" alt="" />
                                    <div className="card-body">
                                        <h2 className="card-title">&nbsp;</h2>
                                        <p className="card-text">購物車裡面沒有資料</p>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <button disabled className="btn btn-primary">從購物車移除</button>
                                    </div>
                                </div>
                        }
                        {/*
                            <ul className="pagination justify-content-center mb-4">
                            <li className="page-item">
                                <Link className="page-link" to="#">&larr; Older</Link>
                            </li>
                            <li className="page-item disabled">
                                <Link className="page-link" to="#">Newer &rarr;</Link>
                            </li>
                            </ul>
                        */}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ products: state.products, Shoppingcars: state.cars });
const mapDispatchToProps = (dispatch) => ({ addCar: (item) => dispatch(addCar(item)) });

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCar);
