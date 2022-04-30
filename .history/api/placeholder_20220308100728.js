
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
formCourse.addEventListener("submit",async function(e){
  e.preventDefault();
  const courses = {
    image: this.elements["image"].value,
    title: this.elements["title"].value,
    author: this.elements["author"].value,
    rating: this.elements["rating"].value,
    price: this.elements["price"].value,
    bestSeller:this.elements["bestSeller"].checked,
    buyAmount: this.elements["buyAmount"].value,
  };

  await addCourse(courses);
  this.reset();
});