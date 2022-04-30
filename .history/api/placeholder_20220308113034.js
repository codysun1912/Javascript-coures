
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
function renderItem(item){
  const template = `<div class="course-list">
  <div class="course-item">
      <div class="course-image">
          <img src=${item.image} alt="" >
      </div>
      <div class="course-content">
          <h3 class="course-title">${item.title}</h3>
          <div class="course-author">${item.author}</div>
          <div class="course-meta">
              <div class="course-rating">${item.rating}</div>
              <div class="course-enroll">${item.title}</div>
          </div>
          <div class="course-best-seller">Best seller</div>
      </div>
  </div>
</div>`
}

async function getCourse(){
  const response = await fetch(endPoint);
  const data = await response.json();
}
const formCourse = document.querySelector(".form-course");
formCourse.addEventListener("submit",async function(e){
  e.preventDefault();
  const courses = {
    image: this.elements["image"].value,
    title: this.elements["title"].value,
    author: this.elements["author"].value,
    rating: +this.elements["rating"].value,
    price: +this.elements["price"].value,
    bestSeller:this.elements["bestSeller"].checked,
    buyAmount: +this.elements["buyAmount"].value,
  };

  await addCourse(courses);
  this.reset();
});
getCourse();