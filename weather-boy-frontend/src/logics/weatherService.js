import axios from 'axios';

// Add custom baser url here
const weatherInstance = axios.create({
    baseURL: 'Input-Base-URL',
    headers: {
        'Content-Type': 'application/json',
    },
});

const getWeather = async (city) => {
    try {
        const response = await weatherInstance.get('/weather/', {
            params: {
                city: city,
            },
        });
        return response; 
    } catch (error) {
        throw error;
    }
};

const getMoonPhase = async (city) => {
    try {
        const response = await weatherInstance.get('/moon_phase/', {
            params: {
                city: city,
            },
        });
        return response; 
    } catch (error) {
        throw error;
    }
};

export {getWeather, getMoonPhase}