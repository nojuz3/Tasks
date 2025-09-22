const fs = require("node:fs");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let array = [];

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  array = data.split(",").map((line) => Number(line.trim()));
  bblSort(array);
  //   console.log(data);
  //   let count = 0;
  //     for (const i of data) {
  //         if (i ===" "){
  //             continue;
  //         }
  //             count++;
  //     }
  //     console.log("Number of commas:", count);
});

function bblSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

rl.question(`Type to do a function: unique , biggest, prime: `, (name) => {
  switch (name) {
    case "unique":
      uniqueArray(array);
      break;
    case "biggest":
      biggestnum(array);
      break;
    case "prime":
        Prime(array);
        break;
    default:
      console.log("something went wrong");
      break;
  }
  rl.close();
});

function biggestnum(arr) {
  let final = arr[0];
  for (const i of arr) {
    if (i > final) {
      final = i;
    }
  }
  console.log("Biggest", final);
}
// let unique = ["special","notspecial","notspecial",1,2,3,8,8,9,10,10];
function uniqueArray(unique) {
  let empty = [];

  for (let i = 0; i < unique.length; i++) {
    if (!empty.includes(unique[i])) {
      empty.push(unique[i]);
    }
  }
  console.log(empty);
}

// const number = 8;

function Prime(number) {
  for (const n of number) {
    let mark = 0;

    for (let i = 1; i <= 10; i++) {
      let result = n / i;
      if (result - Math.floor(result) !== 0) {
        mark++;
        // console.log(mark);
      }
    }

    if (mark >= 8) {
      console.log(`Pirminis skaicius ${n}`);
    } else {
      console.log(`Nepirminis skaicius ${n}`);
    }
  }
}

