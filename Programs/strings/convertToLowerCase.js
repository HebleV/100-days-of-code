function convertToLowerCase(A){
    //O(N)
    for(let i = 0; i < A.length; i ++){
        if(A[i] >= 'A' && A[i] <= 'Z'){
            A[i] = String.fromCharCode(A[i].charCodeAt(0) + 32);
        }else {
            A[i] = A[i];
        }
    }
    return A;
}

console.log(convertToLowerCase(['A', 'b', 'c', 'D', 'E']))