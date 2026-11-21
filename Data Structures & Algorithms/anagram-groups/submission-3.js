class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let charMap = new Map();
        const strMap = new Map();

        for(const str of strs){
            for(const c of str) {
                if(charMap.has(c)){
                    charMap.set(c, charMap.get(c) + 1)
                } else {
                    charMap.set(c, 1);
                }
            }
            const strKey = [...charMap.entries()].sort((a,b) => {
                return a[0].localeCompare(b[0]);
            }).reduce((res, item) => { 
                // console.log("res: ", res, "char: ", item[0], "count: ", item[1]);
                return res + item[0] + item[1].toString()
                }, "");
            // console.log("String: ", str, "Key: ", strKey, "charMap: ", [...charMap.entries()]);
            charMap = new Map();
            if(strMap.has(strKey)){
                strMap.get(strKey).push(str);
            } else {
                strMap.set(strKey, [str]);
            }
        }
        return [...strMap.values()];
    }
}
