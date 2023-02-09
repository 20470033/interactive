let numberContainer = document.querySelector(".rating-state__number-container");
let rateNumber = document.querySelector(".trankyou-state__result--number");
let submitBtn = document.querySelector(".rating-state__button");
let ratingstate = document.querySelector(".rating-state");
let thankyoustate = document.querySelector("trankyou-state");

numberContainer.addEventListener("click", E=>{
    let numberSelected=E.target.innerText;
    rateNumber.innerText = numberSelected;
    if(numberSelected >0 || numberSelected<=5){
        submitBtn.addEventListener("click", ()=>{
            ratingstate.style.display = "none";
            thankyoustate.style.display = "flex";
        });
    }
});
