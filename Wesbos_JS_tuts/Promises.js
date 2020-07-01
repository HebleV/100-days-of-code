let p = new Promise((resolve, reject)=>{
    const citrus = ['orange', 'lemon'];
    if(citrus.includes('banana')) {
        resolve('This is a citrus fruit');
    } else {
        reject('This is not a citrus fruit');
    }
})
p.then((message)=>{
    console.log('Yeah, ' + message);
}).catch((error)=>{
    console.log('Nah, ' + error);
})