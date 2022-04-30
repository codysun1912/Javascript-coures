if("IntersectionObserver" in window){
    function callBack(entries){
        console.log(entries)
       const entry = entries[0];
       if(entry.isIntersecting){
           observer.unobserve(entry.target);
           entry.style.backgroundColor = "red"

       }

    }
    const options = {
        root:null,
        threshold:0,
        rootMargin:""
    }

    const observer = new IntersectionObserver(callBack , options);
    const boxed = document.querySelector(".boxed");

    observer.observe(boxed);
}