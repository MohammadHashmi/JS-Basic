const arr = [1, 2, 3, 4, 5];
function reverseArr(input){
    let newArr = []
    for (i = input.length - 1; i >= 0; i--){
        newArr.push(input[i]);
    }
    return newArr;
}
console.log(reverseArr(arr));