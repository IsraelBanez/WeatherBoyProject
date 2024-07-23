import React from 'react'
import './WeatherDataContent.css';

import Moon from '../../images/moon.svg';

function WeatherDataContent({weatherData, moonPhaseData, bGColor}) {
    if (!weatherData || !moonPhaseData){
        return null;
    }

    const {name, region, country, temperature, wind_mph, humidity, condition_text, condition_icon} = weatherData;
    const {moon_phase, moon_illumination} = moonPhaseData;

    return (
        <div className='weather-data-content' style={{backgroundColor: bGColor}}>
            <div className='wdc-location'>
                <h2>{name}</h2>
                <h3>{region}, {country}</h3>
            </div>
            <div className='wdc-temp'>
                <h1>{temperature}</h1><div>°F</div>
            </div>
            <div className='wdc-weather' style={{color: bGColor}}>
                <img src={condition_icon} alt='weather condition'/>
                <div>
                    <h2>{condition_text}</h2>
                    <h3>Wind:&nbsp;W&nbsp;{wind_mph}&nbsp;mph</h3>
                    <h3>Humidity:&nbsp;{humidity}%</h3>
                </div>
            </div>

            <div className='wdc-moon'>
                <div>
                    <h2>{moon_phase}</h2>
                    <h3>Illumination:&nbsp;{moon_illumination}%</h3>
                </div>
                <img src={Moon} alt='moon image'/>
            </div>
        </div>
    )
}

export default WeatherDataContent