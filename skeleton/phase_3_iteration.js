
// BUBBLE SORT
Array.prototype.bubbleSort = function() {
    const newArr = [...this];
    let unsorted = true;
    while (unsorted) {
        unsorted = false;
        for(let i = 0; i<newArr.length-1; i++) {
            if (newArr[i] > newArr[i+1]) {
                unsorted = true;
                let temp = newArr[i];
                newArr[i] = newArr[i+1];
                newArr[i+1] = temp;
            }
        }
    }
    return newArr
}
let a = [4,3,2,4,1]
console.log(a.bubbleSort())
console.log(a)


// SUB STRINGS
String.prototype.substrings = function() {
    const substringsArray = []
    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){
            if(j >= i){
                substringsArray.push(this.slice(i, j+1))
            }
        }
    }
    return substringsArray
}
a = "abcde";
console.log(a.substrings());

// RANGE
function range(start,end) {
    if (start === end) {
        return [end];
    }
    return [start].concat(range(start+1,end));
}
console.log(range(0,3))























// Array.prototype.bubbleSort = function(){
//     arr = [...this];
//     let sorted = false;
//     while (!sorted) {
//         sorted = true;
//         for (let i = 0; i<arr.length-1; i++) {
//             if (arr[i] > arr[i+1]) {
//                 sorted = false;
//                 temp = arr[i];
//                 arr[i] = arr[i+1];
//                 arr[i+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let a = [4,3,2,4,1]
// console.log(a.bubbleSort())
// console.log(a)

// String.prototype.substrings = function(arr) {
//     if this === "" {
//         return "";
//     }
//     return 

// }