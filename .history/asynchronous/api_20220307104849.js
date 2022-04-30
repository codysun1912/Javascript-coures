const endpoint = "https://api.github.com/users";
const input = document.querySelector(".button");

async function displayUser(username){
    const promise = await fetch(`${endpoint}/${username}`);
    const data = await promise.json();
    input.textContent = `${data.login}`;
    console.log(data);
    console.log(promise);
    // promise.then((response) => {
    //     return response.json();
    // })
    // .then((data) => {
    //     console.log(data);
    //     console.log(data.bio);
    //     console.log(data.login);

    // })
    // .catch((err) => {
    //     console.log(error);
    // })

}
function handleError(){
    console.log("Something wrong");
    input.textContent = " Not find data";

}
displayUser("rttyy").catch(handleError);


