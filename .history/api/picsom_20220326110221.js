const endPoint = "https://picsum.photos/v2/list?limit=8";
const imageList = document.querySelector(".images");
const loadButton = document.querySelector(".load-more");
const loading = document.querySelector(".image-loader");
loadButton.style.display = "none";
let page = 1;

function templateImage(url){
    const template = ` <div class="image-item">
    <img src="${url}"  alt = ""/>
</div>`;
imageList.insertAdjacentHTML("beforeend" , template);
}

async function fetchImage(page = 1){
    loading.style.display = "block";
    loadButton.style.display = "none";
    const image = await fetch(`${endPoint}&page=${page}`);
      const dataImage = await image.json();
    if (dataImage.length > 0 && Array.isArray(dataImage)){
        loading.style.display = 'none';
        loadButton.style.display = 'block';
        dataImage.forEach(item =>{
            templateImage(item.download_url);
    }
}

async function loadMore(){
    page ++;
    await fetchImage(page);
}
loadButton.addEventListener("click" , loadMore);

fetchImage();