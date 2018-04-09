import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      back_color_data: true,
      back_color_weather: true
    };
    this.changeColorData = this.changeColorData.bind(this);
    this.changeColorWeather = this.changeColorWeather.bind(this);
  }
  changeColorData() {
    this.setState({
      back_color_data: false,
      back_color_weather: true,
    });
  }
  changeColorWeather() {
    this.setState({
      back_color_data: true,
      back_color_weather: false,
    });
  }
  render() {
    let bgColorData = this.state.back_color_data ? "white" : "#E7EBFF";
    let bgColorWeather = this.state.back_color_weather ? "white" : "#E7EBFF";
    return (
      <div className="App">
        <div className="container">
          <div
            style={{ backgroundColor: bgColorData }}
            onClick={this.changeColorData}
          >
            <p className="Data">Data Analysis</p>
          </div>
          <div
            style={{ backgroundColor: bgColorWeather }}
            onClick={this.changeColorWeather}
          >
            <p className="Weather">Today Weather</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
