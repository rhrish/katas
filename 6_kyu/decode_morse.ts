// https://www.codewars.com/kata/54b724efac3d5402db00065e

import { MORSE_CODE } from './preloaded'; // Preloaded is available on the challenge page.
export function decodeMorse(morseCode: string): string {
  let words: string[] = morseCode.split('   ');
  let sentence:string = words.map(w => w.trim().split(' ').map(l => MORSE_CODE[l.trim()]).join('')).join(' '); 
  return(sentence.trim());
}