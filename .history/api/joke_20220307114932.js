const jokeHeading = document.querySelector(".joke-heading");
const jokeButton = document.querySelector(".joke-button");
const jokeWrapper = document.querySelector(".joke");
const endPoint = "https://icanhazdadjoke.com/";
async function jokeRandom(){
    const response = await fetch(endPoint,{
        headers: {
            Accept: "application/json",
        },
    });
    const data = await response.json();
    return data;
}


async function handleClick(){
    jokeWrapper.classList.add("is-loading")
   const data = await jokeRandom();
   jokeHeading.textContent = `${data.joke}`;
   jokeWrapper.classList.remove("is-loading")
   
}

jokeButton.addEventListener('click',handleClick);