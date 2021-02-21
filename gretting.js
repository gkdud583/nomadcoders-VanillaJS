const form = document.querySelector(".js-form"),
      input = form.querySelector(".js-name-input"),
      greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser",
      SHOWING_ON = "showing";
function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentVaue= input.value;
    paintGreeting(currentVaue);
    saveName(currentVaue);
}
function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit",handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}
init();