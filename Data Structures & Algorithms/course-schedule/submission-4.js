class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const courseMap = new Map();
        const visitSet = new Set();
        for(const [course, preReq] of prerequisites){
            if(course == preReq){
                return false;
            }
            if(!courseMap.has(course)){
                courseMap.set(course, [preReq]);
            } else {
                courseMap.get(course).push(preReq);
            }
        }
        for(let i =0; i < numCourses; i++){
            if(!courseMap.has(i)){
                courseMap.set(i, []);
            }
        }
        const traverse = (course) => {
            if(visitSet.has(course)){
                return false;
            }
            if(courseMap.get(course).length === 0){
                return true;
            }
            visitSet.add(course);
            for(const preReq of courseMap.get(course)){
                if(traverse(preReq) == false){
                    return false;
                }
            }
            visitSet.delete(course);
            courseMap.set(course, []);
            return true;
        }
        for(let i = 0; i < numCourses; i++){
            if(!traverse(i)){
                return false;
            }
        }

        return true;
    }
}
