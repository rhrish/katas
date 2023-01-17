// https://www.codewars.com/kata/56c04261c3fcf33f2d000534

// Final solution

export function doubles(maxk:number, maxn:number):number {
    maxk = maxk;
    let rows: number[] = Array(maxn).fill(1);
    let sum = 0;
    let row_sum: number;
    for(let k=1;k<=maxk;k++) {
      row_sum = 0;
      rows = rows.map((v, i) => {
       let rval = v*(1/(((i+1)*(i+1)) + (2*(i+1)) + 1)); // 1/(n^2 + 2n +1)
       row_sum+= rval;
       return (rval);
      });
      if(((1/k)*row_sum)>=0.000001) {
        sum += (1/k)*row_sum;
      } else {
        break;
      }
    }
    return sum;
}


// Other solutions
export function oldDoubles(maxk:number, maxn:number):number {
  
    function _v(k: number, n:number) {
      return (Math.pow((n+1),-2*k));
    }
    
    function _sumColumn(k: number, N: number) {
      let total_sum: number = 0;
      for(let n=1; n<=N; n++) {
        total_sum += _v(k,n);
      }
      return(total_sum*(1/k));
    }
    
    function _sumRow(K: number, N: number) {
      let total_sum: number = 0;
      for(let k=1; k<=K; k++) {
        total_sum+= _sumColumn(k, N);
      }
      return total_sum;
    }
    
    return _sumRow(maxk, maxn);
  }
  
  // Slightly improved version, less lines, more loops, but saves a few milliseconds
  export function doubles2(maxk:number, maxn:number):number {
    let rows: number[] = Array(maxn).fill(1);
    let sum = 0;
  
    for(let k=1;k<=maxk;k++) {
      rows = rows.map((v, i) => v*(1/(i+2))*(1/(i+2)));  
      sum += (1/k)*rows.reduce((a,b) => a+b);
    }
    
    return sum;
  }
  