# WeatherBoyProject
Tools utilized: 
- React <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" width="25" height="20" >
- Django <img src="https://www.svgrepo.com/show/353657/django-icon.svg" width="25" height="25" >
- AWS <img src="https://cdn.iconscout.com/icon/free/png-256/free-aws-1869025-1583149.png?f=webp" width="25" height="25" >
    - S3
    - Ec2
- [WeatherAPI](https://www.weatherapi.com/docs/) <img src="https://miro.medium.com/v2/resize:fit:572/1*feb9suI4uOoADlpHZ9upnQ.png" width="65" height="25" >
</br>

## Creator
Israel Banez
</br>
</br>

## Official Site
[Website link](http://weather-boy.s3-website-us-west-1.amazonaws.com/)
</br>
</br>

## Purpose
A simple web application that displays the current weather to the users based on the city they input.
</br>
</br>

## Wireframe
[Figma board link](https://www.figma.com/design/lmGGlEE58VU6ecZbO5TSdB/WeatherBoy?node-id=5-28&t=BGJK75J4LwBuUzLK-1)
</br>
</br>

## Overall Status
_**Finished**_
</br>
</br>

## Quickstart (for running locally)
- Pre-install the necessary tools (React, Node, Django); check that you have python and pip installed.
- Create an account from the Weather API website to get an API key.
- Clone the repository.
- ### For the frontend:
    1. cd into "weather-boy-frontend" ``` cd weather-boy-frontend ```
    2. install all dependencies ``` npm install ```
    3. traverse to "src" folder, then "logic" folder and enter a base url in the weatherService.js file. This is usually something like ```http://localhost:8000```
    4. run npm start ``` npm start ```
- ### For the backend :
    1. cd into "weather-boy-backend" ```cd weather-boy-backend ```
    2. set up a virtual environment ``` python -m venv venv ```
    3. activate the virtual environment:
        1. ``` venv\Scripts\activate  ```
        2. ```source venv/bin/activate ```
    4. install the required packages ```pip install -r requirements.txt```
    5. set up environment variables:
        1. create a .env file in the root of "weather-boy-backend"
        2. add the necessary environment variables (e.g., secret keys, api key).
            - ```SECRET_KEY=```
            - ```DEBUG= ```
            - ```ALLOWED_HOSTS=```
            - ```CORS_ALLOWED_ORIGINS=```
            - ```WEATHER_API_KEY=```
    5. run the development server ```python manage.py runserver```
- Note: make sure the frontend and backend are running at the same time. 
</br>
</br>

## Demo
**Home Screen**</br>
<img src="https://github.com/user-attachments/assets/ae412fbd-5476-4101-996b-532b83a666f9" width="800" height="400"> </br>
</br>
**Example Screen**</br>
<img src="https://github.com/user-attachments/assets/692eecc2-34e8-4d5e-b08c-0832e1c5e6ae" width="800" height="400"> </br>
</br>



