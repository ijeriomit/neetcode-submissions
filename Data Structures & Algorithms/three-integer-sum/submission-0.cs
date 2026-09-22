public class Solution {
    public List<List<int>> ThreeSum(int[] nums) {
        List<List<int>> ans = new List<List<int>>();
        Array.Sort(nums);
        if(nums.Length > 0 && nums[0] > 0){
            return ans;
        }
        for(int i = 0; i < nums.Length; i++){
            if(i > 0 && nums[i] == nums[i-1]){
                continue;
            }
            int low = i+1;
            int high = nums.Length -1;
            while(low < high){
                int sum = nums[i] + nums[low] + nums[high];
                if(sum > 0 ) {
                    high--;
                }
                else if(sum < 0) {
                    low++;
                }
                else{
                    ans.Add(new List<int>{nums[i], nums[low], nums[high]});
                    low++;
                    high--;
                    while(low < high && nums[low] == nums[low - 1]){
                        low++;
                    }
                }
            }
        }
        return ans;
    }
}
