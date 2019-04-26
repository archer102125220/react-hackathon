import React, { Component } from 'react';
//import PropTypes from 'prop-types'; // →用以驗證資料

/*
import { connect } from 'react-redux';//引用react-redux的資料請求函式
import { removeCar } from '../actions';//引用actions裡面index.js所自定義的函式
*/

import { Link } from "react-router-dom";

import HomeIcon from "../icon/house.png";
import Cart from "../icon/commerce-and-shopping.png";
import CharBot from "../icon/bot2.png";
import Charts from "../icon/stadistics.png";
import Map from "../icon/map2.png";

class ShoppingHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    /*
    //Provider(使用redux時候的最上層)將從請求回來的資料從props裡取出來
    const { product, removeCar } = this.props;
    console.log('1',product);*/
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-blue fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">Shopping！ping！ping！ping！</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  <img className="Icon" src={HomeIcon} alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to={{ pathname: "/ShoppingCar" }} className="nav-link">
                  <img className="Icon" src={Cart} alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to={{ pathname: "/ShoppingCharBot" }} className="nav-link">
                  <img className="Icon" src={CharBot} alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to={{ pathname: "/HighCharts" }} className="nav-link">
                  <img className="Icon" src={Charts} alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to={{ pathname: "/GoogleMaps" }} className="nav-link">
                  <img className="Icon" src={Map} alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

/*
//prop-types的資料驗證方式
ShoppingHeader.propTypes = {
  product: PropTypes.func.isRequired,//驗證product資料是否為function
}
*/

/*
//用mapStateToProps跟mapDispatchToProps從Provider(使用redux時候的最上層)取得資料&函式
//../App.js有下兩個涵式的詳細版
const mapStateToProps = (state) => ({ product: state.products });
const mapDispatchToProps = (dispatch) => ({ removeCar: (id) => dispatch(removeCar(id)) });
*/

/*
//資料驗證
ShoppingHeader.defaultProps = {
  product:[],
}
*/

//透過connect()執行資料請求，第一個必為請求資料，第二個必為請求函式
export default /*connect(mapStateToProps, mapDispatchToProps)*/(ShoppingHeader);
