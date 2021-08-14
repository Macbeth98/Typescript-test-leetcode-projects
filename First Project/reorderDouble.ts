export {};

function canReorderDoubled(arr: number[]): boolean {

  let can_reorder = true;

  arr.sort((a, b) => {
    return Math.abs(a) - Math.abs(b);
  });

  let mapped: Map<number, number> = new Map();

  for (let i=arr.length - 1; i >= 0; i--){
    let val = arr[i];
    let double_val = val * 2;

    let mapVal = mapped.get(double_val);

    if(!mapVal) {
      let mv = mapped.get(val);
      if(mv !== undefined) mapped.set(val, mv + 1)
      else mapped.set(val, 1);

      continue;
    }

    mapVal = mapVal - 1;

    if(mapVal === 0) mapped.delete(double_val);
    else mapped.set(double_val, mapVal);

  }

  if(mapped.size > 0) can_reorder = false;

  return can_reorder;

};