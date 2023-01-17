// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

export class Kata {
    static validatePin(pin: string): boolean {
      return (pin.match(/(^\d{4}$)|(^\d{6}$)/g))?true:false;
    }
  }