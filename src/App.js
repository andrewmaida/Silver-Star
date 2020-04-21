import * as React from "react";
import { Component } from "react";
import MapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.8,
        longitude: -122.4,
        zoom: 2,
        bearing: 0,
        pitch: 0,
      }
    };
  }

  render() {
    return (
        test
    //   <MapGL
    //     {...this.state.viewport}
    //     width="100vw"
    //     height="100vh"
    //     mapStyle="mapbox://styles/agmaida1/ck98rcpom05ee1ilbwvkfuexv"
    //     onViewportChange={viewport => this.setState({ viewport })}
    //     mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    //   >
    //     <div style={navStyle}>
    //       <NavigationControl />
    //     </div>
    //   </MapGL>
    );
  }
}

export default App;
