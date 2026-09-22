class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adjList = new Map();
        for(let i =0; i < numCourses; i++){
            adjList.set(i, new Set());
        }
        for(const pre of prerequisites){
            if(adjList.has(pre[0])){
                adjList.get(pre[0]).add(pre[1]);
            }
        }
        const visited = new Set();
        const dfs = function(course){
            if(visited.has(course)){
                return false;
            }
            const preReqs = adjList.get(course);
            if(preReqs.size == 0){
                return true;
            }
            visited.add(course);
            for(const pReq of preReqs.values()){
                if(!dfs(pReq)){
                    return false;
                }
            }
            visited.delete(course);
            preReqs.clear();
            return true;
        }
        for(let i =0; i < numCourses; i++){
            if(dfs(i) == false){
                return false;
            }
        }
        return true;
    }
}
