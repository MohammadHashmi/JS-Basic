function map(arr, fn) {
    let newArr = [];
    for (i = 0; i < arr.length; i++)
    {
        //Creates the number after transformation
        let num = fn(arr[i], i);
        //Pushes to array
        newArr.push(num);
    }
    return newArr;
}

console.log(map([1,2,3], function plusone(n) { return n + 1; }));