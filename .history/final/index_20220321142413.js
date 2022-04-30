if("IntersectionObserver" in window){
    function callBack(entries){
       const entry = entries[0];

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