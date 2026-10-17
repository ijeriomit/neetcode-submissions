/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        let isValid = true;
        const validate = (node, minVal, maxVal) => {
            if (!node || !isValid) {
                return;
            }


            if (node.val <= minVal || node.val >= maxVal) {
                isValid = false;
                return 
            }

            validate(node.left, minVal, node.val);
            validate(node.right, node.val, maxVal);
        };

        validate(root, -Infinity, Infinity);
        return isValid;

        }
    }

