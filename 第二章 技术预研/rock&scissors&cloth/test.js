// console.log(__dirname)

// console.log(5&1)   // 1
// console.log(10&1)   // 0
// console.log(2&1)

var printNumbers = function(n) {
    let max = 1;   //max用来保存最大的数字
    let x = 10;    //
    while (n) {
        if (n & 1) {
            max = max * x;   
            console.log(max)   
        }
        x = x * x;
        n = n >> 1;     //10 -> 5 -> 2 -> 1     x的五次方
        console.log(n)
    }

    const res = [];
    for (let i = 1; i < max; ++i) {
        res.push(i);
    }
    return res;
};
let a =printNumbers(10)