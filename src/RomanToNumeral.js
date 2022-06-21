function RomanToNumeral(number) {
  const romanNumeralRegex = new RegExp(
    /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
  );
  const numberToUppercase = number.toUpperCase();
  if (!romanNumeralRegex.test(numberToUppercase)) {
    return 'This number is wrong!';
  }
  const romansToNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  const numberToArray = number.split('');
  console.log(numberToArray);
  for (let i = 0; i < numberToArray.length; i++) {
    if (
      romansToNumbers[numberToArray[i + 1]] > romansToNumbers[numberToArray[i]]
    ) {
      result +=
        romansToNumbers[numberToArray[i + 1]] -
        romansToNumbers[numberToArray[i]];
      i++;
    } else {
      result += romansToNumbers[numberToArray[i]];
    }
  }
  return result;
}

export default RomanToNumeral;
