const leapYear = (year) => year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;

console.log(leapYear(400));
console.log(leapYear(500));
console.log(leapYear(600));
console.log(leapYear(800));
console.log(leapYear(1200));