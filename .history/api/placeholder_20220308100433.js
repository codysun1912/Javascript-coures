const courses = {
  image: "",
  title: "",
  author: "",
  rating: "",
  price: "",
  bestSeller: false,
  buyAmount: ""
}

const endPoint = " http://localhost:3456/courses";

async function addCourse({image,title,author,rating,price,bestSeller,buyAmount}) {
  await fetch(endPoint , {
    method: "POST",
    body: JSON.stringify({
      image,
      title,
      author,
      rating,
      price,
      bestSeller,
      buyAmount
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },

  })
}
const formCourse = document.querySelector(".form-course");
formCourse.addEventListener("submit", function(e){
  e.preventDefault();
  const courses = {
    image: this.elements["image"].value,
    title: this.elements["title"].value,
    author: this.elements["author"].value,
    rating: this.elements["rating"].value,
    price: this.elements["price"].value,
    bestSeller:this.elements["bestSeller"].checked,
    buyAmount: this.elements["buyAmount"].value
  }
  const image = this.elements["image"].value;
  const title = 
  const author =;
  const rating = this.elements["rating"].value;
  const price = ;
  const bestSeller = ;
  const buyAmount = this.elements["buyAmount"].value;
  addCourse(image,title,author, rating, price, bestSeller, buyAmount);
});