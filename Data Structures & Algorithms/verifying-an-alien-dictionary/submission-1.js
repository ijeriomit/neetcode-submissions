class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        const orderMap = new Map();

        for(let i = 0; i < order.length; i++){
            orderMap.set(order[i], i+1);
        }

        const sortedWords = [...words].sort((a,b) => {
            for(let i = 0; i < Math.min(a.length, b.length); i++){
                if(a[i] !== b[i]){
                    return (orderMap.get(a[i]) - orderMap.get(b[i]));
                }
            }
            return a.length - b.length;
        });

        console.log("sortedWords: ", sortedWords);

        return words.join() == sortedWords.join();
    }
}
