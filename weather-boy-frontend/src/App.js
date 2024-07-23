import React, {useState} from 'react';
import './App.css';

import WeatherDataContainer from './components/weather/WeatherDataContainer';
import SearchBarContainer from './components/search/SearchBarContainer';

function App() {
  const [targetCity, setTargetCity] = useState('');
  const [bgColor, setBgColor] = useState('');

  const handleCityUpdate = (city) => {
      setTargetCity(city);
  };

  const handleBgColorUpdate = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App">
      <main className='weather-boy' style={{ background: bgColor }}>
        <WeatherDataContainer targetCity={targetCity} onBgColorUpdate={handleBgColorUpdate}/>
        <SearchBarContainer onCityUpdate={handleCityUpdate}/>
      </main>
    </div>
  );
}

export default App;
