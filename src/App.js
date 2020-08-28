import React, { Component } from 'react';
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";

import { connect } from 'react-redux';
// import { addProduct, addCar } from './actions';
import models from './models';

//import $ from 'jquery';

import './App.css';
import Services from './services/Services';
import ShoppingMin from './routes/ShoppingMin';
import ShoppingHeader from './components/ShoppingHeader';
import ShoppingFooter from './components/ShoppingFooter';
import ShoppingCharBot from './components/ShoppingCharBot';
import Product from './routes/Product';
import ShoppingCar from './routes/ShoppingCar';
import HighCharts from './routes/HighCharts';
import GoogleMaps from './routes/GoogleMaps';

const { addProduct, addCar } = models;


class App extends Component {
  constructor() {
    super();
    this.state = {
      Router: '',
    };
    this.GetData('https://www.onlinetool.in/api/products/');
  }

  SetStates = (Name, Val, Back = () => { }) => {
    this.setState({ [Name]: Val }, () => {
      Back(this.state[Name]);
    });
  }

  GetData = async (Url) => {
    let Product = await Services.Get(Url);
    if (typeof (Product) != undefined) {
      Product[0].img = "https://banner2.kisspng.com/20180728/tju/kisspng-google-logo-business-microsoft-windows-operating-system-5b5cb99e99ca38.3321008115328034866299.jpg";
      Product[1].img = "https://www.logolynx.com/images/logolynx/9e/9e6c6731c20171e33c59e98a41ee56f6.jpeg";
      Product[2].img = "http://www.amanida.com/wp-content/uploads/2018/04/amazon-logo-a-smile-black.png";
      Product[3].img = "https://collegian.com/wp-content/uploads/2019/02/51J6cQ63OJL.png";
      Product[0].amount = 240;
      Product[1].amount = 190;
      Product[2].amount = 255;
      Product[3].amount = 300;
      Product[0].lat = 25;
      Product[0].lng = 121;
      Product[1].lat = 25.3;
      Product[1].lng = 121.5;
      Product[2].lat = 23;
      Product[2].lng = 121.1;
      Product[3].lat = 24.2;
      Product[3].lng = 120.6;
      this.props.addProduct(Product);
      this.setState({ Product: this.props.products[0].product });
      window.localStorage.setItem("Shoppingcar", (window.localStorage.getItem("Shoppingcar") == null) ? '[]' : window.localStorage.getItem("Shoppingcar"));
      this.props.addCar(window.localStorage.getItem("Shoppingcar") === "[]" ? [] : JSON.parse(window.localStorage.getItem("Shoppingcar")));
    }
  }

  render() {
    return (
      <HashRouter>
          <ShoppingHeader />
          <Route path="/" exact render={(props) => <ShoppingMin {...props} />} />
          <Route path="/ShoppingProduct" render={(props) => <Product {...props} setstates={this.SetStates} />} />
          <Route path="/ShoppingCar" render={(props) => <ShoppingCar {...props} setstates={this.SetStates} />} />
          <Route path="/ShoppingCharBot" render={(props) => <ShoppingCharBot {...props} />} />
          <Route path="/HighCharts" render={(props) => <HighCharts {...props} />} />
          <Route path="/GoogleMaps" render={(props) => <GoogleMaps {...props} />} />
          <ShoppingFooter />
      </HashRouter>
    );
  }
}


const mapStateToProps = (state) => {
  return ({
    products: state.products,
    Shoppingcars: state.cars
  });
};
const mapDispatchToProps = (dispatch) => {
  return ({
    addProduct: (item) => dispatch(addProduct(item)),
    addCar: (item) => dispatch(addCar(item))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
