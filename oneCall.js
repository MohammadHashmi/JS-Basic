let funcCalls = 0;
function once(fn) {
    if (funcCalls === 0){
        funcCalls++;
        return function(...args){
            fn(...args);
        }
    }
    else {
        return undefined;
    }
    
}


once((a,b,c) => (a + b + c));

console.log(once(1,2,3));
console.log(once(2,4,5));
