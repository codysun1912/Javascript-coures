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