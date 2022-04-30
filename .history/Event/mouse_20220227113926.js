const button = document.querySelector(".button-change");

document.body.addEventListener("mousemove" , function(){
    console.log(`pageX: ${event.pageX}`);
    console.log(`clientX: ${event.clientX}`);
})

// button.addEventListener("mouseover" , function(){
//     console.log("over");
// })

// button.addEventListener("mouseenter" , function(){
//     console.log("enter");
// })

// button.addEventListener("mouseleave" , function(){
//     console.log("leave");
// })