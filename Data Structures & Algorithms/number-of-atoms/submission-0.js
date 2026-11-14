class Solution {
    /**
     * @param {string} formula
     * @return {string}
     */
    countOfAtoms(formula) {
        const elements = [new Map()];
        const isLowerCase = (char) => {
            return /^[a-z]$/.test(char);
        }
       
        const isCount = (char) => {
            return /^\d$/.test(char);
        }
        let element = '';
        let count = '';
        
        for(let i =0; i < formula.length; i++){
            if(formula[i] == "("){
                elements.push(new Map())
            } else if(formula[i] == ")"){
                let curr = elements.pop();
                count = '';
                while(i + 1 < formula.length && isCount(formula[i + 1])){
                    i++;
                    count += formula[i]
                }
                if(count == ''){
                    count = 1
                } else {
                    count = parseInt(count);
                }
                for(let [ele, c] of curr){
                    curr.set(ele, c * count);
                }
                const prev = elements[elements.length - 1];
                for(let [ele, c] of curr){
                    prev.set(ele, (prev.get(ele) || 0) + curr.get(ele));
                }
            } else {
                element = formula[i];
                count = '';
                while(i + 1 < formula.length && isLowerCase(formula[i + 1])){
                    i++;
                    element += formula[i];
                }
                while(i + 1 < formula.length && isCount(formula[i + 1])){
                    i++;
                    count += formula[i]
                }
                if(count == ''){
                    count = 1
                } else {
                    count = parseInt(count);
                }
                let curr = elements[elements.length - 1];
                curr.set(element, (curr.get(element) || 0) + count);
            }
        }
        const countMap = elements[elements.length - 1];
        let result = '';
        for(const [element, elementCount] of [...countMap.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
            if(elementCount == 1){
                result += element;
            } else {
                result += element + elementCount.toString();
            }
        }
        console.log("elements: ", elements);
        return result;
    }
}
