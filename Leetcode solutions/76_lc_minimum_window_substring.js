/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return '';

  let mapT = {};
  let window = {};

  for (const c of t) {
    mapT[c] = 1 + (mapT[c] ? mapT[c] : 0);
  }

  let have = 0,
    need = Object.values(mapT).length;

  let start_index = 0;
  let end_index = s.length - 1;
  let min_length = s.length;

  found = false;

  let l = 0;

  for (let r = 0; r < s.length; r++) {
    let c = s[r];

    let in_need = mapT[c];

    if (in_need > 0) {
      window[c] = 1 + (window[c] ? window[c] : 0);
      if (window[c] === in_need) {
        have++;
      }
    }

    while (have === need) {
      found = true;

      let length = r - l + 1;
      if (length < min_length) {
        start_index = l;
        end_index = r;
        min_length = length;
      }

      let c = s[l];

      l++;
      let in_have = window[c];
      if (in_have > 0) {
        in_have--;
        window[c] = in_have;

        if (in_have < mapT[c]) {
          have--;
        }
      }
    }
  }

  return found ? s.slice(start_index, end_index + 1) : '';
};
