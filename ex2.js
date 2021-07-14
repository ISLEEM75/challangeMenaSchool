/**without using any kind of loops determine if an array contains an element N
in a nested array
example
array=[15,6,[5,1],[10,[20,[0]]]]
contains(array,0)=> return true

contains(array,-1)=> return false 

*/
function contains(arr, index) {
    let newArr = arr.flat(Infinity);

    if (newArr.indexOf(index) === -1) {
        return false;
    } else {
        return true;
    }
}

array = [15, 6, [5, 1],
    [10, [20, [0]]]
];
console.log(contains(array, 0));

// function contains(arr, index) {
//     for (let i = 0; i <= arr.length; i++) {
//         if (typeof arr[i] === "object") {
//             contains(arr[i], index);
//         }
//     }
//     if (arr.indexOf(index) === -1) {
//         return false;
//     } else {
//         return true;
//     }
// }