// https://www.codewars.com/kata/526571aae218b8ee490006f4

export function countBits(n: number): number {
    let b: number = 0;
    while(n>0) {
      if(n&1) b++;
      n=Math.floor(n/2);
    }
    return b;
}