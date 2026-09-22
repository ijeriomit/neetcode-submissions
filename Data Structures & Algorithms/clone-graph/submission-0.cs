/*
// Definition for a Node.
public class Node {
    public int val;
    public IList<Node> neighbors;

    public Node() {
        val = 0;
        neighbors = new List<Node>();
    }

    public Node(int _val) {
        val = _val;
        neighbors = new List<Node>();
    }

    public Node(int _val, List<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

public class Solution {
    public Node CloneGraph(Node node) {
        Dictionary<Node, Node> map = new Dictionary<Node,Node>();
        return AddNodes(node, map);
    }
    private Node AddNodes(Node node, Dictionary<Node, Node> map) {
        if(node == null) {
            return null;
        }
        if(map.ContainsKey(node)) {
            return map[node];
        }
        Node newNode = new Node(node.val);
        map[node] = newNode;
        foreach(Node neighbor in node.neighbors) {
            newNode.neighbors.Add(AddNodes(neighbor, map));
        }
        return newNode;
    }
}
