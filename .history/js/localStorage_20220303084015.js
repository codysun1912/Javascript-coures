// 1 localStorage.setItem(key , value)
localStorage.setItem("name" , "cody sun");
// 2 localStorage.getItem(key)
console.log(localStorage.getItem("name"));

// 3. localStorage.removeItem("name");

// 4. localStorage.clear();
const arr = [1,2,3,4,5];
localStorage.setItem("list" , JSON.stringify(arr));

const newArr = JSON.parse(localStorage.getItem("list")); 