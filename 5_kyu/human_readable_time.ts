// https://www.codewars.com/kata/52685f7382004e774f0001f7

export function humanReadable(seconds:number):string {
    return ([
      ~~(seconds/3600),
      ~~((seconds%3600)/60),
      seconds%60
    ].map(d => d.toString().padStart(2,"0")).join(':'));
}