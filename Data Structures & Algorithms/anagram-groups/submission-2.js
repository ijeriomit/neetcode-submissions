class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) { //O(n * m * m)
        let countMap = new Map();
        for(let i = 0; i < strs.length; i++){ //O(n)
            let str = strs[i];
            let count = new Map();
            for(let j = 0; j < str.length; j++){ //O(m)
                let char = str[j];
                if(count.has(char)){ //O(1)
                    count.set(char, count.get(char) + 1);
                }
                else {
                    count.set(char, 1);
                }
            }
            count = [...count.entries()].sort((a,b)=>{ //O(m log m)
                if(a[0] > b[0]) return 1;
                else if (a[0] < b[0]) return -1;
                else return 0;
            }).map(([key, value])=>{ //O(m)
                return `${key}${value}`
            }).join(''); //O(m)
            if(countMap.has(count)){
                countMap.get(count).push(str);
            } else {
                countMap.set(count, [str]);
            }
            // console.log("countMap: ", countMap);
        }
        return [...countMap.values()];
    }

}
