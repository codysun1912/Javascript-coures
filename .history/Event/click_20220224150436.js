const button = document.querySelector(".button");
const span = 
function handleClick(){
    console.log("click me");
}
//bubbling
button.addEventListener("click",handleClick);
document.querySelector(".button span").addEventListener("click", function(){
    console.log("Click span");
});

document.body.addEventListener("click", function(){
    console.log("click body");
})