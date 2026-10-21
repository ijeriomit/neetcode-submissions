class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        for(let i =0; i < strs.length; i++) {
            let strLen = strs[i].length;
            encodedStr += strLen + "#" + strs[i]
        }
        console.log(encodedStr);
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let wordLen = "";
        let decodedStrs = [];
        let i = 0;
        let j = 0;
        while(j < str.length){
            if(str[j] == '#'){
                wordLen = parseInt(str.substring(i, j));
                let decodedWord = str.substring(j + 1, j + 1 + wordLen);
                decodedStrs.push(decodedWord);
                j = j + 1 + wordLen;
                i = j;
            } else {
                j++;
            }
        }
        return decodedStrs;
    }
}
