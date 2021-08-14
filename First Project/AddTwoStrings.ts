export {}

function addStrings(num1: string, num2: string): string {
  
  let carry = 0;
  
  let max_length = 0, min_length = 0;
  let max: string;
  let min: string
  
  if(num1.length > num2.length){
    max_length = num1.length;
    min_length = num2.length;
    
    max = num1;
    min = num2;
  } else {
    max_length = num2.length;
    min_length = num1.length;
    
    max = num2;
    min = num1;
  }
  
  let j = max_length - 1;
  
  let sum = ""
  
  for (let i=min_length-1; i>=0; i--){
    let n1 = min[i];
    let n2 = max[j];
    
    let s: any = carry + Number(n1) + Number(n2);
    
    s = s.toString();
    
    if(s.length > 1){
      s = s.split("");
      carry = Number(s[0]);
      s = s[1];
    } else carry = 0;
    
    sum = s + sum;

    j--;
  }
  
  if(j >= 0){
    while(carry > 0 && j>=0){
      let n = max[j];
      
      let s: any = carry + Number(n);
      s = s.toString();
      
      if(s.length > 1){
        s = s.split("");
        carry = Number(s[0]);
        s = s[1];
      } else carry = 0;
      
      sum = s + sum;
      
      j--;
      
    }
    
    if(j >= 0){
      let s = max.substr(0, j+1);
      sum = s + sum;
    }
  }
  
  if(carry > 0){
    sum = carry.toString() + sum;
  }
  
  return sum;

};