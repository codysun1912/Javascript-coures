const now = new Date();
console.log(now);

console.log(now.getTime());


console.log(new Date(1645148383417));

console.log(new Date("Fri Feb 18 2022 08:50:59 GMT+0700 (Indochina Time)"));

console.log(new Date(2022 , 1 ,18 , 8 , 53 , 50 ,34));


const birthday = new Date(2001 , 11 , 19);

console.log(birthday.getFullYear());

console.log(birthday.getMonth());

console.log(birthday.getDate());

console.log(birthday.getDay());

console.log(birthday.getHours());

console.log(birthday.getMinutes());

console.log(birthday.getSeconds());

console.log(birthday.getMilliseconds());


console.log(birthday.getTime());


console.log(`Birthday is : ${birthday}`);
birthday.setFullYear(2000);
birthday.setMonth(0);
birthday.setDate(1);
birthday.setHours(12);
birthday.setMinutes(12);
birthday.setSeconds(12);


console.log(`Birthday is : ${birthday}`);

//UTC 

console.log(birthday.getUTCFullYear());

console.log(birthday.getUTCMonth());

console.log(birthday.getUTCDate());

console.log(birthday.getUTCDay());

console.log(birthday.getUTCHours());

console.log(birthday.getUTCMinutes());

console.log(birthday.getUTCSeconds());

console.log(birthday.getUTCMilliseconds());



console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());