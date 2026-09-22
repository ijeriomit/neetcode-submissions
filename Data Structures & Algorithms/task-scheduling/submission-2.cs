public class Solution {
    public int LeastInterval(char[] tasks, int n) {
        Dictionary<char, int> charMap = new Dictionary<char, int>();
        foreach(char task in tasks){
            if(charMap.ContainsKey(task)){
                charMap[task] = charMap[task] + 1;
            } else {
                charMap.Add(task, 1);
            }
        }

        PriorityQueue<int, int> maxHeap = new PriorityQueue<int, int>(Comparer<int>.Create((a,b) => b-a));
        foreach(int value in charMap.Values){
            maxHeap.Enqueue(value, value);
        }
        Queue<int[]> q = new Queue<int[]>();
        int time = 0;
        while(maxHeap.Count > 0 || q.Count > 0){
            if(q.Count > 0 && time >= q.Peek()[1]){
                int freq = q.Dequeue()[0];
                maxHeap.Enqueue(freq, freq);
            }
            if(maxHeap.Count > 0){
                int count = maxHeap.Dequeue() - 1;
                if(count > 0){
                    q.Enqueue(new int[] {count, time + n + 1});
                }
            }
            time++;
        }
        return time;
    }
}
