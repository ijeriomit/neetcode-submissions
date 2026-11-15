class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const sentences = [];
        const dict = new Set();
        for(let i =0; i < wordDict.length; i++){
           dict.add(wordDict[i]);
        };


        const traverse = function(i, sentence, currWord) {
            if(i == s.length){
                // console.log("base case: ", sentence, currWord); 
                if(dict.has(currWord)){
                    sentences.push(sentence + currWord);

                }
                return;
            } 
            

            currWord += s[i];
            traverse(i + 1, sentence, currWord);

            if(dict.has(currWord)) {
                // console.log("has word: ", currWord, "sentence: ", sentence + currWord + " ");
                traverse(i+1, sentence + currWord + " ", '');
            }
            
        }
        traverse(0, "", "");
     return sentences;
    }
}
