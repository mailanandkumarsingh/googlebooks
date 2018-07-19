import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/chart';
import GoogleMap from '../../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    if (cityData) {
      const name = cityData.city.name;
      const temps = cityData.list.map(weather => weather.main.temp - 273);
      const { lon, lat } = cityData.city.coord;
      console.log(`what is lon ${lon} and lat${lat}`);
      return (
        <tr key={name}>
          <td><GoogleMap lon={lon} lat={lat} /></td>
          <td><Chart data={ temps } /></td>
        </tr>
      );
    }
    
  }

  render() {
    return (
      <table className="table table-hover" id="mapTable">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (ºC)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

export default WeatherList;
