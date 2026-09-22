public class Solution {
    public int OrangesRotting(int[][] grid) {
        Queue<(int row, int col)> q = new Queue<(int, int)>();
        int maxRow = grid.Length; 
        int maxCol = grid[0].Length;
        int minutes = 0;
        int freshFruits = 0;

        void checkFruit(int row, int col) {
            if(row < 0 || col < 0 || col >= maxCol || row >= maxRow || grid[row][col] == 0 || grid[row][col] == 2){
                return;
            }
            grid[row][col] = 2;
            freshFruits--;
            q.Enqueue((row, col));
        }
     
        for(int i = 0; i < grid.Length; i++) {
            for(int j = 0; j < grid[0].Length; j++) {
                if(grid[i][j] == 2){
                    q.Enqueue((i,j));
                }
                else if(grid[i][j] == 1) {
                    freshFruits++;
                }
            }
        }
        while(q.Count > 0 && freshFruits > 0) {
            for(int i = 0, len = q.Count; i < len; i++){
                (int row, int col) curr = q.Dequeue();
                checkFruit(curr.row + 1, curr.col);
                checkFruit(curr.row - 1, curr.col);
                checkFruit(curr.row, curr.col + 1);
                checkFruit(curr.row, curr.col - 1);
            }
            minutes += 1;
        }
        return freshFruits == 0 ? minutes : -1;
    }
}
