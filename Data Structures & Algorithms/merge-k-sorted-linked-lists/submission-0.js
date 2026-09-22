/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length == 0 || lists == null){
            return null;
        }
        while(lists.length > 1){
            const mergedLists = [];
            for(let i =0; i < lists.length; i+=2){
                const list1 = lists[i];
                const list2 = i + 1 < lists.length ? lists[i + 1] : null;
                mergedLists.push(this.mergeLists(list1, list2));
            }
            lists = mergedLists;
        }
        return lists[0];
    }

    mergeLists(l1, l2){
        let mergedList = new ListNode(null);
        let head = mergedList;
        if(l1 == null && l2 == null){
            return mergedList.next;
        }
        
        while(l1 !== null && l2 !== null){
            if(l1.val <= l2.val){
                mergedList.next = l1;
                mergedList = mergedList.next;
                l1 = l1.next;
            } else {
                mergedList.next = l2;
                mergedList = mergedList.next;
                l2 = l2.next;
            }
        }
        if(l1 != null){
            mergedList.next = l1;
        } else if(l2 != null) {
           mergedList.next = l2;
        }
        return head.next;
    }
}
