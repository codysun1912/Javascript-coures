const button = document.querySelector(".button");
// const span = document.querySelector(".button span");
// function handleClick(){
//     console.log("click me");
// }
// //bubbling
// button.addEventListener("click",handleClick,{capture:true});   
// span.addEventListener("click", function(e){
//     // e.stopPropagation();
//     e.stopImmediatePropagation();
//     console.log("Click span");
// },{capture:true});
// span.addEventListener("click", function(){
//     console.log("Click span2");
// },{capture:true})
// document.body.addEventListener("click", function(){
//     console.log("click body");

// },{capture:true});

button.addEventListener("click", function(){
    console.log(`envent.target : ${event.target}`);
    console.log(`${event.currentTarget}`);
})
 // event.target la chon dung noi bam