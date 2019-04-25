import React, { Component } from 'react';

class ShoppingFooter extends Component {
  constructor() {
    super();
    this.state={};
  }
  render() {
    return (
      <footer className="py-5 bg-blue">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
      </div>
    </footer>
    );
  }
}

export default ShoppingFooter;
