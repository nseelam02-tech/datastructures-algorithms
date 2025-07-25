// TC: O(h) SC: O(1)

function lowestCommonAncestor(root, p, q) {
  if (!root || !p || !q) return null;
  let currNode = root;

  while (currNode !== null) {
    if (currNode.value > p.value && currNode.value > q.value) {
      currNode = currNode.left;
    } else if (currNode.value < p.value && currNode.value < q.value) {
      currNode = currNode.right;
    } else {
      return currNode;
    }
  }
  return null;
}

// Recursive solution
function lowestCommonAncestorRecursive(root, p, q) {
  if (!root || !p || !q) return null;
  if (root.value > p.value && root.value > q.value) {
    return lowestCommonAncestorRecursive(root.left, p, q);
  } else if (root.value < p.value && root.value < q.value) {
    return lowestCommonAncestorRecursive(root.right, p, q);
  } else {
    return root;
  }
}

class TreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

let root1 = new TreeNode(5);
root1.left = new TreeNode(1);
root1.right = new TreeNode(8);
root1.left.left = new TreeNode(0);
root1.left.right = new TreeNode(2);
root1.right.left = new TreeNode(7);
root1.right.right = new TreeNode(9);

console.log(
  lowestCommonAncestor(root1, new TreeNode(0), new TreeNode(2)).value
);
console.log(
  lowestCommonAncestor(root1, new TreeNode(8), new TreeNode(9)).value
);
console.log(
  lowestCommonAncestorRecursive(root1, new TreeNode(0), new TreeNode(2)).value
);
console.log(
  lowestCommonAncestorRecursive(root1, new TreeNode(8), new TreeNode(9)).value
);
