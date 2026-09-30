class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let tempStack = [];
        let result = new Array(temperatures.length).fill(0);
        for(let i = 0; i < temperatures.length; i++){
            let temp = temperatures[i];
            let top = tempStack[tempStack.length - 1] ?? [0,0];
            while(temp > top[0] && tempStack.length > 0) {
                result[top[1]] = i - top[1];
                tempStack.pop();
                top = tempStack[tempStack.length - 1] ?? [0,0];
                // console.log("1.. top: ", top, "temp: ", temp, "result: ", result, "tempStack: ", tempStack);

            }
            tempStack.push([temp, i]);
            // console.log("2.. top: ", top, "temp: ", temp,  "Result: ", result, "tempStack: ", tempStack);
        }
        
        return result;
    }
}
