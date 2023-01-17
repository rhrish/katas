// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

export function persistence(num: number): number {
    let counter: number = 0;
    function _persistence(num: number) {
      if(num.toString().split('').length <=1) return;
      else {
        let result = num.toString().split('').map(d=>parseInt(d,10)).reduce((a,b) => a*b);
        counter++;
        _persistence(result);
      }
    }
    _persistence(num);      
    return counter;
}