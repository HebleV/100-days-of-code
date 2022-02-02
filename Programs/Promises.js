// let p = new Promise((resolve, reject)=>{
//     const citrus = ['orange', 'lemon'];
//     if(citrus.includes('banana')) {
//         resolve('This is a citrus fruit');
//     } else {
//         reject('This is not a citrus fruit');
//     }
// })
// p.then((message)=>{
//     console.log('Yeah, ' + message);
// }).catch((error)=>{
//     console.log('Nah, ' + error);
// })

let p1 = new Promise((resolve, reject) => {
    return resolve('done with p1');
})

let p2 = new Promise((resolve,reject)=>{
    return resolve('done with p2');
})

let p3 = new Promise((resolve,reject) => {
    return resolve('done with p3');
})

let p4 = Promise.all([p1, p2, p3]);
console.log(p4);


  for (var i = 0; i < 3; i++) {
    const log = () => {
      console.log(i);
    }
    setTimeout(log, 100);
  }
  
