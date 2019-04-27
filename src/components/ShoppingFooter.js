import React, { Component } from 'react';

import { withTranslation } from 'react-i18next';

class ShoppingFooter extends Component {
  constructor(props) {
    super(props);
    //this.state={};
    this.t = props.t;
  }
  render() {
    return (
      <footer className="py-5 bg-blue">
      <div className="container">
        <p className="m-0 text-center text-white">{this.t("footer")}</p>
      </div>
    </footer>
    );
  }
}

export default withTranslation()(ShoppingFooter);
