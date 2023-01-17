// https://www.codewars.com/kata/541c8630095125aba6000c00

export const digitalRoot = (n:number):number => {
    if(n>=10) {
      return digitalRoot(n.toString().split('').map(d => parseInt(d,10)).reduce((a,b) => a+b))
    } else return n;
};