function hashMap(queryType, query) {
  let map = new Map();

  let keySum = 0;
  let valueSum = 0;

  let getValue = 0;

  for (let i = 0; i < queryType.length; i++) {
    const qt = queryType[i];

    if (qt === 'insert') {
      let [key, val] = query[i];
      map.set(key - keySum, val - valueSum);
    } else if (qt === 'addToValue') {
      let [val] = query[i];
      valueSum += val;
    } else if (qt === 'addTokey') {
      let [key] = query[i];
      keySum += key;
    } else if (qt === 'get') {
      let [key] = query[i];
      key = key - keySum;
      getValue = map.get(key) + valueSum;
    }
  }

  return getValue;
}
