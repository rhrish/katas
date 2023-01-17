// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

export function duplicateEncode(word:string): string{
    word = word.toLowerCase();
    if (new Set(word).size === word.length) return "(".repeat(word.length);
    let final_word: string = "";
    for(let c of word) {
      let pattern = new RegExp(c.replace(/[^A-Za-z0-9_]/g, '\\$&'),"g");
      if(Array.from(word.matchAll(pattern)).length >1) {
        final_word+=")";
      } else {
        final_word+="(";
      }   
    }
    return final_word;
}