// https://www.codewars.com/kata/54da539698b8a2ad76000228

export function isValidWalk(walk: string[]): boolean {
    const scores: { [key: string]: number} = { 'n': 0, 'w':0, 's':0, 'e':0};
    walk.map(d => scores[d]++);
    return ( scores['n']===scores['s'] && scores['e']===scores['w'] && walk.length ===10)?true:false;
  }