const button = document.querySelector(".button");
function handleClick(){
    console.log("click me");
}
//bubbling
button.addEventListener("click",handleClick);
const span = document.querySelector(".button span");
span.addEventListener("click", function(){
    console.log("Clicked span");
});
