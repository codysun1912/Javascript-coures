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

async function addCourse(image,title,author,rating,price,bestSeller,buyAmount) {
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