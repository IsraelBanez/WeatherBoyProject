import React from 'react'
import './OpeningContent.css';

import Logo from '../../images/logo.svg';

function OpeningContent() {
    return (
        <div className='opening-content'>
            <div className='logo-container'>
                <img src={Logo}/>
            </div>
            <h1>Weather Boy</h1>
        </div>
    )
}

export default OpeningContent