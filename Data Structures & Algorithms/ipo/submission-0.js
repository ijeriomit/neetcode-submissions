class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        const projects = [];
        for(let i = 0; i < profits.length; i++){
            projects.push({profit: profits[i], capital: capital[i]});
        }
        projects.sort((a,b) => {
            return (b.profit - a.profit) || (a.capital - b.capital);
        });

        // console.log(projects);
        const completedProjects = new Set();
        while (k > 0){
            for(const project of projects){
                if(project.capital <= w && !completedProjects.has(project)){
                    completedProjects.add(project);
                    w += project.profit;
                    // console.log("completed Project: ", project);
                    break;
                }
            }
            k--;
        }

        return w;
    }
}
