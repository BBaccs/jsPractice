// PART 1
// var firstName = prompt("What's your First name?");
// var lastName = prompt("What's your Last name?");
// var dogsName = prompt("What's your Dog's name?");
// var age = prompt("What's your Age?");
// var fullName = firstName + " " + lastName;



// alert(fullName);
// alert("Your first name is, " + firstName + " " + lastName);
// console.log("first name is, " + firstName);
// console.log("last name is, " + lastName);
// console.log("dogs name is, " + dogsName);
// console.log("age is, " + age);



// // PART 2


// // Get age and convert it to a Number (prompt always returns a String)
// var age = Number(prompt("What is your age?"));
 
// // If age is negative
// if(age < 0) {
//  console.log("Come back once you're out of the womb");
// }
 
// // If age is 21  
// if(age === 21) {
//  console.log("Happy 21st Birthday!");
// }
 
// // If age is odd
// //(not evenly divisible by two)
// if(age % 2 !== 0) {
//  console.log("Your age is odd!");
// }
 
// // If age is a perfect square
// if(age % Math.sqrt(age) === 0) {
//   console.log("Your age is a perfect square!");
// }




// Part 3

// var yoNumber = Number(prompt("What's you number?"));
// var secretNumber = 7;

// if (yoNumber === secretNumber) {
//     console.log("you got it!");
// } else if (yoNumber > secretNumber) {
//     console.log("too high!");
// } else {
//     console.log("to low bro!");
// }




// Part 4
// function isEven(num) {
//     if (num % 2 !== 0) {
//         return false;
//     } else {
//         return true;
//     }
// }


// isEven(22);









// SCORE KEEPER


let playerOne = document.querySelector("#p1");
let playerTwo = document.querySelector("#p2");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let reset = document.querySelector("#reset");
let p1Score = 0;
let p2Score = 0;
let gameOver = winningScore;


p1.addEventListener("click", function(){
   if (!gameOver) {
    p1Display.textContent = p1Score++;
   } else {
       alert("player one is the winner!");
   }  
});



p1.addEventListener("click", function(){
    // p1.classList.toggle("purple");
    p1Display.textContent = p1Score++;
});


p2.addEventListener("click", function(){
    p2Display.textContent = p2Score++;
});


reset.addEventListener("click", function(){
    p1Display.textContent = 0;
    p2Display.textContent = 0;
});