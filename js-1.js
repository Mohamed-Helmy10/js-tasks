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
