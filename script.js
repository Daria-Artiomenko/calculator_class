'use strict';

class Calculator {
    constructor(x, y) {
      if (isNaN(x) || isNaN(y) || !isFinite(x) || !isFinite(y)) {
        throw new Error('Invalid number provided');
      }
      this.x = x;
      this.y = y;
  
      this.logSum = () => this.x + this.y;
      this.logSub = () => this.x - this.y;
      this.logMul = () => this.x * this.y;
      this.logDiv = () => {
        if (this.y === 0) {
          throw new Error('Division by zero');
        }
        return this.x / this.y;
      };
    }
  
    setX(x) {
      if (isNaN(x) || !isFinite(x)) {
        throw new Error('Invalid number provided');
      }
      this.x = x;
    }
  
    setY(y) {
      if (isNaN(y) || !isFinite(y)) {
        throw new Error('Invalid number provided');
      }
      this.y = y;
    }
}


const calculator = new Calculator(10, 5);

// const calculator = new Calculator(2, 'gdsh');
// const calculator = new Calculator(2, 0);
// const calculator = new Calculator(Infinity, 2);

const logSumRef = calculator.logSum;
const logSubRef = calculator.logSub;
const logMulRef = calculator.logMul;
const logDivRef = calculator.logDiv;

console.log(logSumRef()); 
console.log(logSubRef()); 
console.log(logMulRef()); 
console.log(logDivRef()); 
