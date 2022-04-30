console.log(location);
console.log(window.location);

    // setTimeout(function(){
    //     location.href = "http://evondev.com";
    // },2000);

    let params = new URLSearchParams(location.search);
    console.log(params);
    console.log(params.get("type"));