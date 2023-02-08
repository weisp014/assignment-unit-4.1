console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  let greeting = 'Hello' + ", " + name + "!";
  return greeting;
}
// Remember to call the function to test
console.log('Test - personalized hello:', helloName('Ryan'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}
console.log('Test - should add firstNumber & secondNumber:', addNumbers(8,4));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  let answer = num1 * num2 * num3;
  return answer;
}
console.log('Test - should multiply 3 numbers:', multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
console.log(isPositive(10));
console.log(isPositive(-10));
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length == 0){
    return 'undefined';
  }
  else {
    return array[array.length - 1];
  }
}
let colors = ['blue','green','purple'];
console.log( 'getLast test:', getLast(colors) );  //purple is last in array
colors.push('yellow');  //add another color to the end of the array
console.log( 'getLast test:', getLast(colors) );  //yellow is last in array
colors.pop();  //remove color from the end of the array
console.log( 'getLast test:', getLast(colors) );  //purple is last in array

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for ( element of array ){
    
    if (element === value){
      return true;
    } //return ture if match found
  }
    return false; //if no match it will get to this code and return false
}
let animals = ['lions','tigers','bears'];
console.log( 'find test:', find('tigers', animals)); //should return true
console.log( 'find test:', find('pandas', animals)); //should return false


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
