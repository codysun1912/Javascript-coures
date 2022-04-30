const endPoint = "https://picsum.photos/v2/list";
const imageList = document.querySelector(".images");

function templateImage(url){
    const template = ` <div class="image-item">
    <img src="${url}"  alt = ""/>
</div>`;
imageList.insertAdjacentHTML("beforebegin" , template);
}

async function fetchImage(){
    const image = await fetch(endPoint);
    const dataImage = await image.json();
    if (dataImage.length > 0 && Array.isArray(dataImage)){
        console.log(dataImage);

    }
    
}
fetchImage();