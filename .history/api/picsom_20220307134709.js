const endPoint = "https://picsum.photos/v2/list";

async function fetchImage(){
    const image = await fetch(endPoint);
    const dataImage = await image.json();
    console.log(dataImage);
}
fetchImage();