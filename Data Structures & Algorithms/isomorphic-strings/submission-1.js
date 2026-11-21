class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        if(s.length !== t.length){
            return false;
        }
        const sCharMap = new Map();
        const tCharMap = new Map();
        for(let i =0; i < s.length; i++){
            if(sCharMap.has(s[i])){
                sCharMap.get(s[i]).push(i);
            } else {
                sCharMap.set(s[i], [i]);
            }
            if(tCharMap.has(t[i])){
                tCharMap.get(t[i]).push(i);
            } else {
                tCharMap.set(t[i], [i]);
            }
        }

        const sValues = [...sCharMap.values()].sort();
        const tValues = [...tCharMap.values()].sort();
        // console.log("S: ", sValues, "T: ", tValues);
        if(sValues.length != tValues.length){
            return false;
        }
        for(let i = 0; i < sValues.length; i++){
            // console.log("S: ", sValues[i], "T: ", tValues[i]);
            if(!sValues[i].every((val, index) => val === tValues[i][index])){
                return false;
            }
        }

        return true;

    }
}
