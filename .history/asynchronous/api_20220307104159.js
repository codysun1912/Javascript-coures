const endpoint = "https://api.github.com/users";


async function displayUser(username){
    const promise = await fetch(`${endpoint}/${username}`);
    const data = await promise.json();
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
displayUser("evondev");


