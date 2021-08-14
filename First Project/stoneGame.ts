export {};

interface player {
  "1": number;
  "-1": number
}

// [3,2,10,4]

function stoneGame(piles: number[]): boolean {

  let length = piles.length;

  let p1_sum_even = 0;
  let p1_sum_odd = 0;


  for (let i=0; i<length; i++){
    if(i%2 === 0){
      p1_sum_even = p1_sum_even + piles[i];
    } else p1_sum_odd = p1_sum_odd + piles[i];
  }

  return p1_sum_even !== p1_sum_odd
};