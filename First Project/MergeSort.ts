function merge(arr: number[], l: number, m: number, r: number) {
  let i, j, k;
  let n1 = m - l + 1;
  let n2 = r - m;

  let L = [];
  let R = [];

  for (i = 0; i < n1; i++) {
      L[i] = arr[l + i];
  }
  for (j = 0; j < n2; j++) {
      R[j] = arr[m + 1 + j];
  }

  i = 0;
  j = 0;
  k = l;

  while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
      } else {
          arr[k] = R[j];
          j++;
      }
      k++;
  }

  while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
  }

  while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
  }
}

function mergeSort(arr: number[]) {
  let currentSize;
  let leftStart;

  for (currentSize = 1; currentSize <= arr.length-1; currentSize = 2*currentSize) {
      for (leftStart = 0; leftStart < arr.length-1; leftStart += 2*currentSize) {
          let mid = leftStart + currentSize - 1;
          let rightEnd = Math.min(leftStart + 2*currentSize - 1, arr.length-1);
          merge(arr, leftStart, mid, rightEnd);
      }
  }

  return arr;
}

function mainFunction() {
  const A = [98,873,90,98,2,45,87,5,76,33,4435,66];
  
  const sortedA = mergeSort(A);
  console.log(sortedA);
  return;
}

mainFunction();
