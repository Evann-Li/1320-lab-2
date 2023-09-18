//import lab-two.js
const labTwo = require('./lab-two.js')

var readlineSync = require("readline-sync");


function getDayOfTheWeekForUserDate(){
    //ask user for month, day, year
    let month = readlineSync.question("What month? ");
    let day = parseInt(readlineSync.question("What day? "));
    let year = readlineSync.question("What year? ");

    //plug user input into getDayOfTheWeek function
    const dayOfWeek = labTwo.getDayOfTheWeek(year, month, day);
    //output
    console.log(`${month} ${day} ${year} is a ${dayOfWeek}`);
}

//print calendar for year 2022
labTwo.makeCalendar(2022)
getDayOfTheWeekForUserDate()