const weather = document.querySelector(".js-weather");

const COORDS = "coords"
const WHEATHER = "weather"
const PLACE = "place"
const API_KEY = "96c2d3144a36735126bdc30763bada8a";
function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}
    `).then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        localStorage.setItem(PLACE,place);

        localStorage.setItem(WHEATHER,`${temperature} @ ${place}`);
        weather.innerText = place;
    });
    
    
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
function handleGeoError(){
    console.log("Cant access geo location");
}
function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}
function loadCords(){
    const loadCords = localStorage.getItem(COORDS);
    if(loadCords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadCords);
      
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}
function handleOver(){
    weather.innerText = localStorage.getItem(WHEATHER);
 

}
function handleOut(){
    weather.innerText = localStorage.getItem(PLACE);

}
function init(){
    loadCords();
    weather.addEventListener("mouseover",handleOver);
    weather.addEventListener("mouseout",handleOut);

}
init();