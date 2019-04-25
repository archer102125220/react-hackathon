import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

//https://github.com/google-map-react/google-map-react

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD5g_QO7b1pBfgl9OtX6vchzZwX1Vmxo2Y" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="很礙眼ㄅ((笑"
          />
        </GoogleMapReact>
      </div>
    );
  }
}


export default GoogleMaps;