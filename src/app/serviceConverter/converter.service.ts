import { Injectable } from '@angular/core';
import { RomanNumbers } from '../models/RomanNumber';

@Injectable()
export class Converter {
  public result;
  public convertToInteger: any;

  public romanNumbers: RomanNumbers = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  // Range checker -- Only support numbers between 1 and 3999
  isOutOfRange(num: number) {
    const min = 1;
    const max = 3999;
    return num < min || num > max;
  }

  // Data checker -- Check if the data enter is strictly a Number format
  DataValidation(num: number) {
    if (typeof num === 'number') {
      return num;
    } else {
      return 'Please enter number in order to convert to Roman Numerals';
    }
  }

  RomanFormula(num: number) {
    this.result = '';
    this.convertToInteger = Math.floor(num);

    for (const key of Object.keys(this.romanNumbers)) {
      while (this.convertToInteger >= this.romanNumbers[key]) {
        this.result += key;
        this.convertToInteger -= this.romanNumbers[key];
      }
    }
    return this.result;
  }
}
