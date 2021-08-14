
function subsetsWithDup(nums: number[]): number[][] {

  let sets: number[][] = [];

  const length = nums.length;

  const combinations = 2 ** length;

  let numObj: any = {}

  for (let i=0; i<combinations; i++){
    let set = [];
    for (let si=0; si<length; si++) {
      if(i & (1 << si)){
        set.push(nums[si]);
      }
    }
    let str = set.join("");
    if(numObj[str]) continue;
    numObj[str] = 1;
    numObj[str.split("").reverse().join("")] = 1;
    sets.push(set);
  }

  return sets;
};

export {}