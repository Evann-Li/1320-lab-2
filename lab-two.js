function getDayOfTheWeek(year, month, day) {
    //change year to make it a string
    const yearString = year.toString();
    //get the last two digits of year
    const lastTwoDigits = yearString.slice(-2);
    //last two digits/12 and take the round down (in case the decimal is 0.5+)
    const twelves = Math.floor(lastTwoDigits/12);
    // get the remainder of the last two digits/12
    const twelvesRemainder = lastTwoDigits%12
    //get the remainder from divsion by 12 and divide it by 4, take the round down
    const foursRemainder = Math.floor(twelvesRemainder/4)
    
    //testing
    // console.log(twelves)
    // console.log(twelvesRemainder)
    // console.log(foursRemainder)

    //monthCode to determine number for month, takes in account if year is a leap year
    let monthCode = 0
    if (month == "January" && isLeapYear(year) == false){
        monthCode = 1
    } else if (month == "January" && isLeapYear(year) == true){
        monthCode = 0
    } else if (month == "February" && isLeapYear(year) == false){
        monthCode = 4
    } else if (month == "February" && isLeapYear(year) == true){
        monthCode = 3
    } else if (month == "March"){
        monthCode = 4
    } else if (month == "April"){
        monthCode = 0
    } else if (month == "May"){
        monthCode = 2
    } else if (month == "June"){
        monthCode = 5
    } else if (month == "July"){
        monthCode = 0
    } else if (month == "August"){
        monthCode = 3
    } else if (month == "September"){
        monthCode = 6
    } else if (month == "October"){
        monthCode = 1
    } else if (month == "Novemeber"){
        monthCode = 4
    } else {
        monthCode = 6
    } 

    //add to month code depending on century
    let century = yearString.substring(0,2)
    if (century == 16){
        monthCode += 6
    } else if (century == 17){
        monthCode += 4
    } else if (century == 18){
        monthCode += 2
    } else if (century == 20){
        monthCode += 6
    } else if (century == 21){
        monthCode += 4
    } 
    // console.log('Month code is', monthCode)
    
    //total
    const total = (twelves + twelvesRemainder + foursRemainder + day + monthCode) % 7
    // console.log(total)

    //determine which day of the week it is based on calculated total
    let dayOfWeek = null

    if (total == 0){
        dayOfWeek = "Saturday"
    } else if (total == 1){
        dayOfWeek = "Sunday"
    } else if (total == 2){
        dayOfWeek = "Monday"
    } else if (total == 3){
        dayOfWeek = "Tuesday"
    } else if (total == 4){
        dayOfWeek = "Wednesday"
    } else if (total == 5){
        dayOfWeek = "Thursday"
    } else{
        dayOfWeek = "Friday"
    } 

    return dayOfWeek

}

// Function to check if a year is a leap year
function isLeapYear(year){
    //must be divisible by 100 and by 400
    if (year % 100 == 0 && year % 400 == 0){
        return true
    //if not divisible by 400, then not a leap year (ex.1700)
    } else if (year % 400 != 0){
        return false
    //if divisible by 4, then leap year
    } else if (year % 4 == 0){
        return true
    } else{
        return false
    }
}
function makeCalendar(year) {

    //get number of days in a month
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      }

    //get name of the month
    function getMonthName(month) {
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ];
      return monthNames[month - 1];
    }
  
    //loop through each month
    for (let month = 1; month <= 12; month++) {
      //get number of days in the current month
      const numDays = getDaysInMonth(year, month);
      
  
      //loop through each day of the month
      for (let day = 1; day <= numDays; day++) {
        // calculate day of the week for the current day
        const dayOfWeek = getDayOfTheWeek(year, getMonthName(month), day);
  
        const formattedDate = `${day}-${month}-${year} is a ${dayOfWeek}`;

      //print formatted date
        console.log(formattedDate);
        }
      }
}

//makeCalendar("2019"); // Print the calendar for the year _____
//console.log(getDayOfTheWeek("1600", "January", 1)) //Get day of week for _______


//export getDayOfTheWeek and makeCalendar functions
module.exports = { getDayOfTheWeek, makeCalendar };