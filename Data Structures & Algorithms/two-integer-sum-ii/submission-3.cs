public class Solution {
    public int[] TwoSum(int[] numbers, int target) {
        int[] ans = new int[2];
        int low = 0;
        int high = numbers.Length - 1;
        while(low < high) {
            int cur = numbers[low] + numbers[high];
            if(cur == target){
                ans[0] = low+1;
                ans[1] = high+1;
                break;
            } else if(cur < target) {
                low++;
            } else {
                high--;
            }
        }
        return ans;
    }
}
