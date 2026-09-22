public class Solution {

    public string Encode(IList<string> strs) {
        char delimeter = '#';
        string encodedString = "";
        foreach(string str in strs){
            encodedString += $"{str.Length}{delimeter}{str}";
        }
        Console.WriteLine(encodedString);

        return encodedString;
    }

    public List<string> Decode(string s) {
        List<string> decoded = new List<string>();
        for(int i = 0; i < s.Length - 1; i++){
            string amount = "";
            while(int.TryParse(s[i].ToString(), out int n)){
                amount += s[i];
                i++;
            }
            
            if(s[i].ToString() == "#" && amount.Length > 0){
                Console.WriteLine(amount);
                decoded.Add(s.Substring(i+1, int.Parse(amount)));
                i += (int.Parse(amount));
                // Console.WriteLine(s.Substring(i+1, int.Parse(amount)));
            }
        }
        return decoded;
   }
}
