import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/chart';
import GoogleMap from '../../components/google_map';
import {parseString} from 'xml2js';

class WeatherList extends Component {

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
          {this.props.books.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

export default WeatherList;
