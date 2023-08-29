function reduce(nums, fn, init) {
    let val = init;
    for (i = 0; i < nums.length; i++){
        val = fn(val, nums[i])
    }
    return val;
}

console.log(reduce([], function sum(accum, curr) { return accum + curr * curr; }, 100));