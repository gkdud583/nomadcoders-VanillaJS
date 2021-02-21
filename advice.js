const advice = document.querySelector(".js-advice");


function getAdvice(){
    fetch("https://api.adviceslip.com/advice").then(function(response){
        return response.json()
    }).then(function(json){
        advice.innerText = `‟${json.slip.advice}”`;
        
      
    });
}

function init(){
    
    getAdvice();


}
init();