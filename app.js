// var num1 = parseInt(prompt("Enter the first integer: "));
// var num2 = parseInt(prompt("Enter the second integer: "));

// if (num1 > num2) {
//     console.log("The larger number is: " + num1);
// } else if (num2 > num1) {
//     console.log("The larger number is: " + num2);
// } else {
//     console.log("Both numbers are equal.");
// }

number = prompt(input("Enter a number: "))

if ( number > 0 ){
    print("The number is positive.")
}
else if (number < 0){
    print("The number is negative.")
}
elseif
    print("The number is zero.");



    
    var inputChar = 'a'; // You can change the character here

  
    var isVowel = inputChar === 'a' || inputChar === 'e' || inputChar === 'i' || inputChar === 'o' || inputChar === 'u';
    
    // Print the result
    console.log(isVowel);

    
    var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}



//  Taking input from the user in 24-hour format
time = int(input("Enter the time in 24-hour format (e.g. 1900 for 7pm): "))

//  Checking the time and converting it to AM/PM format
if 0 <= time < 1200:
    print("The time in AM/PM format is: {}am".format(str(time).zfill(4)))
elif 1200 <= time < 1300:
    print("The time in AM/PM format is: {}pm".format(str(time).zfill(4)))
elif 1300 <= time < 2400:
    print("The time in AM/PM format is: {}pm".format(str(time - 1200).zfill(4)))
else:
    print("Invalid time input. Please enter a valid 24-hour format time.")



// Chapter 10 if statements 
// question no 1

var city = "Karachi";
if (city === "Karachi") {
    document.write("The City OF" + city)
}

// question no 2

if (x === y) {
    var  z = prompt("Please enter the value of z:");
    // Now variable z contains the value entered by the user
    // You can use the variable z in the subsequent code
}
// question no 3

    var zipCode = "10010";
    if (zipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

// question no 4

var num = 5;
if (num === 5) {
  num = 1;
}
document.write(num); // Output: 1


// Chapter 11 Comparison Operators
// question no 1

var num1 = 5;
var num2 = 10;

if (num1 != num2) {
document.write("num1 and num2 are not equal.");
}

// question no 2


if (num1 >= num2) {
    document.write("num1 and num2 are not equal.");

}

// question no 3


var num = 5;
if (num != 5) {
  num = 10;
}

// question no 4


var num = 10;
if (num != 5) {
  alert("Congratulations!");
}


// question no 5

var name1 = prompt("Please enter your first name:");
if (name1 != "John") {
  alert("No match");
}



// Chapter 12 if else and else if statements
// question no 1

var num1 = 10;
var num2 = 5;
if (num1 >= num2) {
  alert("num1 is greater than or equal to num2");
} else {
  alert("num1 is less than num2");
}


// question no 2

// Prompt the user to enter their marks
var marks = prompt("Enter your marks:");

// Convert the marks to a number
marks = Number(marks);

// Calculate the percentage
var percentage = (marks / 100) * 100;

// Assign a grade based on the percentage
if (percentage >= 80) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 50) {
  grade = "C";
} else {
  grade = "F";
}

// Display the percentage and grade
alert("Your percentage is " + percentage + "% and your grade is " + grade);



// question no 3

var a = 5;
if (a !== 10) {
  alert("The correct value of a is 10");
} else {
  alert("a is 10");
}



// question no 4


var city = prompt("Enter a city:");
if (city === "Karachi") {
  alert("It's Karachi!");
} else if (city === "Lahore")
  alert("It's Lahore!");
 else {
  alert("It's neither Karachi nor Lahore.");
}





// chapter no 13
// question no 1

if (a === b && c === d) {
    // Code to be executed if a equals b and c equals d
}











// chapter no 14

// Part 1 Question 

var  password = "examplePassword";
if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
}

// Part 2 Question 


if (a === 1) {
    if (c === "Max") {
      alert("OK");
    }
  }
  
// Part 3 Question 


if (a === 1 && c === "Max") {
    alert("OK");
}


// Part 4 Question 

// Declare two variables and assign them the same number value
var num1 = 5;
var num2 = 5;

// Test two conditions using nested if statements
if (num1 === num2) {
  if (num1 <= num2) {
    // Display an alert message if the test passes
    alert("The first variable is equal to and less than or equal to the second variable.");
  }
}





// Chapter no 9 to 11
// question no 1



var city = prompt("Enter your city:");
if (city === "Karachi"){
  alert("Welcome to city of lights");
}


// question no 2

var gender = prompt("Enter your gender (male or female):");
if (gender === "male")
  alert("Good Morning Sir");
 else if (gender === "female")
  alert("Good Morning Ma’am");
 else {
  alert("Invalid gender. Please enter either 'male' or 'female'.");
}

// question no 3


var color = prompt("Enter the color of the road traffic signal:").toLowerCase();
if (color === "red")
  alert("STOP");
 else if (color === "yellow")
  alert("READY");
else if (color === "green")
  alert("GO");
 else {
  alert("Invalid color. Please enter either 'red', 'yellow', or 'green'.");
}

 // question no 5









 // question no 6

 
var fuel = prompt("Enter the remaining fuel in your car (in liters):");
fuel = Number(fuel);
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
}

// question no 7

// Prompt the user to enter the marks obtained in three subjects and total marks
var sub1 = prompt("Enter marks obtained in subject 1:");
var sub2 = prompt("Enter marks obtained in subject 2:");
var sub3 = prompt("Enter marks obtained in subject 3:");
var totalMarks = prompt("Enter total marks:");

// Convert the input to numbers
sub1 = Number(sub1);
sub2 = Number(sub2);
sub3 = Number(sub3);
totalMarks = Number(totalMarks);

// Calculate the percentage
var percentage = ((sub1 + sub2 + sub))



// question no 8

// Store a secret number
var secretNumber = 5;

// Prompt the user to guess the secret number
var userGuess = prompt("Guess the secret number (between 1 and 10):");
userGuess = Number(userGuess);

// Check if the user's guess is correct or close to the correct answer
if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (userGuess === secretNumber - 1) {
  alert("Close enough to the correct answer");
} else {
  alert("Sorry, that's not the correct answer. Try again.");
}
    
    