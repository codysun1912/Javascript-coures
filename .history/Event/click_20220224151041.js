const button = document.querySelector(".button");
const span = document.querySelector(".button span");
function handleClick(){
    console.log("click me");
}
//bubbling
button.addEventListener("click",handleClick);   
span.addEventListener("click", function(){
    console.log("Click span");
});

// document.body.addEventListener("click", function(){
//     console.log("click body");

// });