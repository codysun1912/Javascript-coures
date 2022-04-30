if("IntersectionObserver" in window){
    // function callBack(entries){
    //     console.log(entries)
    //    const entry = entries[0];
    //    if(entry.isIntersecting){
    //        observer.unobserve(entry.target);
    //        entry.target.style.backgroundColor = "red";
    //    }

    // }
    // const options = {
    //     root:null,
    //     threshold:0.5,
    //     rootMargin:"0px"
    // }

    // const observer = new IntersectionObserver(callBack , options);
    // const boxed = document.querySelector(".boxed");

    // observer.observe(boxed)
    const options = {
        threshold:0.5,
    };
    
    let observer = new IntersectionObserver((entries, observer) => {entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    })}, options);
    const images = document.querySelector("img");
    images.forEach((image) => observer.observe(img))
}

