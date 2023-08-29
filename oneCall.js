
function once(fn) {
    let funcCalls = 0;
    return function(...args){
        if (funcCalls === 0){
            funcCalls++;
            return fn(...args);
        }
        else {
            return undefined;
        }
    }

    
}

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1,2,3));
console.log(onceFn(2,4,5));
