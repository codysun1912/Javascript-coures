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

function addCourse(){
  fetch(endPoint , {
    method: "POST",
    body: JSON.stringify({
      image: "",
      title: "",
      author: "",
      rating: "",
      price: "",
      bestSeller: false,
      buyAmount: ""
    })
  })
}