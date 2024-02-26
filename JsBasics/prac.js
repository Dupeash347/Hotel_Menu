// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(first)

// const points = [40, 100, 1, 5, 25, 10];
// // points.sort(function(a, b){return a - b});
// // console.log(points)
// console.log(myArrayMax(points))
// function myArrayMax(arr) {
//     return Math.max.apply(null, arr);
//   }



// const myArr = [
//     {name:"X00",price:100 },
//     {name:"X01",price:100 },
//     {name:"X02",price:100 },
//     {name:"X03",price:100 },
//     {name:"X04",price:110 },
//     {name:"X05",price:110 },
//     {name:"X06",price:110 },
//     {name:"X07",price:110 }
//   ];

// myArr.sort();
// console.log(myArr)


// const numbers1 = [45, 4, 9, 16, 25];
// const newnum = numbers1.map((x)=>x+5)
// console.log(newnum)

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter((a,b)=>(a-b)<5);
// console.log(over18)

// const numbers = [1,2,3, 4, 5];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value) {
//   console.log(total)
//   return total + value;
// }
// console.log(sum)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//   console.log(x)
// }

// const months = ["Januar", "Februar", "Mar", "April"];
// const myMonths = months.with(2, "March");
// console.log(myMonths)

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, 1, 2, "Hey", "Hari", "Ram", ...q4];
console.log(year)
year.sort(mySortfunc)

console.log(year)