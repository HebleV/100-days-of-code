// 1-dimensional array

// let res = [
// {
//  key: "5jd",
// count: 4 
// },
// { 
// key: "4rf",
// count:  3
// } ,
// ]

// res.map(ele => newobj[ele.key] = ele.key.count);

// 2-dimensional array

let res = [
    {
        keys: {
            key: "5jd",
            count: 4
        }
    },
    {
        keys: {
            key: "4rf",
            count: 3
        }
    },
]

// { 5JD: 4, 4RF: 3 }
// let finalobj = res.reduce((finalobj,prev,curr) => {
//   console.log(prev);
// 	// ele[key]:count
// },{})

let newobj = {};
// for(let i =0;i<res.length;i++){
//     newobj[res[i].keys.key]=res[i].keys.count;
// }
res.map(ele => newobj[ele.keys.key] = ele.keys.count);
console.log(newobj)