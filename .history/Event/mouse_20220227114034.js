const button = document.querySelector(".button-change");

document.addEventListener("mousemove" , function(){
    console.log(`pageX: ${event.pageX}`);
    console.log(`clientX: ${event.clientX}`);
})

document.addEventListener("mousemove" , function(){
    console.log(`pageY: ${event.pageY}`);
    console.log(`clientY: ${event.clientY}`);
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