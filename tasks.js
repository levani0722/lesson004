/**
 * @author Levan Alimbarashvili
 */

//task1 - sum first 2 numbers and multiplicate others

function sumAndMult(n){
    let [num1=0,num2=0,...nums]=n,
        sum = num1 + num2, 
        mult=1;
    nums.map(x => mult *= x)
    return [sum,mult];
}


//task2 - replace properties chain by destructuring syntax

function cityOfUser(user){
    ({banks:[,,{address:{city=undefined}}]}=user);
    return city;
}


//task3 - deep copy of object

function copyObj(obj){
    function newObj(obj){
        if(Array.isArray(obj)){
            return [...obj];
        }
        return {...obj};
    }
    const secObj=newObj(obj);
    function copyNest(secObj){
        if (Array.isArray(secObj)){
            secObj.forEach((value,index)=>{
                Array.isArray(value)?secObj[index]=newObj(value):0;
                copyNest(secObj[index]);
            })
        }
        for (const key in secObj){
            if(typeof secObj[key] === 'object' && secObj[key]!==null){
                let nest=newObj(secObj[key]);
                delete secObj[key];
                secObj[key]=nest;
                copyNest(secObj[key]);
            }
        }
    }
    copyNest(secObj)
    return secObj;
}