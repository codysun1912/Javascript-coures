const yourYear = prompt("nhap vao nam sinh cua ban", "");
const yourYearNow = new Date();
const yourYearNow1 = yourYearNow.getFullYear();

console.log(`${yourYearNow1} - ${yourYear}`);