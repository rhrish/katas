// https://www.codewars.com/kata/54ba84be607a92aa900000f1

export function isIsogram(str: string): boolean{
    for (let c of str) {
      let pattern = new RegExp(c, "gi");
      let matches = Array.from(str.matchAll(pattern));
      console.log(matches);
      if(matches.length > 1) return false;
    }
    return true;
  }
