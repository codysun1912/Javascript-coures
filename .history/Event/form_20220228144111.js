const keyDown = document.querySelector(".input");
keyDown.addEventListener("keydown" , function(event){
    console.log(event.key);
    console.log(event.keyCode);
    console.log(event.which);
})


