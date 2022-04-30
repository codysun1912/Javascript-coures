// const div = document.createElement('div');

const body = document.body;
// body.appendChild(div);
// div.classList.add("container");

const card = document.createElement("div");
card.classList.add("card");
const cardImg = document.createElement("img");
cardImg.setAttribute("src","");
cardImg.setAttribute("class","card-image");
card.appendChild(cardImg);
body.appendChild(card); 

const createText = document.createTextNode("hello cody sun");
const h1 = document.createElement("h1");
h1.appendChild(createText);
body.appendChild(h1);


const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);