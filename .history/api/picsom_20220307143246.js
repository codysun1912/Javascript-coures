const endPoint = "https://picsum.photos/v2/list?limit=8";
const imageList = document.querySelector(".images");
let dataImage =[];
const loadButton = document.querySelector(".load-more");
let page = 1;

function templateImage(url){
    const template = ` <div class="image-item">
    <img src="${url}"  alt = ""/>
</div>`;
imageList.insertAdjacentHTML("beforeend" , template);
}

async function fetchImage(page = 1){
    const image = await fetch(`${endPoint}&page=${page}`);
     dataImage = await image.json();
    if (dataImage.length > 0 && Array.isArray(dataImage)){
        dataImage.forEach(item =>{
            templateImage(item.download_url);
        })
    }
}

async function loadMore(){
    page ++;
    await fetchImage(page);
}
loadButton.addEventListener("click" , loadMore);
fetchImage();