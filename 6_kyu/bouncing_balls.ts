// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

export function bouncingBall(h: number, bounce: number, window: number): number {
    let current_bounce_height = bounce * h;
    let times = 1;
    if(h<0 || bounce <=0 || bounce >=1 || window>=h) return -1;
    while(current_bounce_height > window)  {
      times+=2;
      current_bounce_height *= bounce;
    } 
    return times;
}