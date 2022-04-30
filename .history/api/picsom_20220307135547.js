const endPoint = "https://picsum.photos/v2/list";
const imageList = document.querySelector(".images");

function templateImage(url){
    const template = ` <div class="image-item">
    <img src="${url}"  alt = ""/>
</div>`;
}

async function fetchImage(){
    const image = await fetch(endPoint);
    const dataImage = await image.json();
    console.log(dataImage);
}
fetchImage();