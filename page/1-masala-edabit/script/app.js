// let arr = [9,4,6,1,5]
// function num(x){
//     let rev = [];
//     for (let i = x.length - 1;  i > 0 ; i--){
//         rev += (x[i]);
//     }
//     return rev
// }
// let result = arr;
// // let newArr = arr.sort(x) => x)
// console.log(result)

let arr = [1,4,3,5,6,7,64,23,100,21,0]
let newArr = arr.sort((a,b) => a - b)
console.log(newArr.reverse())