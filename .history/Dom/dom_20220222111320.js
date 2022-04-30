

const singleNode = document.querySelector("h1");
const singleNode1 = document.querySelector(".container");
const singleNode2 = document.querySelector("#spinner");
const singleNode3 = document.querySelector(".container.heading");

console.log(singleNode3);
const multiNode = document.querySelectorAll(".item");
console.log(multiNode);

const classNode = document.getElementsByClassName("item");
console.log(classNode);

const tagNode = document.getElementsByTagName("h1");
console.log(tagNode);

const idNode = document.getElementById("spinner");
console.log(idNode);

const li = document.querySelectorAll(".item");
li.forEach((item) => {
    console.log(item.getAttribute("class"));
});
console.log(li);


// co nhieu the a
const listLink = document.querySelectorAll("a.link");
listLink.forEach((item) => {
    item.setAttribute("target","_blank");
})

const p = document.getElementsByClassName("container");
p.removeAttribute("style");

