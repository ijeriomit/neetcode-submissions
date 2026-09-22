class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const ansMap = new Map();
        if(t.length > s.length){
            return "";
        }
        for(const char of t){
            const value = (ansMap.get(char) ?? 0) + 1;
            ansMap.set(char, value);
        }
        // console.log("ansMap:", ansMap);
        const currMap = new Map();
        const targetMatches = ansMap.size;
        let numMatches = 0;
        let minStr = "";
        const steps= [];
        for(let i =0; i < s.length; i++){
            const curr = s[i];
            if(ansMap.has(curr)){
                steps.push(i);
                currMap.set(curr, (currMap.get(curr) ?? 0) + 1);
            }
            if(ansMap.has(curr) && currMap.get(curr) == ansMap.get(curr)){
                numMatches += 1;
            }
            if(numMatches == targetMatches){
                // const numRemoved = 1;
                let letter = s[steps[0]];
                while(steps.length > 0 && (currMap.get(letter) ?? 1) > (ansMap.get(letter) ?? 0)){
                    // numRemoved++;
                    letter = s[steps.shift()];
                    console.log("removed: ", letter);
                    currMap.set(letter, currMap.get(letter) - 1);
                }

                // currMap.set(removed, (currMap.get(removed) ?? 1) - 1);
                const word = s.substring(steps[0], i + 1);
                console.log("matches equal substr:", word);
                minStr = (minStr || s).length >= word.length ? word : minStr;
                numMatches = currMap.get(letter) < ansMap.get(letter) ? numMatches - 1 : numMatches;
                console.log("iteration: ", i, "minStr: ", minStr, "currMap: ", currMap, "steps: ", steps, "nuum: ", numMatches);

                // const new
            }
        }
        return minStr;
    }
}
