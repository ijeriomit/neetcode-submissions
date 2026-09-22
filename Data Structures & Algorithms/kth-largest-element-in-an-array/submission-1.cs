public class Solution {
    public int FindKthLargest(int[] nums, int k) {
        PriorityQueue<int, int> pq = new PriorityQueue<int, int>(Comparer<int>.Create((a,b)=>b-a));

        foreach(int num in nums){
            pq.Enqueue(num, num);
        }
        for(int i = 1; i < k; i++){
            Console.WriteLine(i);
            pq.Dequeue();
        }
        return pq.Dequeue();
    }
}
