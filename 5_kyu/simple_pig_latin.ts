// https://www.codewars.com/kata/520b9d2ad5c005041100000f

export const pigIt = (a : string) : string =>  {
    return a.split(' ').map(w => w.replace(/^([a-zA-Z0-9]{1})(.*)/g, "$2$1ay")).join(' ');
}