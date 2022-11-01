// A year is a leap year if the following conditions are satisfied:
//- The year is multiple of 400.
//- or the year is multiple of 4 and not multiple of 100.
function leapYear(year){
    // if(year % 400 == 0){
    //     return 1;
    // } else if(year % 4 == 0 && year % 100 != 0){
    //     return 1;
    // } else {
    //     return 0;
    // }

    // 1-liner
    return ( year%400 ==0 || (year%4==0 && year%100 !=0))? 1:0;
}
console.log(leapYear(2020))