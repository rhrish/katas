// https://www.codewars.com/kata/54ba84be607a92aa900000f1

  export function isIsogram(str: string): boolean{
    if(str === "") return true;
    for(let c of str.toLowerCase()) {
      let pattern = new RegExp(c, "gi");
      if (Array.from(str.matchAll(pattern)).length > 1) return false;
    }
    return true;
  }