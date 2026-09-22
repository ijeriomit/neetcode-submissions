class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';
        for(const str of strs){
            encodedStr += `${str.length.toString()}#${str}`;
        }
        console.log(encodedStr);
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStrings = [];
        let i = 0;
        const isNumber = function(str){
            return !isNaN(parseInt(str));
        }
        while(i < str.length) {
            let count = '';
            while(isNumber(str[i])){
                // console.log("reading: num");
                count += str[i];
                i++;
            }
            console.log(i, str[i], count);
            if(str[i] != '#') {
                // console.log("invalid");
                decodedStrings.push(str.slice(i, str.length));
                break;
            }
            let wordCount = count.toString();
            let wordStart = i + 1;
            let wordEnd = wordStart + parseInt(wordCount);
            wordEnd = wordEnd > str.length ? str.length : wordEnd;
            decodedStrings.push(str.slice(wordStart, wordEnd));
            i = wordEnd;
        }
        return decodedStrings;
    }
}
