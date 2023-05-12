//task1 - sum first 2 numbers and multiplicate others

function sumAndMult(n){
    let [num1=0,num2=0,...nums]=n,
        sum = num1 + num2, 
        mult=1;
    // for(num of nums){
    //         mult *= num
    // }
    nums.map(x => mult *= x)
    return [sum,mult]
}

/// შემოწმებები

// let z=[12,undefined,2,3,2]
// console.log(sumAndMult(z))


