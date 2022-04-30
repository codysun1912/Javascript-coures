const button = document.querySelector(".button");
const span = document.querySelector(".button span");
function handleClick(){
    console.log("click me");
}
//bubbling
button.addEventListener("click",handleClick,{capture:true});   
span.addEventListener("click", function(e){
    // e.stopPropagation();
    e.stopImmediatePropagation();
    console.log("Click span");
},{capture:true});
span.addEventListener("click", function(){
    console.log("Click span2");
})
document.body.addEventListener("click", function(){
    console.log("click body");

});