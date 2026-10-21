class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const courseMap = new Map();
        const visited = new Set();
        const path = new Set();
        let result = [];

        for(let i =0; i < numCourses; i++){
            courseMap.set(i, []);
        }
        for(const [course, preReq] of prerequisites){
            courseMap.get(course).push(preReq);
        }

        const traverse = (course) => {
            if(path.has(course)){
                return false;
            }
            if(visited.has(course)){
                return true;
            }
            path.add(course);
            for(const preReq of courseMap.get(course) || []){
                if(!traverse(preReq)){
                    return false;
                }
            }

            path.delete(course);
            visited.add(course);
            result.push(course);
            return true;
        };
        for(const [course, preReq] of courseMap){
            if(!traverse(course)){
                return [];
                //set Result;
            }
        }

        return result;
    }
}
