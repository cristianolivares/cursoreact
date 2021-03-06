import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import {
    SUN, 
   } from '../../../constants/Weathers';

import './styles.css';
const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature 
            temperature={20} 
            weatherState={SUN}/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;