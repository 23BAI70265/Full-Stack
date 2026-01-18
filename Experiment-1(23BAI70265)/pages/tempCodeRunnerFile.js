const sum = logs.reduce((acc, ele) => {
    return acc + ele.carbon
}, 0) ;
console.log(sum) ;


const b = logs.map((ele) => {
    return {key : ele.id, value : ele.activity} ;
}) ;
console.log(b) ;