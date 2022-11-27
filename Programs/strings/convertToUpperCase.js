function convertToUpperCase(A){
    //O(N)
    for(let i = 0; i < A.length; i ++){
        if(A[i] >= 'a' && A[i] <= 'z'){
            A[i] = String.fromCharCode(A[i].charCodeAt(0) - 32);
        }else {
            A[i] = A[i];
        }
    }
    return A;
}

console.log(convertToUpperCase(['A', 'b', 'c', 'D', 'E']))