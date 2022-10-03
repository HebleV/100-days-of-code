function timeToEquality(A){
    let seconds = 0;
        let maxEle =A[0];
        for(let i = 0; i < A.length;i++){
            if(A[i] > maxEle){
                let lastMax = maxEle;
                maxEle = A[i];
                seconds += i * (maxEle - lastMax);
            } else if(A[i]<maxEle){
                seconds += maxEle - A[i];
            }
        }
        return seconds;
}

console.log(timeToEquality([731,349,490,781,271,405,811,181,102,126,866,16,622,492,194,735]))