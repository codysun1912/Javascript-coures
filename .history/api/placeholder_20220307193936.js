async function addPost(title , author){
    const endpoint = await fetch('http://localhost:3000/posts', {
  method: 'POST',
  body: JSON.stringify({
    title,
   author,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit" , function(event){
    event.preventDefault();
    const title = this.elements['title'].value;
    const author = this.elements['author'].value;
    addPost(title , author);

});