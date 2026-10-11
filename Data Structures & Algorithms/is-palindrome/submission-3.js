class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let noWhiteSpaceString = s.replace(/[^a-zA-Z0-9]/g, "");
        let halfLen = noWhiteSpaceString.length/2 - 1;

        for(let i = 0, j = noWhiteSpaceString.length - 1; i <= halfLen && j >= halfLen; i++, j--){
            if(noWhiteSpaceString[i].toLowerCase() !== noWhiteSpaceString[j].toLowerCase()){
                return false;
            }
        }
        return true;
    }
}
