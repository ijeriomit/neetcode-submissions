class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const sortedCars = position.map((value, index) => [value, speed[index]]);
        sortedCars.sort((a, b) => b[0] - a[0]);
        let fleets = 0;
        let maxTime = 0;
        for(let i = 0; i < sortedCars.length; i++){
            let time = this.timeToTarget(target, sortedCars[i][0], sortedCars[i][1]);
            if(time > maxTime){
                fleets++;
                maxTime = time;
            }
        }
        return fleets;

    }

    timeToTarget(target, pos, speed){
        return (target - pos)/speed;
    }
}
