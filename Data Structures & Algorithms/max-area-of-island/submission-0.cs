public class Solution {
    public int MaxAreaOfIsland(int[][] grid) {
        int maxArea = 0;
        for(int i = 0; i < grid.Length; i++) {
            for(int j = 0; j < grid[0].Length; j++) {
                if(grid[i][j] == 1){
                    maxArea = Math.Max(AreaOfIsland(grid, i, j, 0), maxArea);
                }
            }
        }
        return maxArea;
    }
    int AreaOfIsland(int[][]grid, int row, int col, int area){
        if(row >= grid.Length || row < 0 || col >= grid[0].Length || col < 0 || grid[row][col] == 0){
            return area;
        }  
        grid[row][col] = 0;
        area += 1;

        area = AreaOfIsland(grid, row + 1, col, area); //top
        area = AreaOfIsland(grid, row, col + 1, area); //right
        area = AreaOfIsland(grid, row - 1, col, area); //down
        area = AreaOfIsland(grid, row, col - 1, area); //left
        return area;
    }
}
