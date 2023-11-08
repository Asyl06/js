// 1 // let Chalalenge = 30 // console.log(Chalalenge)

// 2 // let a = "Chalalenge" // console.log(a)

// 3

// let a = "Hello, World!"; // console.log(a.length);

// 4

// let a = "asylkhan" // console.log(a.toUpperCase())

// 5

// let a = "ASYLKHAN" // console.log(a.toLowerCase())

// 6

// let a = "30, Asyl"; // let firstWord = a.substr(0, a.indexOf(' ')); // console.log(firstWord);

// 7 // let a = "Asyl, 30"; // let firstWord = a.substr(0, a.indexOf(' ')); // console.log(firstWord);

// 8

// const str = "Мысалы, Script сөзін ішкі рет көрсететін стринг."; // const soz = "Script";

// if (str.includes(soz)) { // console.log("Стрингде '" + soz + "' сөзі табылды."); // } else { // console.log("Стрингде '" + soz + "' сөзі табылмады."); // }

// 9 // const a = "This is a sample string that we want to split"; // const b = a.split(' '); // console.log(b);

// 10

// const a = "30 Days of Javascript"; // const b = a.split(' '); // console.log(b)

// 11

// const a = "Facebok, Google, Microsoft, Apple, IBM, Amazonacle, Amazon" // const b = a.split(', ') // console.log(b)

// 12

// let a = "30 Days Of Javascript"; // a = a.replace("Javascript", "Python"); // console.log(a)

// 13

// let a = "30 Days of Javascript"; // let b = a.charAt(18); // console.log(b)

// 14

// let a = "30 Days Of JavaScript"; // let b = a.charCodeAt(15); // console.log(b)

// 15

// let a = "30 Days Of JavaScript" // let b = a.indexOf("J"); // console.log(b)

// 16

// let a = "30 Days Of JavaScript" // let b = a.lastIndexOf("S") // console.log(b)

// 17

// let a = "Бүгін ауа райы тамаша ия"; // let b = a.indexOf("ия"); // console.log(b);

// 18

// let a = "Бүгін ауылға баруым керек"; // let b = a.lastIndexOf("ауылға"); // console.log(b);

// 19

// let a = "Ертен сабақ барғой ия ема"; // let b = a.search("ема"); // console.log(b);

// 20

// let a = '30 Days Of javascript'; // let b = a.trim();
// console.log(b);

// 21

// let a = "30 Days of Javascript"; // let b = a.startsWith("30 Days"); // console.log(b)

// 22

// let a = "30 Days of Javascript"; // let b = a.endsWith("30 Days"); // console.log(b);

// 23

// let a = "30 Days of Javascript"; // let b = a.match(); // console.log(b);

// 24

// let a = "30 Days"; // let b = "Javascript"; // let v = a+b; // console.log(v);

// 25

// let a = "30 Days Javascript"; // let b = a.repeat(2); // console.log(b)

үшінші сабак

// 1

// let name = "Asylkhan" // let username = "Kaldybay" // let city = "Almaty" // let age = 30 // let year = 2006

// console.log("Data type of name:"+ typeof name) // console.log("Data type of username:"+ typeof username) // console.log("Data type of city:"+ typeof city) // console.log("Data type of age:"+ typeof age) // console.log("Data type of year:"+ typeof year)

// 2

// let isRaining = "10" // let numValue = 10 // typeof isRaining === typeof numValue // ? console.log('You need a rain coat.') // : console.log('No need for a rain coat.') // isRaining = false

// 3

// let isRaining = parseInt("9.8") // isRaining === 10 // ? console.log("parseInt('9.8') is equal to 10.") // : console.log("parseInt('9.8') is not equal to 10.") // isRaining = false

// 4 // let isTrue = true;
// let isFalse = false; // if (isTrue) { // console.log("This statement is executed because isTrue is true."); // } else { // console.log("This statement is not executed."); // }

// if (isFalse) { // console.log("This statement is not executed because isFalse is false."); // } else { // console.log("This statement is executed."); // }

// 5

// let a = 10; // let b = 5;

// let result = a > b;

// console.log(result);

///6

// let weather = 'sunny' // if (weather === 'rainy') { // console.log('You need a rain coat.') // } else if (weather === 'cloudy') { // console.log('It might be cold, you need a jacket.') // } else if (weather === 'sunny') { // console.log('Go out freely.') // } else { // console.log('No need for rain coat.') // }

// 1

// let userAge = prompt("Сенің жасың каншада ?");

// userAge = parseInt(userAge);

// if (userAge >= 18) { // console.log("You are old enough to drive."); // } else { // let yearsToWait = 18 - userAge; // if (yearsToWait === 1) { // console.log("You need to wait 1 more year to turn 18."); // } else { // console.log("You need to wait " + yearsToWait + " more years to turn 18."); // } // }

// 2

// let userAge = prompt("Сенің жасың каншада ?");

// userAge = parseInt(userAge);

// if (userAge >= 30) { // console.log("You are old enough to drive."); // } else { // let yearsToWait = 30 - userAge; // if (yearsToWait === 1) { // console.log("You need to wait 1 more year to turn 18."); // } else { // console.log("You need to wait " + yearsToWait + " more years to turn 30."); // } // }

// 3

// let a = 10 // let b = 8 // if (a > b ){ // console.log("а үлкенба б дан ") // } else{ // console.log("б үлкенба а дан") // }

// 4

// let number = 8;

// if (number % 2 === 0) { // console.log(number + ' is even.'); // } else { // console.log(number + ' is not even.'); // }

// 5

// let a = prompt("Enter the student's score:");

// score = parseFloat(a);

// let grade;

// if (score >= 90) { // grade = "A+"; // } else if (a >= 80) { // grade = "A"; // } else if (a >= 70) { // grade = "B"; // } else if (a >= 60) { // grade = "C"; // } else if (a >= 50) { // grade = "D"; // } else { // grade = "F"; // }

// console.log("The student's grade is: " + grade);

// 6

// let season = prompt("Казыр кай мезгіл:").toLowerCase();

// switch (season) { // case "Күз": // case "fall": // console.log("It's Күз."); // break; // case "қыс": // console.log("It's қыс."); // break; // case "көктем": // console.log("It's көктем."); // break; // case "жаз": // console.log("It's жаз."); // break; // default: // console.log("Жыл мезгілін қате енгізу. Күз, Қыс, Көктем немесе жазды көрсетіңіз."); // }

// 7

// let day = prompt("Enter a day (e.g., Monday, Tuesday, ...):").toLowerCase(); // switch (day) { // case "saturday": // case "sunday": // console.log(day + " is a weekend day."); // break; // case "monday": // case "tuesday": // case "wednesday": // case "thursday": // case "friday": // console.log(day + " is a working day."); // break; // default: // console.log("Invalid day input. Please enter a valid day of the week."); // }

// 8 // let month = parseInt(prompt("Enter a month (1-12):"));

// switch (month) { // case 1: // case 3: // case 5: // case 7: // case 8: // case 10: // case 12: // console.log("There are 31 days in this month."); // break; // case 4: // case 6: // case 9: // case 11: // console.log("There are 30 days in this month."); // break; // case 2: // console.log("There are 28 or 29 days in this month, depending on whether it's a leap year."); // break; // default: // console.log("Invalid month input. Please enter a valid month (1-12)."); // }
