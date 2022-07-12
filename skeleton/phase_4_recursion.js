function fibonacci(n) { // n === 3
    if (n==1) {
        return [1];
    }
    if (n==2) {
        return [1,1];
    }
    prev = fibonacci(n-1) // prev = [1,1]
    prev1 = prev[n-2]; // prev = 1
    prev2 = prev[n-3]; // prev = 1
    return prev.concat([prev1 + prev2]);
}
console.log(fibonacci(5))


function deepDup(arr) {
    const newArr = []
    arr.forEach(function(el){
        if (!Array.isArray(el)) {
            newArr.push(el)
        }
        else {
            newArr.push(deepDup(el))
        }
    }
    )
    return newArr
}

let b = [1,[2,3],[4,5]]
let c = deepDup(b)
b[1][1] = 19

console.log(b)
console.log(c)


function bsearch(arr, target) {
    if (arr.length === 0) {
        return -1;
    }
    if (arr.length === 1) {
        if (arr[0] == target) {
            return 0
        }
        return -1;
    }
    let m = Math.trunc(arr.length / 2)

    if(arr[m] === target) {
        return m;
    }
    else if( arr[m] > target) {
        return bsearch(arr.slice(0, m), target);
    }
    else {
        let alt = bsearch(arr.slice(m + 1, arr.length), target)
        if (alt < 0) {
            return alt;
        }
        else {
            return m + 1 + alt;
        }
    }
}

console.log(bsearch([1,2,3,4,5], 5))

function subsets(arr) {
    if (arr.length == 1) {
        return arr;
    }
    
}