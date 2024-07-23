import React, {useState} from 'react'
import './SearchBarContainer.css';

import {ReactComponent as SearchIcon} from '../../images/search-icon.svg';

import {ReactComponent as XIcon} from '../../images/x-icon.svg';

function SearchBarContainer({onCityUpdate}) {
    const [isSpinny, setIsSpinny] = useState(false);
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    const handleSpinnyClick = () => {
        setIsSpinny(true);

        if (city) {
            onCityUpdate(city);
            setCity('');
            setError('');
        } else {
            setError('Please enter a city');
        }


        setTimeout(() => {
            setIsSpinny(false);
        }, 1000); 
    };
    
    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSpinnyClick();
        }
    };

    return (
        <section className='search-bar-container'>
            {error && <span ><XIcon/>{error}</span>}
            <div className='search-bar'>
                <input 
                    type="search" 
                    placeholder={"Enter city name"}
                    value={city}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                
                <button type='submit' onClick={() => handleSpinnyClick()}><SearchIcon className={`search-icon ${isSpinny ? 'spin' : ''}`}/></button>
            </div>
        </section>
    )
}

export default SearchBarContainer