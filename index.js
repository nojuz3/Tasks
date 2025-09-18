const fs = require('node:fs');

// const array = [1,6,10];
// let final = array[0];
// for (const i of array){
//     if (i > final) {
//         final = i;
//     }
// }

// console.log("Biggest", final);

// let unique = ["special","notspecial","notspecial",1,2,3,8,8,9,10,10];
// let empty = [];

// for (let i = 0; i < unique.length; i++) {
//     if (!empty.includes(unique[i])) {
//         empty.push(unique[i]);
//     }
// }
// console.log(empty);

// const number = 8;
// let mark = 0;

// for (let i = 1; i <= 10; i++) {
//   let result = number / i;
//   if (result - Math.floor(result) !== 0) {
//     mark++;
//     console.log(mark);
//   }
// }

// if (mark >= 8) {
//   console.log("Pirminis skaicius");
// } else {
//   console.log("Nepirminis skaicius");
// }


// function bblSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < (arr.length - i - 1); j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     console.log(arr);
// }
// let arr = [234, 43, 55, 63, 5, 6, 235, 547];

// bblSort(arr);




// fs.readFile('text.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
//   let count = 0;
//     for (const i of data) {
//         if (i ===" "){
//             continue;
//         }
//             count++;
//     }
//     console.log("Number of commas:", count);
// });
