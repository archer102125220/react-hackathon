import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

//https://github.com/google-map-react/google-map-react

class MapIcon extends Component {
  constructor(porps) {
    super(porps);
    this.state={
      index:porps.index,
      lat:porps.lat,
      lng:porps.lng,
      img:porps.img,
      alt:porps.alt,
    }
  }
  render() {
    return (<span>
      <img key={this.state.index} className="MapIcon" lat={this.state.lat} lng={this.state.lng} src={this.state.img} alt={this.state.lat} />
    </span>);
  }
}

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 23.7,
      lng: 121.5
    },
    zoom: 7.89
  };
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
      <span className="MapLitle">您購買的產品生產地</span>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD5g_QO7b1pBfgl9OtX6vchzZwX1Vmxo2Y" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {(this.props.shoppingcars.length > 0 && this.props.shoppingcars[0].cars.length > 0 ?
            this.props.shoppingcars[0].cars.map((val, index) => {
              return <MapIcon key={index} lat={val.lat} lng={val.lng} img={val.img} alt={val.homepage + " " + val.description} />
            })
            : <MapIcon lat={0} lng={0} />)
          }
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.products, shoppingcars: state.cars });
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMaps);