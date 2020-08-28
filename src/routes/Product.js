import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
// import { addCar } from '../actions';
import models from '../models';
const { addCar } = models;

class Product extends Component {
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
    if (!this.props.location.state) return <Redirect to="/" />;
    const { homepage, img, description, amount } = (this.props.products.length > 0) ? this.props.products[0].product[this.props.location.state.index] : '';
    const ProductIndex = (this.props.products.length > 0) ? this.props.location.state.index : true;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <button className="list-group-item active" onClick={(e) => { this.props.history.go(-1) }}>返回上一頁</button>
            <h1 className="my-4">{homepage}</h1>
          </div>
          <div className="col-lg-9">
            <div className="card mt-4">
              <img className="card-img-top img-fluid" src={img} alt="" />
              <div className="card-body">
                <h3 className="card-title">{description}</h3>
                <h4>${amount}</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                4.0 stars
              </div>
            </div>
            <div className="card card-outline-secondary my-4">
              <div className="card-header">
                產品介紹
              </div>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                <hr />
                {(ProductIndex === true)
                  ? <button className="btn btn-success" disabled>加入購物車</button>
                  : <Link to="/ShoppingCar" className="btn btn-success" onClick={(e) => {
                    /*let ItemArry = new Set((this.props.shoppingcars > 0) ? [] : this.props.shoppingcars[0].cars);
                    ItemArry.add(this.props.products[0].product[this.props.location.state.index]);*/
                    let ItemArry = (this.props.shoppingcars > 0) ? [] : this.props.shoppingcars[0].cars;
                    ItemArry.push(this.props.products[0].product[this.props.location.state.index]);
                    ItemArry = ItemArry.filter((val) => val.id !== undefined);
                    this.UpdataProps('Shoppingcar', ItemArry);
                  }}>加入購物車</Link>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.products, shoppingcars: state.cars });
const mapDispatchToProps = (dispatch) => ({ addCar: (item) => dispatch(addCar(item)) });

export default connect(mapStateToProps, mapDispatchToProps)(Product);
