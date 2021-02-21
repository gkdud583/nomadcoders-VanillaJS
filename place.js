const place = document.querySelector(".css-weather");
function handleover(){

}
function loadCords(){
    const loadCords = localStorage.getItem(COORDS);
    if(loadCords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadCords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}
function init(){
    place.addEventListener("mouseover",handleover);
}
init();