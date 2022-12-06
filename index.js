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

var date = {
  day: 5,
  month: 9,
  year: 2020
}


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

// convertDateToString(date)