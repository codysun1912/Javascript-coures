// const div = document.createElement('div');

const body = document.body;
// body.appendChild(div);
// div.classList.add("container");

// const card = document.createElement("div");
// card.classList.add("card");
// const cardImg = document.createElement("img");
// cardImg.setAttribute("src","");
// cardImg.setAttribute("class","card-image");
// card.appendChild(cardImg);
// body.appendChild(card); 

// const createText = document.createTextNode("hello cody sun");
// const h1 = document.createElement("h1");
// h1.appendChild(createText);
// body.appendChild(h1);


// const h1Clone = h1.cloneNode(true);
// body.appendChild(h1Clone);

// console.log(h1.hasChildNodes());

const h3 = document.querySelector("h3");

// h3.insertAdjacentText("beforebegin" ,"begin" );
// h3.insertAdjacentText("afterbegin" ,"after" );
// h3.insertAdjacentText("beforeend" ,"end" );
// h3.insertAdjacentText("afterend" ,"end" );


const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforeend" , strong);


const template = `
<ul class = "menu2">
<li>1</li>
<li>2</li>
<li>3</li>
</ul>`;

document.body.insertAdjacentHTML("beforeend", template);