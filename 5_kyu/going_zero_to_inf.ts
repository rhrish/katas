// https://www.codewars.com/kata/55a29405bc7d2efaff00007c

export function going(n: number): number {
    let sum = 1;
    let denom = 1;
    for(let i=n;i>1; i--) {
      denom *= i;
      if(1/denom < 0.00000001) break;
      sum+=1/denom;
    }
    return(parseFloat(sum.toString().replace(/(\d*)\.(\d{6})(\d*)/g, "$1.$2")))
}