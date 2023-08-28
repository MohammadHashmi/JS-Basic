function filter(arr, fn) {
    let filteredArr = [];
    for (i = 0; i < arr.length; i++) {
        if (fn(arr[i], i) != false ) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

console.log(filter([1,2,3], function firstIndex(n, i) { return i === 0; }));