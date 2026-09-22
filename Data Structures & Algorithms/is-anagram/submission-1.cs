public class Solution {
    public bool IsAnagram(string s, string t) {
        if(s.Length != t.Length){
            return false;
        }
        Dictionary<char, int> map1 = new Dictionary<char, int>();
        Dictionary<char, int> map2 = new Dictionary<char, int>();

        for(int i = 0; i < s.Length; i++){
            char l1 = s[i];
            char l2 = t[i];
            if(map1.ContainsKey(l1)) {
                map1[l1] = map1[l1] + 1;
            } else {
                map1[l1] = 0;
            }
            if(map2.ContainsKey(l2)) {
                map2[l2] = map2[l2] + 1;
            } else {
                map2[l2] = 0;
            }
        }
        return map1.OrderBy(kv => kv.Key).SequenceEqual(map2.OrderBy(kv => kv.Key));
    }
}
