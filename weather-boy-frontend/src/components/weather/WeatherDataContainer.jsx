import React, { useState, useEffect } from 'react';
import './WeatherDataContainer.css';

import OpeningContent from './OpeningContent';
import WeatherDataContent from './WeatherDataContent';

import { getWeather, getMoonPhase } from '../../logics/weatherService.js';

import {ReactComponent as XIcon} from '../../images/x-icon.svg';

const determineBgColor = (conditionCode, conditionText) => {
    if (conditionText === 'Clear') return ['#263353', '#7E96CB']; // Night
    if (conditionCode === 1000) return ['#FBFFE0', '#FFFBA6']; // Sunny
    if ([1003, 1006, 1009, 1030, 1135, 1147].includes(conditionCode)) return ['#D8E2E7', '#E7EAEC']; // Cloudy/Overcast
    if ([1063, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1204, 1207, 1240, 1243, 1246, 1249, 1252, 1261, 1264].includes(conditionCode)) return ['#E0FFFF', '#DAF3FD']; // Precipitation
    if ([1066, 1069, 1072, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1255, 1258, 1279, 1282].includes(conditionCode)) return ['#F5FBFF', '#E6F7FF']; // Snow/Ice
    if ([1087, 1273, 1276].includes(conditionCode)) return ['#E1E0FF', '#E3D5FF']; // Severe weather/thunderstorms
    return ['linear-gradient(to bottom, #83F6BF, #8AB3E4)', 'rgba(255, 255, 255, 0.2)']; 
};


function WeatherDataContainer({targetCity, onBgColorUpdate }) {
    const [hasEnteredCity,  setHasEnteredCity] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [moonPhaseData, setMoonPhaseData] = useState(null);
    const [error, setError] = useState(null);
    const [backgroundColor, setBackGroundColor] = useState('');
    
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const weatherResponse = await getWeather(targetCity);
                const moonPhaseResponse = await getMoonPhase(targetCity);
                setWeatherData(weatherResponse.data);
                setMoonPhaseData(moonPhaseResponse.data);
                setError(null);
                setHasEnteredCity(true); 
                const bgColor = determineBgColor(weatherResponse.data.condition_code, weatherResponse.data.condition_text);
                setBackGroundColor(bgColor[1])
                onBgColorUpdate(bgColor[0]);
            } catch (error) {
                if (error.response){
                    setError(error.response.data.error );
                } else {
                    setError(error.message );
                }
            }
        };

        if (targetCity) {
            fetchWeatherData();
        }
    }, [targetCity]);

    return (
        <section className='weather-data-container'>
            {!hasEnteredCity ? (
                <OpeningContent />
            ) : (
                <WeatherDataContent weatherData={weatherData} moonPhaseData={moonPhaseData} bGColor={backgroundColor}/>
         
            )}
            {error ? <span><XIcon/>{error}, please enter a valid location.</span> : <></>}
        </section>
    )
}

export default WeatherDataContainer