class Solution {
    survivedRobotsHealths(positions, healths, directions) {
        const robots = [];
        const roboIndexMap = new Map();
        for(let i =0; i < positions.length; i++) {

            roboIndexMap.set(positions[i], i);
            robots.push({p: positions[i], h: healths[i], d: directions[i]});
        }
        robots.sort((a,b) => {
            return a.p - b.p;
        });

        // console.log(roboIndexMap);
        const robotStack = [];
        const top = () => {
            return robotStack[robotStack.length - 1] ?? null;
        };
        for(let i =0; i < robots.length; i++){
            let robot = robots[i];
            
            if(robot.d == "R") {
                robotStack.push(robot);
                continue;
            }
            while(top()?.d == "R" && robot){
                if(top().h > robot.h){
                    top().h--;
                    robot = null;
                } else if( top().h == robot.h){
                    robot = null;
                    robotStack.pop();
                } else {
                    robot.h--;
                    robotStack.pop();
                }
            }
            if(robot) {
                robotStack.push(robot);
            }
        }
        // console.log("Robo: ", robotStack);
        const result = Array(positions.length).fill(0);
        for(let i =0; i < robotStack.length; i++){
            result[roboIndexMap.get(robotStack[i].p)] = robotStack[i].h;
        }
        return result.filter((i) => i != 0);
    }
}
