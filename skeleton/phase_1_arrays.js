

// MY UNIQUES
Array.prototype.uniq = function(){
    const un = [];
    this.forEach( (ele) => {
            if (!un.includes(ele)) {
             un.push(ele);   
            }
        }
    )
    return un;
}
console.log([1,2,2,3,3,3].uniq())


// TWO SUM

Array.prototype.twoSum = function() {

    const newArr = [];
    for(let i = 0; i < this.length-1; i++) {
        for(let j = i + 1; j < this.length; j++){
            if (this[i] + this[j] === 0){
                newArr.push([i,j])
            }
        }
    }
    return newArr;
}
console.log([1,2,-2,3,-3,3].twoSum())
console.log("-----")












// MY TWO SUM
Array.prototype.twoSum = function(sum = 0){
    let answer = [];
    for(let i = 0; i < this.length-1; i++){
        for(let j= i + 1; j<this.length; j++){
            if (this[i] + this[j] === sum){
                answer.push([i,j])
            }
        }
    }
    return answer;
}
console.log([1,2,-2,3,-3,3].twoSum())

Array.prototype.transpose = function(){
    let arr = [];
    for(let i = 0; i < this[0].length; i++){
        let row = [];
        for(let j=0; j<this.length; j++) {
            row.push(this[j][i])
        }
        arr.push(row);
    }
    return arr;
}
console.log([[1,2],[3,4]].transpose())