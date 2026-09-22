public class Solution {
    public int CharacterReplacement(string s, int k) {
       int longest = 0;
       int i = 0;
       int mostFreqCharCount = 0;
       Dictionary<char, int> charMap = new Dictionary<char, int>();

       for(int j = 0; j < s.Length; j++){
            char c = s[j];
            if(charMap.ContainsKey(c)){
                charMap[c] = charMap[c] + 1;
            } else {
                charMap.Add(c, 1);
            }
            mostFreqCharCount = Math.Max(mostFreqCharCount, charMap[c]);
            // mostFreqChar = charMap[mostFreqChar] < mostFregCharCount ? c : mostFreqChar;
            if((j - i + 1) - mostFreqCharCount > k){
                charMap[s[i]] = charMap[s[i]] - 1;
                i++;
            }
            longest = Math.Max(longest, j - i + 1);
       }

       return longest;
    
    }

}
