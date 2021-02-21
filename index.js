
const hamburger = document.querySelector(".hamburger-icon");
const menu = document.querySelector(".slide-menu");


function handleClick(){
    if(window.getComputedStyle(menu).left === "-400px"){
        menu.style.left = 0;
        hamburger.children[0].classList.add("first-span");
        hamburger.children[1].classList.add("second-span");
        hamburger.children[2].classList.add("third-span");
        
       
    }
    else{
        menu.style.left = "-400px";
        hamburger.children[0].classList.remove("first-span");
        hamburger.children[1].classList.remove("second-span");
        hamburger.children[2].classList.remove("third-span");
      
    }
    
  
    

   
}
function init(){
    hamburger.addEventListener("click",handleClick);
    
  
}
init();