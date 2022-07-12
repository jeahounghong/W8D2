



// MY EACH
Array.prototype.myEach = function(func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i]);
    }
}
function printer(arg) {
    console.log(arg);
}
[1,2,3,4].myEach(printer)
console.log("------")


























// MY EACH
Array.prototype.myEach = function(callback) {
    for(i=0;i<this.length;i++){
        callback(this[i]);
    }
}

function printer(arg) {
    console.log(arg);
}
[1,2,3,4].myEach(printer)

// MY MAP
Array.prototype.myMap = function(callback) {

    let arr = [];
    //this.myEach((el) => arr.push(callback(el)));
    this.myEach(function(el) {
        arr.push(callback(el))
    });
    return arr;
}
function doubler(arg) {
    return arg*2;
}
console.log([1,2,3,4].myMap(doubler));
console.log("____")

// MY REDUCE
Array.prototype.myReduce = function(callback, initialValue) {
    let start = 0;

    arr = [...this]

    if (initialValue === undefined) {
        start++;
        initialValue = this[0];
    }
    let result = initialValue;
    this.slice(start,this.length).myEach(el => result = callback(result, el));
    return result;
}
console.log([1, 2, 3].myReduce(function(acc, el) { return acc + el;}))

arr[start..-1]

// FIBONACCI

