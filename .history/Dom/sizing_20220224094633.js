function log(value){
    console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth);
log(boxed.offsetHeight);
log(boxed.offsetLeft);
log(boxed.offsetTop);
log(boxed.offsetParent);

log(boxed.clientWidth);
log(boxed.clientHeight);
log(boxed.clientLeft);
log(boxed.clientTop);
