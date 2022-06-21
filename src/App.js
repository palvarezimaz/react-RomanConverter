import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Roman from './Calculator';
import RomanToNumeral from './RomanToNumeral';
// import NumeralToRoman from './NumeralToRoman';

class App extends React.Component {
  state = {
    number: '',
    correct: '',
    roman: '',
  };

  romanToNumeral = (event) => {
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
    // const number = this.state.number;
    // console.log(number);
    const romanNumber = this.state.number.toUpperCase().split('');
    console.log(romanNumber);
    for (let i = 0; i < romanNumber.length; i++) {
      if (
        romansToNumbers[romanNumber[i + 1]] > romansToNumbers[romanNumber[i]]
      ) {
        result +=
          romansToNumbers[romanNumber[i + 1]] - romansToNumbers[romanNumber[i]];
        i++;
      } else {
        result += romansToNumbers[romanNumber[i]];
      }
    }
    const convertedNumber = result;
    this.setState({
      number: '',
      roman: convertedNumber,
      correct: '',
    });
  };

  checkRoman = (event) => {
    const number = event.target.value;
    const romanNumber = number.toUpperCase();
    const romanNumeralRegex = new RegExp(
      /^M{0,9}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
    );

    // function setState() {
    //   this.setState({ correct: ' ', number: romanNumber });
    // }
    if (!romanNumeralRegex.test(romanNumber)) {
      this.setState({
        correct: 'The number is not correct',
      });
    } else {
      this.romanToNumeral(romanNumber);
      this.setState({
        number: romanNumber,
        correct: 'Analizing... Computing... Your number is:',
      });
      // setTimeout(setState, 3000);
    }
  };

  render() {
    return (
      <div className="App">
        <main>
          <h1>Welcome to the Roman-Numeral converter</h1>
          <fieldset>
            <label htmlFor="">Number to convert:</label>
            <input
              type="text"
              className="number-input"
              value={this.state.number}
              onChange={this.checkRoman}
            />
            {/* <button onClick={this.romanToNumeral}>Make it legible!</button> */}
          </fieldset>
          <p>{this.state.correct}</p>

          <p>{this.state.roman}</p>
          {/* <button onClick={NumeralToRoman}>Romanize!</button> */}
        </main>
      </div>
    );
  }
}
export default App;
