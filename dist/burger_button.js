let btnRevealBurger = document.getElementsByClassName("btn-reveal-burger")[0];
let burgerWrapper = document.getElementsByClassName("burger-wrapper")[0];

btnRevealBurger.addEventListener("click", 
    () => {
        burgerWrapper.setAttribute("class","burger-wrapper block");
    });

burgerWrapper.addEventListener("click", 
    () => {
        burgerWrapper.setAttribute("class","burger-wrapper hidden");
    });