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
  day: 2,
  month: 2,
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

console.log(getPalindromeForAllDateFormat(date));
// If the date is palindrome it will return true else it will return false;