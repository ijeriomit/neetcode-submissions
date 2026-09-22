public class Solution {
    public bool CheckInclusion(string s1, string s2) {
        Dictionary<char, int> charMap = new Dictionary<char, int>();
        Dictionary<char, int> dupMap = new Dictionary<char, int>();
        bool includes = false;
        for(int i = 0; i < s1.Length; i++){
            char c = s1[i];
            if(charMap.ContainsKey(c)){
                charMap[c] = charMap[c] + 1;
            } else {
                charMap.Add(c, 1);
            }
        }
        int left = 0;
        int windowSize = s1.Length-1;
        for(int right = 0 ; right < s2.Length; right++){
            char c = s2[right];
            if(dupMap.ContainsKey(c)){
                dupMap[c] = dupMap[c] + 1;
            } else {
                dupMap.Add(c, 1);
            }
            if(right - left == windowSize && MapsEqual(charMap, dupMap)){
                includes = true;
                break;
            }else if(right - left == windowSize){
                int newValue = dupMap[s2[left]] - 1;
                if(newValue == 0){
                    dupMap.Remove(s2[left]);
                } else{
                    dupMap[s2[left]] = newValue;
                }
                left++;
            }
        }
        return includes;
    }
    bool MapsEqual(Dictionary<char, int> m1, Dictionary<char, int> m2){
        foreach (KeyValuePair<char, int> kvp in m1){
            
            Console.WriteLine($" 1 -- {kvp.Key}: {kvp.Value}");
        }
        foreach (KeyValuePair<char, int> kvp in m2){
            Console.WriteLine($" 2-- {kvp.Key}: {kvp.Value}");
        }
        return  m1.OrderBy(kv => kv.Key).SequenceEqual(m2.OrderBy(kv => kv.Key));
    }
}
