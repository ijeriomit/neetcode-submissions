class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const palindromes = [];
        const part = [];
      
        this.dfs(0, s, part, palindromes);
        return palindromes;
    }
    isPalindrome(s, i, j){
            while(i < j){
                if(s[i] !== s[j]){
                    return false;
                }
                i++;
                j--;
            }
            return true;
        };
    dfs(i, s, palindrome, result){
            if(i >= s.length){
                result.push([...palindrome]);
                return;
            }
            for(let j = i; j < s.length; j++){
                if(this.isPalindrome(s, i, j)) {
                    palindrome.push(s.substring(i, j + 1));
                    this.dfs(j + 1, s, palindrome, result);
                    palindrome.pop();
                }
            }
        }
}
