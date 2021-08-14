export {};

function checkRank(rank_arr: number[], rank: number, num: number): number {
  let index = rank_arr.indexOf(rank);

  

  return rank;
}

function matrixRankTransform(matrix: number[][]): number[][] {

  let m = matrix.length;
  let n = matrix[0].length;

  let ranks: number[][] = Array(m).fill(Array(n).fill(0));

  let columns: number[][] = [];

  let rows: number[][] = [];

  for (let i=0; i<matrix.length; i++){
    let row = [...new Set(matrix[i])];

    row.sort((a, b) => a-b);
    rows.push(row);

    // if(i > column_length - 1) break;

    let column: number[] = [];

    let braked = false;
    
    for (let j=0 ; j<matrix.length; j++){
      if(matrix[j][i] === undefined){
        braked = true;
        break;
      }
      // if(column.indexOf(matrix[j][i]) >= 0) console.log('Leemnt alerwady there...', matrix[j][i]);
      // else 
      column.push(matrix[j][i]);
    }

    if(braked) break;

    column.sort((a, b) => a-b);
    columns.push(column);
  }

  // console.log(rows);
  // console.log(columns);

  let row_ranks: number[][] = [];
  let column_ranks: number[][] = [];

  for (let i=0; i<matrix.length; i++){
    let row = rows[i];
    if(!row_ranks[i]) row_ranks[i] = [];
    let rr_arr = row_ranks[i];

    for (let j=0; j<matrix[i].length; j++){
      let num = matrix[i][j];

      let print = false;

      // if([-19, 4, 19, 7, 6, 9].includes(num)) print = true;

      if(print) console.log('number..', num);

      let column = columns[j];
      if(print) console.log('column..', column);

      let row_rank = row.indexOf(num) + 1;
      let column_rank = column.indexOf(num) + 1;

      if(print) console.log('row rank..', row_rank, 'column rank...', column_rank);

      if(!column_ranks[j]) column_ranks[j] = [];
      let rc_arr = column_ranks[j];

      if(print) console.log('colum rank arr...', rc_arr);
      if(print) console.log('row rank arr...', rr_arr);

      let rank = Math.max(row_rank, column_rank);

      if(print) console.log('Row, column max rank...', rank);

      let ri = rr_arr.indexOf(rank);

      if(print) console.log('Final rank index in row rank arr...', ri);

      if(ri >= 0){
        if(print) console.log('Row rank Index found...', ri);
        let or1 = matrix[i][ri];
        if(print) console.log('or1...', or1, i, ri);
        if(or1 === num) {
          if(print) console.log('o1 an dnum equal...', or1, num);
          rr_arr[j] = rank;
        } else {
          if(num > or1) {
            if(print) console.log('num > or1...', num, or1);
            rank = rank + 1;
            let max_rank = Math.max(...rr_arr);
            if(print) console.log('max rank...', max_rank, 'rank...', rank);
            if(rank <= max_rank ) rank = max_rank + 1;
            if(print) console.log('Fianl max rank..', max_rank, 'final rank...', rank);
            rr_arr[j] = rank;
          } else {
            if(print) console.log('num < or1...', num, or1);
            for (let x=0; x<rr_arr.length; x++){
              if(rr_arr[x] >= rank) rr_arr[x] = rr_arr[x] + 1;
            }
            if(print) console.log('final rank...', rank);
            rr_arr[j] = rank;
          }
        }
      } else {
        if(print) console.log('Row rank index not found...', ri);
        if(print) console.log('FInal rank...', rank);
        rr_arr[j] = rank;
      }

      let ci = rc_arr.indexOf(rank);

      if(print) console.log('COlum syarrts from here..', i, j);

      if(print) console.log('Colum rank index...', ci);

      if(ci >= 0){
        if(print) console.log('COlum rank index found...', ci);
        let oc1 = matrix[ci][j];
        if(print) console.log('oc1...', oc1, ci, j);
        if(oc1 === num){
          if(print) console.log('oc1 and num are qual...', oc1, num);
          rc_arr[i] =  rank;
        } else {
          if(num > oc1){
            if(print) console.log('num > oc1...', num, oc1);
            rank = rank + 1;
            let max_rank = Math.max(...rc_arr);
            if(print) console.log('Max rank column...', max_rank);
            if(rank <= max_rank) rank = max_rank + 1;
            if(print) console.log('FInal max rank...', max_rank, 'fianl rank...', rank)
            rc_arr[i] = rank;
          } else {
            if(print) console.log('num < oc1...', num, oc1);
            for (let x=0; x<rc_arr.length; x++){
              if(rc_arr[x] >= rank) rc_arr[x] = rc_arr[x] + 1;
            }
            if(print) console.log('Final rank...', rank);
            rc_arr[i] = rank;
          }
        }
      } else {
        if(print) console.log('Column rank index not found...', ci);
        if(print) console.log('Final rank...', rank);
        rc_arr[i] = rank;
      }

      if(print) console.log('================================');
      if(print) console.log()

    }
  }

  // console.log(row_ranks);
  // console.log(column_ranks);

  for (let i=0; i<matrix.length; i++){
    let row = matrix[i];
    let rr_arr = row_ranks[i];
    ranks[i] = [];
    for (let j=0; j<row.length; j++){
      let num = matrix[i][j];
      let rc_arr = column_ranks[j];
      let rr = rr_arr[j];
      let cr = rc_arr[i];
      let rank = Math.max(rr, cr);
      let ri = rr_arr.indexOf(rank);

      while(ri >= 0){
        let r_num = matrix[i][ri];
        if(num === r_num) {
          ranks[i][j] = rank;
          ri = -1;
          break;
        } else if (num > r_num){
          rank = rank + 1;
          ranks[i][j] = rank;
          ri = rr_arr.indexOf(rank);
        } else {
          ranks[i][j] = rank;
          ranks[i][ri] = rank + 1;
          rr_arr[ri] = rank + 1;
          column_ranks[ri][i] = rank + 1;
          // console.log('update column rank also... in row...');
          ri = -1;
        }
      }

      // if(ri >= 0){
      //   let r_num = matrix[i][ri];
      //   if(num === r_num) {
      //     ranks[i][j] = rank;
      //   } else if (num > r_num){
      //     rank = rank + 1;
      //     ranks[i][j] = rank;
      //   } else {
      //     ranks[i][j] = rank;
      //     ranks[i][ri] = rank + 1;
      //     rr_arr[ri] = rank + 1;
      //   }
      // } else ranks[i][j] = rank;

      rr_arr[j] = rank;
      let frr = rank;

      let rci = rc_arr.indexOf(rank);

      while(rci >= 0){
        let c_num = matrix[rci][j];
        // console.log('cn umm...', c_num, 'rank...', rank);
        if(num === c_num){
          // console.log(num, c_num, 'num, cnum equla...');
          ranks[i][j] = rank;
          rci = -1;
          break;
        } else if (num > c_num){
          // console.log('num > cnum...', num, c_num);
          rank = rank + 1;
          ranks[i][j] = rank;
          rci = rc_arr.indexOf(rank);
        } else {
          // console.log('num < cnum...', num, c_num);
          ranks[i][j] = rank;
          ranks[rci][j] = rank + 1;
          rc_arr[rci] = rank + 1;
          row_ranks[rci][j] = rank + 1;
          // console.log('Updated column ranks data also....');
          // console.log('num.. rank..', rank)
          // console.log('cnum_ rank', rank + 1);
          rci = -1;
        }
      }

      rc_arr[i] = rank;

      let fcr = rank;


      // if(rci >= 0){
      //   let c_num = matrix[rci][j];
      //   console.log('cn umm...', c_num, 'rank...', rank);
      //   if(num === c_num){
      //     console.log(num, c_num, 'num, cnum equla...');
      //     ranks[i][j] = rank;
      //   } else if (num > c_num){
      //     console.log('num > cnum...', num, c_num);
      //     rank = rank + 1;
      //     ranks[i][j] = rank;
      //   } else {
      //     console.log('num < cnum...', num, c_num);
      //     ranks[i][j] = rank;
      //     ranks[rci][j] = rank + 1;
      //     rc_arr[rci] = rank + 1;
      //     console.log('num.. rank..', rank)
      //     console.log('cnum_ rank', rank + 1);
      //   }
      // } else ranks[i][j] = rank;

      // rank = Math.max(frr, fcr);

      ranks[i][j] = rank;

    }
  }

  // console.log()
  // console.log('===============');
  // console.log()

  // console.log(row_ranks);
  // console.log(column_ranks);
  // console.log('=========================');

  console.log(ranks);

  return ranks;
};

matrixRankTransform(
  [[20,-21,14],[-19,4,19],[22,-47,24],[-19,4,19]]
  // [[7,7],[7,7]]
  // [[1,2],[3,4]]
  // [[7,3,6],[1,4,5],[9,8,2]]
)