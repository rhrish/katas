// https://www.codewars.com/kata/5949481f86420f59480000e7

export function oddOrEven(array: number[]): string {
    if(array.length===0) return 'even';
    return (array.reduce((a,b)=>a+b)%2===0)?'even':'odd';
}