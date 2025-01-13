import { Injectable, signal } from '@angular/core';


const operators = ['+', '-', 'x', '÷',];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialOperators = ['%', '+/-', '.', '=', 'C', 'Backspace'];

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  public resultText = signal('0');
  public subResultText = signal('0');
  public lastOperator = signal('+');

  public constructNumber(value: string) {
    //validate input
    if (![ ...numbers, ...operators, ...specialOperators].includes(value)) {
      console.error('Invalid input', value);
      return;
    }

    //=
    if (value === '=') {
      this.calculateResult();
      return;
    }

    //C
    if (value === 'C') {
      this.resultText.set('0');
      this.subResultText.set('0');
      this.lastOperator.set('+');
      return;
    }

    //backspace
    if (value === 'Backspace') {
      if (this.resultText() === '0') return;
      // if (this.resultText() === '-0') {
      //   this.resultText.set('0');
      //   return;
      // }

      if (this.resultText().includes('-') && this.resultText().length === 2) {
        this.resultText.set('0');
        return;
      }

      if (this.resultText().length === 1) {
        this.resultText.set('0');
        return;
      }
      this.resultText.update((prev) => prev.slice(0, -1));
      return;
    }

    // operators
    if (operators.includes(value)) {
      this.calculateResult();

      this.lastOperator.set(value);
      this.subResultText.set(this.resultText());
      this.resultText.set('0');
      return;
    }

    // limit number of digits
    if (this.resultText().length >= 10) {
      console.error('Max number of digits reached');
      return;
    };

    // validate decimal point
    if (value === '.' && !this.resultText().includes('.')) {
      if (this.resultText() === '0' || this.resultText() === '') {
        this.resultText.set('0.');
        return;
      }

      this.resultText.update((prev) => prev + '.');
      return;
    }

    // intial zero
    if (value === '0' && (this.resultText() === '0' || this.resultText() === '-0')) return;

    // change sign
    if (value === '+/-') {
      if (this.resultText().includes('-')) {
        this.resultText.update((prev) => prev.slice(1));
        return;
      }

      this.resultText.update((prev) => '-' + prev);
      return;
    }

    // numbers
    if(numbers.includes(value)) {

      if( this.resultText() === '0') {
        this.resultText.set(value);
        return;
      }

      if (this.resultText() === '-0') {
          this.resultText.set('-' + value);
          return;
      }

      this.resultText.update((prev) => prev + value);
      return;
    }
  }

  public calculateResult() {
    const number1 = parseFloat(this.subResultText());
    const number2 = parseFloat(this.resultText());
    const operator = this.lastOperator();

    let result = 0;

    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case 'x':
        result = number1 * number2;
        break;
      case '÷':
        result = number1 / number2;
        break;
      default:
        console.error('Invalid operator');
        break;
    }

    this.resultText.set(result.toString());
    this.subResultText.set('0');
    this.lastOperator.set('+');
  }
}
