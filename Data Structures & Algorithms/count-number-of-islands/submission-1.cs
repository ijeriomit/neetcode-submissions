public class Solution {
    public int NumIslands(char[][] grid) {
        int islandCount = 0;
        for(int i = 0; i < grid.Length; i++){
            for(int j = 0; j < grid[0].Length; j++){
                if(grid[i][j] == '1'){
                    Dfs(grid, i, j);
                    islandCount++;
                }
            }
        }
        return islandCount;
    }
    void Dfs(char[][] grid, int row, int col) {
        if(row < 0 || row >= grid.Length || col < 0 || col >= grid[0].Length || grid[row][col] == '0'){
            return;
        }
        grid[row][col] = '0';
        Dfs(grid, row + 1 , col);//top
        Dfs(grid, row , col + 1);//right
        Dfs(grid, row - 1, col);//down
        Dfs(grid, row, col - 1); //left
    }
}
