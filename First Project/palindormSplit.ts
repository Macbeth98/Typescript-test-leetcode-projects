export {};

function revString(s: string): string {
  return s.split("").reverse().join("");
}

function checkPalindrome(s: string): number {
  if(s === revString(s)) return 1;
  else return 0;
}

function minCut(s: string): number {
  
  let rev = revString(s);
  
  if(rev === s) return 0;
  
  if(s.length === 2) return 1;

  let min_cuts = s.length;

  let count: number;
  
  for (let i=0; i<s.length; i++){
    for (let k = i+1; k < s.length; k++) {
      let s1 = s.substr(i, k);
      let s2 = s.substr(k);
      console.log(s1, s2);
      count = checkPalindrome(s1) + checkPalindrome(s2) + 1;
      console.log(count);
      min_cuts = Math.min(count, min_cuts);
      console.log(min_cuts);
    }
    console.log('I done....', i);
  }
  
  return min_cuts;
};