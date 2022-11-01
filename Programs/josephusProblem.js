// There are A people standing in a circle. Person 1 kills their immediate 
// clockwise neighbour and pass the knife to the next person standing in circle. 
// This process continues till there is only 1 person remaining. 
// Find the last person standing in the circle.
//O(logA)
//https://www.youtube.com/watch?v=uCsD3ZGzMgE&ab_channel=Numberphile
function josephusProblem(A){
    //find closest power of 2 < A
    let i=1;
    while(i<=A){
        i=i*2;
    }
    //calculate number of kills we need to make in order to achieve i
    let kills=A-(i/2);
    //last man standing
    let ans=1+(2*kills);
    return ans;
}

console.log(josephusProblem(4)) //output => 1
// Firstly, the person at position 2 is killed, then the person at position 4 is killed,
// then the person at position 3 is killed. So the person at position 1 survives. 
