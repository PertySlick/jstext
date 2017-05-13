/*
  File: intro.js
  Author: Timothy Roush
  Email: troush@mail.greenriver.edu
  Date: 5/13/17
  Description:  Assignment Solution - Intro JS Assignment
*/

// Print "Introduction to JavaScript" to the console window
intro();

function intro() {
  console.log("Introduction to JavaScript");
}


// Print 1 to 100 to the console replacing numbers divisible by 3 with "Fizz"
// and numbers divisible by 5 with "Buzz".

function fizzBuzz1() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}


// Print 1 to 100 to the console replacing numbers divisible by both 3 and 5
// with "FizzBuzz".

function fizzBuzz2() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else console.log(i);
  }
}

// Write a function that counts all the "B"s in a user-provided string

function countBs(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B")  count++;
  }
  
  return count;
}