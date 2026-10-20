/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        let graph = null;
        const queue = [node];
        let head = 0;
        const createdNodes = new Map();
        while(head < queue.length ){
            graph = createdNodes.has(queue[head].val) ? createdNodes.get(queue[head].val) : new Node(queue[head].val);
            // console.log("Created node while: ", graph, "queue: ", queue, "head: ", head);
            createdNodes.set(graph.val, graph);
            for(const n of queue[head].neighbors){
                if(!createdNodes.has(n.val)) {
                    const created = new Node(n.val);
                    graph.neighbors.push(created);
                    queue.push(n);
                    createdNodes.set(created.val, created );
                    // console.log("Created node: ", created, "queue: ", queue, "head: ", head);
                } else {
                    graph.neighbors.push(createdNodes.get(n.val))
                    // console.log("added neighbor ", createdNodes.get(n.val), "queue: ", queue, "head: ", head);
                }
            }
            head++;
        }

        return createdNodes.get(node.val);
    }
}
