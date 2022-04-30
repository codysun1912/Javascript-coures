const yourYear = prompt("nhap vao nam sinh cua ban", "");
const yourYearNow = new Date();
const yourYearNow1 = yourYearNow.getFullYear();

const isAge = function yourAge(yourYear , yourYearNow1) {
    return yourYearNow1 - yourYear;
}
co