 //13. Basic Mathematical Operations
 function calculate(num1, num2, operation) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    default:
      return "Invalid operation";
  }
}

console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '/')); // 2

//14. To Square Root or Not

function squareOrSquareRoot(array) {
  let newArray=[];

  for (let i = 0; i < array.length; i++) {
     if (Number.isInteger(Math.sqrt(array[i]))) {
      newArray.push(Math.sqrt(array[i]));   
    } else {
      newArray.push(array[i] * array[i]); 
    }
  }
 return newArray;
  }


console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

//15. Count by X

function countBy(x, n) {
  let newArray = [];
  for (let i = 1; i <= n; i++) {
    newArray.push(x * i);
  }
  return newArray;
}

console.log(countBy(2, 5)); 

// 16 Remove String Spaces

function noSpace(str) {
  return str.replace(/\s/g, '');
}
console.log(noSpace("Hello  World ")); 

//19 Reversing Words in a String
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("I am here")); // "here am I"

//20 Keep Hydrated
function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(3));  
console.log(litres(6.7)); 
console.log(litres(11.8)); 

//21  Convert a Number to a String
function numberToString(num) {
  return num.toString();
}

console.log(numberToString(123));  
console.log(numberToString(99));

//22 Calculate Average
function findAverage(arr) {
  if (arr.length === 0) return 0; 
  
  let sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

console.log(findAverage([1, 2, 3, 4, 5])); 
console.log(findAverage([10, 20, 30]));                

