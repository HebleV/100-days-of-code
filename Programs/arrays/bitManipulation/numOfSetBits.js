//In this process, we try to deduct 1s count by 1 by performing num & num-1 until num becomes 0
//So num of & operations performed are the num of 1s it has
// function numOfSetBits(num){
//     let counter=0;
//     while(num != 0){
//         num = num & (num-1);
//         counter++;
//     }
//     return counter;
// }

//O(logN)
function numOfSetBits(num){
    let count = 0;
    let bit=0;
    while(num > 0){
        //18 line or 19 line. One of the condition can be used
        // bit = num % 2;

        //In order to just find if last bit is set or unset, 
        //we could just find bit by doing & 1 as shown below
        bit = num & 1;
        if(bit == 1){
            count++;
        }
        // num = num/2;
        num = num >> 1;
        console.log(num)
    }
    return count;

}

console.log(numOfSetBits(11))