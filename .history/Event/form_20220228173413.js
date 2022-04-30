const keyDown = document.querySelector(".input");
// keyDown.addEventListener("keydown" , function(event){
    // console.log(event.key);
    // console.log(event.keyCode);
    // console.log(event.which);
// })
// keyDown.addEventListener("keyup" , function(event){
//     console.log(event.key);
    
// })

// keyDown.addEventListener("change" , function(event){
//     console.log("working");
    
// })
// su kien xay ra khi an ra ngoai

keyDown.addEventListener("focus" , function(event){
    console.log("working");
})

keyDown.addEventListener("blur" , function(event){
    console.log("working");
})
