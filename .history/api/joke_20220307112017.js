const jokeHeading = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const endPoint = "https://icanhazdadjoke.com/";
async function jokeRandom(){
    const response = await fetch(endPoint,{
        headers: {
            Accept: "application/json",
        }
    });
    
    
}