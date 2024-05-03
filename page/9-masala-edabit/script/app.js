// let count = 0;

// function userCount (action) {

//     if (action === 'join') {

//         // let user = prompt("Foydalanuvchi chatga qo'shildi: ");

//         count++;

//     }

//     else if (action === 'leave') {

//         // let user = prompt("Foydalanuvchi chatdan chiqildi: ");

//         count--;

//     }

//     else if (action ==='switch') {

//         // let user = prompt("Foydalanuvchi chatda o'zgarinsh qilmoqda");

//     }

//     return count

// }

// console.log(userCount('join'));

// console.log(userCount('join'));

// console.log(userCount('leave'));

// console.log(userCount('switch'));


let arr = ["bek", "ali", "g'ayrat", "doston", "sohib"]
function chartUsers (array) {
    if (array.length == 0) {
        return "no one online"
    }
    if (array.length == 1) {
        return array[0] + "online"
    }
    if (array.length == 2) {
        return array[0] + " and " + array[1] + " online"
    }
    if (array.length > 2) {
        return array[0] + " , " + array[1] + " and " + (array.length - 2) + " more online"
    }
}
let chartOnlineUsers = chartUsers(arr)
console.log(chartOnlineUsers)

