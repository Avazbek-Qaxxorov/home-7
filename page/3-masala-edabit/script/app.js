// function well(num , name) {

//         if (num === 1) {
//            return "Hello" + name; 
//         }
//         else if (num === 0) {
//             return "Bye" + name;
//         }
//         else if (num === 2) {
//             return "Bye" + name
//         }
//         else {
//             return "Xato"
//         }
// }

// console.log (well("alon", 1));

// console.log(well("Tomi", 0));

// console.log(well("Jose", 2));

function greeting(name, num) {

    if (num === 1) {

        return "Hello " + name;

    } 
    else if (num === 0 ) {

        return "Bye " + name;

    } 

    else {

        return "Invalid input";

    }
}


console.log(greeting("Alon", 1)); 
console.log(greeting("Tom", 0));
console.log(greeting("Jose", 0)); 