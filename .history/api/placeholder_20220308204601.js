
const endPoint = "http://localhost:3456/courses";
const courseList  = document.querySelector(".course-list");
const formSubmit = document.querySelector(".form-submit");
let updateId = null;
const formInput = document.querySelector(".filter");

formInput.addEventListener("keydown", async function(e){
  if(e.target.value !== ""){
    const path = `${endPoint}?title_like=${e.target.value}`;
  getCourses(path);

  }
  
  // const response = await fetch(`${endPoint}?title_like=${e.target.value}`);
  // const data = await response.json();
  // console.log(data);
});

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

async function updateCourse({id,image,title,author,rating,price,bestSeller,buyAmount}) {
  await fetch(`${endPoint}/${id}`, {
    method: "PUT",
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

  });
}

function renderItem(item){
  const template = `<div class="course-item">
      <div class="course-image">
          <img src="${item.image}" alt="" >
          <button class = "course-edit" data-id ="${item.id}"><i class="fa fa-pencil"></i></button>
          <button class = "course-remove" data-id ="${item.id}"><i class="fa fa-times"></i></button>
        
      </div>
      <div class="course-content">
          <h3 class="course-title">${item.title}</h3>
          <div class="course-author">${item.author}</div>
          <div class="course-meta">
              <div class="course-rating">${item.rating}</div>
              <div class="course-enroll">${item.buyAmount}</div>
          </div>
          ${
            item.bestSeller ?' <div class="course-best-seller">Best seller</div>' : ''
          }
      </div>
  </div>`;
  courseList.insertAdjacentHTML("beforeend" , template);

}

async function getCourses(link = endPoint){
  const response = await fetch(link);
  const data = await response.json();
  courseList.innerHTML = "";
  if(data.length > 0 && Array.isArray(data)){
    data.forEach((item) => renderItem(item));
  }
}

async function removeCourse(id){
  await fetch(`${endPoint}/${id}`,{
    method: 'DELETE',
  });
}

async function editCourse(id){
const response= await fetch(`${endPoint}/${id}`);
const data = await response.json();
return data;
  
}

const formCourse = document.querySelector(".form-course");
formCourse.addEventListener("submit", async function(e){
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
  updateId ? await updateCourse({id: updateId , ...courses}) : await addCourse(courses);
  this.reset();
  await getCourses();
  updateId = null;
  formSubmit.textContent = "Add Course";
});

courseList.addEventListener("click", async function(e){
  if(e.target.matches(".course-remove")){
    const id = +e.target.dataset.id;
    await removeCourse(id);
    await getCourses();
  }else if (e.target.matches(".course-edit")){
    const id = +e.target.dataset.id;
    const data = await editCourse(id);
    formCourse.elements["image"].value = data.image;
    formCourse.elements["title"].value = data.title;
    formCourse.elements["author"].value = data.author;
    formCourse.elements["rating"].value = data.rating;
    formCourse.elements["price"].value = data.price;
    formCourse.elements["bestSeller"].checked = data.bestSeller;
    formCourse.elements["buyAmount"].value = data.buyAmount;
    formSubmit.textContent = "Update course";
    updateId = id;
  }
})
getCourses(); 