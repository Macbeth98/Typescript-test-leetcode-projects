
export {};

class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = (val===undefined ? 0 : val)
    this.children = []
  }
}

function getNodeChildren(levelvals: number[][], node: Node, pl: number): void {
  let cl = pl + 1;
  let children = node.children;

  if(children.length > 0){
    if(!levelvals[cl]) levelvals[cl] = [];
  } else return ;

  for (const ch_node of children){
    levelvals[cl].push(ch_node.val);
    if(ch_node.children.length > 0){
      getNodeChildren(levelvals, ch_node, cl);
    }
  }

  return ;

}

function levelOrder(root: Node | null): number[][] {
	
  let levelvals: number[][] = [];

  if(!root) return levelvals;

  let pl = 0;
  levelvals[pl] = [root.val];

  if(root.children.length > 0){
    getNodeChildren(levelvals, root, pl);
  }

  return levelvals;

};