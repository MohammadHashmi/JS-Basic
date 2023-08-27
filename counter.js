function createCounter(init) {
    return {
        increment: () => {
            return init += 1;
        },
        decrement: () => {
            return init -= 1;
        },
        reset: () => {
            return init;
        }
    }
}

console.log(createCounter(5).reset());