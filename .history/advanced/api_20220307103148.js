const endpoint = "https://api.github.com/users/evondev";


const displayUser(username){
    const promise = fetch(endpoint);
    promise.then((response) => {
        return response.json();
    })
}


