/**Create a function that will reverse all the element inside a nested array

exp

[1,2,3,4] => [4,3,2,1]
[1,[2,3],4]=>[4,[3,2],1]
[9,[5,[10,30]],6]=> [6,[[30,10],5]9]
 
 */

function reverseNestedArray(array) {
    //TODO
    for (let i = 0; i <= array.length; i++) {
        if (typeof array[i] === "object") {
            reverseNestedArray(array[i]);
        }

        return array.reverse();
    }
}
console.log(reverseNestedArray([9, [5, [10, 30]], 6]));
module.exports = reverseNestedArray;