/**
 * 
 * 104. Maximum Depth of Binary Tree
 * Easy
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:
Input: root = [1,null,2]
Output: 2
 
Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
 */

/**
 * Solved: 4/6/24
 * Runtime: 63ms, 40.56%
 * Memory: 51MB, 70.78%  
 * Acceptance Rate: 75.3%
 */


/**
 * 
 * @param {*} tree 
 * @param {*} depth 
 * @returns 
 */
var getDepth = (tree, depth) => {
    
    if (tree) {
        depth++;
        const leftDepth = getDepth(tree.left, depth);
        const rightDepth = getDepth(tree.right, depth);
        depth = (leftDepth > rightDepth) ? leftDepth : rightDepth;
    }
    return depth;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    const depth = getDepth(root, 0);

    return depth;
};