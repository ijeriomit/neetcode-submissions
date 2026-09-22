public class Solution {
    public void islandsAndTreasure(int[][] grid) {
        List<(int row, int col)> visited = new List<(int, int)>();
        Queue<(int row, int col)> q = new Queue<(int, int)>();
        int maxRow = grid.Length;
        int maxCol = grid[0].Length;
        for( int i =0; i < maxRow; i++){
            for (int j = 0; j < maxCol; j++) {
                if(grid[i][j] == 0) {
                    q.Enqueue((i,j));
                    visited.Add((i,j));
                }
            }
        }
        void checkLand(int row, int col) {
            if(row < 0 || row >= maxRow || col < 0 || 
                col >= maxCol || visited.IndexOf((row,col)) != -1 ||
                grid[row][col] == -1){
                    return;
                }
                visited.Add((row, col));
                q.Enqueue((row, col));
        }
        int distance = 0;
        while(q.Count > 0) {
            for(int i = 0, len = q.Count; i < len; i++){
                (int row, int col) curr = q.Dequeue();
                grid[curr.row][curr.col] = distance;
                checkLand(curr.row + 1, curr.col);
                checkLand(curr.row - 1, curr.col);
                checkLand(curr.row, curr.col + 1);
                checkLand(curr.row, curr.col - 1);

            }
            distance += 1;
        }
    }
}
