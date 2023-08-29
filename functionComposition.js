function compose(arrFn, init) {
    let val = init;
    for (i = arrFn.length - 1; i >= 0; i--) {
        val = arrFn[i](val)
    }
    return val
}

console.log(compose([], 1))