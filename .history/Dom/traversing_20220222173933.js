const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement);

span.parentNode.removeChild(span);

const a = span.nextElementSibling;
console.log(a);

const b = span.nextElementSibling;