const uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = (obstacleGrid[0] || []).length;
    let dp = Array(m);
    let left = 0;
    let top = 0;
  
    if (!m || !n) return 0;
  
    for (let i = 0; i < m; i++) {
      dp[i] = Array(n);
      for (let j = 0; j < n; j++) {
        left = (j === 0 || obstacleGrid[i][j - 1] === 1) ? 0 : dp[i][j - 1];
        top = (i === 0 || obstacleGrid[i - 1][j] === 1) ? 0 : dp[i - 1][j];
        dp[i][j] = obstacleGrid[i][j] === 1 ? 0 : ((i === 0 && j === 0) ? 1 : (left + top));
      }
    }
  
    return dp[m - 1][n - 1];
  };

  console.log(uniquePathsWithObstacles([
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]))