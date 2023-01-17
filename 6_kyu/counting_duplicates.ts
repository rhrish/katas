// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

export function duplicateCount(text: string):number{
    let letter_count: {[key: string]: number} = {};
    for(let c of text.toLowerCase()) {
      let pattern = new RegExp(c,"gi");
      letter_count[c] = 0;
      if (Array.from(text.matchAll(pattern)).length>1) letter_count[c]+=1;
    }
   return Object.entries(letter_count).map(e => (e[1]>0)?1:0).reduce<number>((a,b) => a+b,0);
}