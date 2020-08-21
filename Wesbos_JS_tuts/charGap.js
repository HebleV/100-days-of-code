function ab_Check(str)
 {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }
 console.log(ab_Check("Chainsbreak"));