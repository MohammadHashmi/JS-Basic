let arr = [1, -4, 5, -134, 54];
function filterArr(input){
    let newArr = [];
    for (i = 0; i < input.length; i++){
        if (input[i] >= 0){
            newArr.push(input[i])
        }
    }
    return newArr;
}

console.log(filterArr(arr));