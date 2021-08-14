class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

let nodeVals: number[][] = [];

function NodeSum(nums: number[], sum: number, node: TreeNode, targetSum: number): void {
  if(!node) return ;
  sum = sum + node.val;
  if(sum > targetSum){
    return ;
  } else if (sum === targetSum){
    nums.push(node.val);
    nodeVals.push(nums);
    return ;
  } else {
    nums.push(node.val);
    if(node.left) NodeSum(nums, sum, node.left, targetSum);
    if(node.right) NodeSum(nums, sum, node.right, targetSum);
    return ;
  }
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  
  let node = root;

  if(!node) return [];

  if(node.val === targetSum) return [[node.val]];
  
  if(node.val > targetSum) return [];

  let sum = 0;

  let nums: number[] = []

  nums.push(node.val);
  sum = sum + node.val;

  if(node.left) NodeSum(nums, sum, node.left, targetSum);
  if(node.right) NodeSum(nums, sum, node.right, targetSum);

  return nodeVals;
};

export {};
