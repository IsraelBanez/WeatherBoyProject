from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import os

# Create your views here.

@api_view(['GET'])
def get_weather(request):
    city = request.GET.get('city')
    if city:
        api_key = os.getenv('WEATHER_API_KEY')
        url_weather = f'http://api.weatherapi.com/v1/current.json?key={api_key}&q={city}'
        response_weather = requests.get(url_weather)
        
        if response_weather.status_code == 200:
            weather_data = response_weather.json()
            weather_info = {
                'name': weather_data['location']['name'],
                'region': weather_data['location']['region'],
                'country': weather_data['location']['country'],
                'temperature': weather_data['current']['temp_f'],
                'wind_mph': weather_data['current']['wind_mph'],
                'humidity': weather_data['current']['humidity'],
                'condition_text' : weather_data['current']['condition']['text'],
                'condition_icon' : weather_data['current']['condition']['icon'],
                'condition_code' : weather_data['current']['condition']['code'],
            }
            return Response(weather_info, status=200)
        else:
            return Response({'error': 'Failed to fetch weather data'}, status=response_weather.status_code)
    
    return Response({'error': 'City parameter is missing'}, status=400)

@api_view(['GET'])
def get_moon_phase(request):
    city = request.GET.get('city')
    if city:
        api_key = os.getenv('WEATHER_API_KEY')
        url_moon = f'http://api.weatherapi.com/v1/astronomy.json?key={api_key}&q={city}'
        response_moon = requests.get(url_moon)
        if response_moon.status_code == 200:
            moon_data = response_moon.json()
            moon_info = {
                'moon_phase': moon_data['astronomy']['astro']['moon_phase'],
                'moon_illumination': moon_data['astronomy']['astro']['moon_illumination'],
            }
            return Response(moon_info, status=200)
        else:
            return Response({'error': 'Failed to fetch moon phase data'}, status=response_moon.status_code)
    
    return Response({'error': 'City parameter is missing'}, status=400)