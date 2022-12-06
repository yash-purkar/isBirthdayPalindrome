function reverseStr(str) {
  var listOfChars = str.split('');
  var reverseListOfChars = listOfChars.reverse();
  var reversedStr = reverseListOfChars.join('');
  return reversedStr;
}
// console.log(reverseStr("hii"));


function isPalindrome(str) {
  var reverse = reverseStr(str);

  if (str === reverse) {
    return true;
  }
  return false;
}
// console.log(isPalindrome("yashhsay"));


// converting day from number to sting and adding 0 before date if < 10
function convertDateToString(date) {
  var dateStr = { day: '', month: '', year: '' }
  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  }
  else {
    dateStr.year = date.day.toString();
  }

  // with month
  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  }
  else {
    dateStr.month = date.month.toString();
  }

  // with year
  dateStr.year = date.year.toString();

  return dateStr;
}

var date = {
  day: 31,
  month: 12,
  year: 2020
}
// console.log(convertDateToString(date));



// date formats
function getAllDateFormats(date) {
  var dateStr = convertDateToString(date)

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);;
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

// console.log(getAllDateFormats(date));



function getPalindromeForAllDateFormat(date) {
  var listOfPalindromes = getAllDateFormats(date);
  var palindrome = false;

  for (let i = 0; i < listOfPalindromes.length; i++) {
    // isPalindrome function will return true or false if true run this:
    if (isPalindrome(listOfPalindromes[i])) {
      palindrome = true;
      break;
    }
  }
  return palindrome;
}

// console.log(getPalindromeForAllDateFormat(date));
// If the date is palindrome it will return true else it will return false;



// function for checking leap year or not
function checkLeapYear(year) {
  if (year % 100 === 0 || year % 4 === 0) {
    return true;
  }
  if (year % 4 === 0) {
    return false;
  }
  return false
}
// console.log(checkLeapYear(2000));
// console.log(checkLeapYear(2001))




// For getting next date
// suppose date is 14-09-2002 it will give 15-09-2002;
// 31-12-2020 => 01-01-2021

function getNextDate(date) {
  var day = date.day + 1;

  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Jan - Dec
  // 0   - 11 bcz of an array. 


  // This is for only november
  // if month is february , checking leap year
  if (month === 2) {

    if (checkLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month = month + 1;
      }
      else if (day > 28) {
        day = 1;
        month = month + 1;
      }
    }
  }

  // If it's not feburary, for other months
  else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month = month + 1;
    }
  }

  // If month become 13 we will make it 1 of next year;
  if (month > 12) {
    year = year + 1;
    month = 1;
    day = 1;
  }

  return {
    day: day,
    month: month,
    year: year
  }

}

// console.log(getNextDate(date))

