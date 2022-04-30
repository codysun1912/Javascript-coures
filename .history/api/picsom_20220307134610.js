const endPoint = "https://picsum.photos/v2/list";

async function fetchImage(){
    const image = await fetch(endPoint);
    const dataImage = image.json();
    console.log(dataImage);
}
fetchImage();