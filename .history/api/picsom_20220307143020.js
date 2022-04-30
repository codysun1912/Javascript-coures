const endPoint = "https://picsum.photos/v2/list?limit=8";
const imageList = document.querySelector(".images");
let dataImage =[];
const loadButton = document.querySelector(".load-more");

function templateImage(url){
    const template = ` <div class="image-item">
    <img src="${url}"  alt = ""/>
</div>`;
imageList.insertAdjacentHTML("beforeend" , template);
}

async function fetchImage(page = 1){
    const image = await fetch(endPoint);
     dataImage = await image.json();
    if (dataImage.length > 0 && Array.isArray(dataImage)){
        dataImage.forEach(item =>{
            templateImage(item.download_url);
        })
    }
}

async function loadMore(){
    console.log("Loading more...");
}
loadButton.addEventListener("click" , loadMore);
fetchImage();