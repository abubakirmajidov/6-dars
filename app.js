// let ism = "JavaScript Methodlari";

// console.log(ism.length);

////////////////////////////////////

// // replace()
// let message = "ball bat";

// // replace the first b with c
// let result = message.replace("b", "c");
// console.log(result);

// // Output: call bat

//////////////////////////////////////

// // replaceAll()
// const message = "ball bat";

// // replace all occurrence of b with c
// let result = message.replaceAll("b", "c");
// console.log(result);

// // Output: call cat

/////////////////////////////////////

// const message = "JavaScript is not Java";

// // returns index of 'v' in first occurrence of 'va'
// const index = message.indexOf("va");

// console.log("index: " + index); // index: 2

////////////////////////////////////

// // defining a string
// var str = "Programming";

// var substr = "g";

// // find last occurrence of "g" in str
// var result = str.lastIndexOf(substr);
// console.log(result);

// // Output: 10

// const message = "ScriptJava is fun";

// // check if message starts with Java
// let result = message.startsWith("Java");

// console.log(result); // true

// // check if message starts with Script
// result = message.startsWith("Script");

// console.log(result); // false

///////////////////////////////////////

// // string definition
// let sentence = "Java is to JavaScript what Car is to Carpet.";

// // checking if the given string ends with "to Carpet."
// let check = sentence.endsWith("to Carpet.");

// console.log(check);

// // Output
// // true

/////////////////////////////////////

// const message = "javascript is fun";

// // convert message to uppercase
// const upperMessage = message.toUpperCase();
// console.log(upperMessage);

// // Output: JAVASCRIPT IS FUN

////////////////////////////////////

// const message = "JAVASCRIPT IS FUN";

// // convert message to lowercase
// const lowerMessage = message.toLowerCase();
// console.log(lowerMessage);

// // Output: javascript is fun

/////////////////////////////////////

// const message = "JavaScript is fun";

// // check if message includes the string "Java"
// let result = message.includes("Java");
// console.log(result);

// // Output: true

/////////////////////////////////////

// const holiday = "Happy holiday!";

// // repeating the given string 3 times
// const result = holiday.repeat(23);

// console.log(result);

// // Output:
// // Happy holiday!Happy holiday!Happy holiday!

/////////////////////////////////////////

// // string declaration
// const string = "Hello World!";

// // finding character at index 1
// let index1 = string.charAt(1);

// console.log("Character at index 1 is " + index1);

// // Output:
// // Character at index 1 is e

///////////////////////////////////////////

// const message = "JavaScript is fun.";

// // get the substring starting from index 0 to 10
// let result = message.substring(0, 10);
// console.log(result);

// // Output: JavaScript

//////////////////////////////////////

// // string definition
// let string1 = "CODE";

// // padding "*" to the start of given string
// // until the length of final padded string reaches 10
// let paddedString = string1.padStart(10, "*");

// console.log(paddedString);

// // Output: ******CODE

//////////////////////////////////////////

let myNumber = prompt("Enter your Namber:");
let randomNamber = Math.trunc(10 * Math.random()) + 1;

if (myNumber == randomNamber) {
  console.log("siz toptiz");
} else {
  console.log(
    `Afsuz topalmadiz ${myNumber} kirit tingiz. Komputer oyladi ${randomNamber}`
  );
}

document.getElementById("demo").innerHTML = randomNamber;
