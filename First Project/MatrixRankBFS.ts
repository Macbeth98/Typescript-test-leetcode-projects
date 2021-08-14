export {};

function matrixRankTransform(matrix: number[][]): number[][] {
  
  let m = matrix.length;
  let n = matrix[0].length;

  let graphs: Map<number, Map<number, number[]>> = new Map();

  for (let i=0; i<m; i++){
    for (let j=0; j<n; j++) {
      let v = matrix[i][j];

      if(!graphs.has(v)){
        graphs.set(v, new Map<number, number[]>());
      }

      let graph = graphs.get(v);

      if(!graph) continue;

      if(!graph.has(i)){
        graph.set(i, []);
      }

      if(!graph.has(~j)){
        graph.set(~j, []);
      }

      graph.get(i)?.push(~j);
      graph.get(~j)?.push(i);

      console.log(graph);

    }
  }

  console.log('==================');

  console.log(graphs);

  console.log('===================');

  let value2index: Map<number, number[][][]> = new Map();

  let seen: number[][] = Array(m).fill(Array(n).fill(0));

  for (let i=0; i<m; i++){
    for (let j=0; j<n; j++){
      if(seen[i][j] ===  1) continue;

      seen[i][j] = 1;

      let v = matrix[i][j];

      let graph = graphs.get(v);

      let rowcols: Set<number> = new Set<number>();
      rowcols.add(i);
      rowcols.add(~j);

      let q: number[] = [];

      q.push(i);
      q.push(~j);

      while(q.length > 0){
        let node = q.shift();
        if(node === undefined) break;
        let rowcols_arr = graph?.get(node);
        if(rowcols_arr === undefined) continue;
        for (let rowcol of rowcols_arr) {
          if(!rowcols.has(rowcol)){
            rowcols.add(rowcol);
            q.push(rowcol);
          }
        }
      }

      let points: number[][] = [];

      for (let rowcol of rowcols){
        let rc_arr = graph?.get(rowcol);
        if(rc_arr === undefined) continue;

        for (let k of rc_arr){
          if(k >= 0){
            points.push([k, ~rowcol]);
            seen[k][~rowcol] = 1;
          } else {
            points.push([rowcol, ~k]);
            seen[rowcol][~k] = 1;
          }
        }
      }

      if(!value2index.has(v)){
        value2index.set(v, []);
      }

      value2index.get(v)?.push(points);
      
    }
  }

  console.log(seen);
  console.log(value2index);

  let answer: number[][] = Array(m).fill(Array(n).fill(0));
  let rowMax: number[] = [];
  let colMax: number[] = [];

  let keys = value2index.keys();

  for (let v of keys){
    let rank = 1;
    let points = value2index.get(v);
    if(points === undefined) continue;
    for (let point of points){
      rank = Math.max(rank, Math.max(rowMax[point[0][0]]), colMax[point[0][1]] + 1);
    }
    for (let point of points){
      answer[point[0][0]][point[0][1]] = rank;

      rowMax[point[0][0]] = Math.max(rowMax[point[0][0]], rank);
      colMax[point[0][1]] = Math.max(colMax[point[0][1]], rank);
    }
  }

  console.log('Final answer....');

  console.log(answer);

  return answer;
}

matrixRankTransform(
  [[20,-21,14],[-19,4,19],[22,-47,24],[-19,4,19]]
  // [[7,7],[7,7]]
  // [[1,2],[3,4]]
  // [[7,3,6],[1,4,5],[9,8,2]]
)