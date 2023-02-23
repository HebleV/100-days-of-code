function towerOfHanoi(A){
    result = [];
    move = 0;
    m = (1<<A) -1;
    console.log("m", m)
    result = Array(m).fill().map(_=> Array(3));
    console.log("result", result)
    solve(A, 1, 2, 3);
    return result;
};

function solve(N, source, helper, destination){
    if(N == 0){
        return;
    }
    solve(N-1, source, destination, helper);
    result[move++] = [N,source, destination];
    solve(N-1, helper, source, destination);
}

console.log(towerOfHanoi(2));
