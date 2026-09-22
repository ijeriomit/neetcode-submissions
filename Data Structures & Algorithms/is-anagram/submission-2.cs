public class Solution {
    public bool IsAnagram(string s, string t) {
        if(s.Length != t.Length){
            return false;
        }
        Dictionary<char, int> charMap = new Dictionary<char, int>();

        for(int i =0; i < s.Length; i++){
            if(charMap.ContainsKey(s[i]) == false){
                charMap.Add(s[i], 1);
            } else {
                charMap[s[i]] = charMap[s[i]] + 1;
            }
        }
        for(int i =0; i < t.Length; i++){
            char curr = t[i];
            if(charMap.ContainsKey(curr) == false){
                return false;
            } else {
                charMap[curr] = charMap[curr] - 1;
            }
            if(charMap[curr] ==0){
                charMap.Remove(curr);
            }
        }
        // Console.WriteLine(charMap);
        return charMap.Count == 0;
    }
}
