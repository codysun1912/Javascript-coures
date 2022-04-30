const endPoint = "https://picsum.photos/v2/list";
const imageList = document.querySelector(".images");
let dataImage =[];

function templateImage(url){
    const template = ` <div class="image-item">
    <img src="${url}"  alt = ""/>
</div>`;
imageList.insertAdjacentHTML("beforeend" , template);
}

async function fetchImage(){
    const image = await fetch(endPoint);
    const dataImage = await image.json();
    if (dataImage.length > 0 && Array.isArray(dataImage)){
        dataImage.forEach(item =>{
            templateImage(item.download_url);
        })

    }
    
}
fetchImage();