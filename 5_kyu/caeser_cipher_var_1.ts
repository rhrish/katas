// https://www.codewars.com/kata/5508249a98b3234f420000fb

export const movingShift = (s: string, shift: number): string[] => {
    let result: string[] = ["","","","",""];
    let sum: number;
    let current_shift:number = shift;
    let start=0;
    for(let i=0;i<5;i++) {
      sum = result.join('').length;
      if(sum + Math.ceil(s.length/5) < s.length) {
        result[i] = s.substr(start, Math.ceil(s.length/5));
        start+=Math.ceil(s.length/5);
      } else {
        result[i] = s.substr(start,s.length-sum);
      }
      // Encoding
      let result_string = "";
    
      for(let c of result[i]) {
        let orig_c = c;
        if(/[a-zA-Z]/g.test(c)) {
          c = String.fromCharCode(c.charCodeAt(0) + (current_shift%26));
          
          if(/[A-Z]/g.test(orig_c) && /[a-z]/g.test(c)) {
            c = String.fromCharCode(c.charCodeAt(0) - 26);
          }
          if(/[^a-zA-Z]/g.test(c)) {
            c = String.fromCharCode(c.charCodeAt(0) - 26);
          }
        }
        result_string += c;
        current_shift++;
      }
      result[i] = result_string;
      
    }
    return(result);
  }
  
  export const demovingShift = (arr:string[], shift:number): string => {
    let s:string = arr.join('');
    let result_string = "";
    let current_shift:number = shift;
    for(let c of s) {
      let orig_c = c;
      if(/[a-zA-Z]/g.test(c)) {
        c = String.fromCharCode(c.charCodeAt(0) - (current_shift%26));
  
        if(/[a-z]/g.test(orig_c) && /[A-Z]/g.test(c)) {
          c = String.fromCharCode(c.charCodeAt(0) + 26);
        }
        if(/[^a-zA-Z]/g.test(c)) {
          c = String.fromCharCode(c.charCodeAt(0) + 26);
        }
      }
      
      result_string += c;
      current_shift++;
    }
    return result_string;
  }
  
  export function getDivisionLength(n: number): number[] {
    let result: number[] = [0,0,0,0,0];
    let sum: number;
    for(let i=0;i<5;i++) {
      sum = result.reduce((a,b) => a+b);
      if(sum + Math.ceil(n/5) <n) {
        result[i] = Math.ceil(n/5);
      } else {
        result[i] = n-sum;
      }
    }
    return(result);
  }