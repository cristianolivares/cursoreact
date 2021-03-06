import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';

const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={"Santiago de Cali"}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;