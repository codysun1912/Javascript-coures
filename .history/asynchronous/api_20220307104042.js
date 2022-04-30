const endpoint = "https://api.github.com/users";


async function displayUser(username){
    const promise = fetch(`${endpoint}/${username}`);
    promise.then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        console.log(data.bio);
        console.log(data.login);

    })
    .catch((err) => {
        console.log(error);
    })

}
displayUser("evondev");


