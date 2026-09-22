class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pairs = position.map((p, i)=>{
            return [p, speed[i]];
        });
        pairs.sort((a,b) => {
            return b[0] - a[0];
        });
        const timeToReach = [];
        let carFleets = 0;
        for(let i =0; i < pairs.length; i++){
             timeToReach.push((target - pairs[i][0])/pairs[i][1])
             if(i > 0 && timeToReach[i] <= timeToReach[i-1]){
                timeToReach[i] = timeToReach[i-1];
             } else {
                carFleets++;
             }
        }
        return carFleets;
    }
}
