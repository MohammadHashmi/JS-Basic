//Create a function that asks for the number of and length of each time table then logs them
//E.g. multiply(11, 10); will log 11 times tables all the way to their 10th multiple
function multiply(num, length) {
    for(l = 0; l <= num; l++){
        for (i = 1; i <= length; i++){
            console.log(l*i)
        }
        console.log('')
    }
    
}

multiply(11, 10);
