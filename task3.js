//task3 - deep copy of object

function copyObj(obj){
    // function makes shallow copy of object
    function newObj(obj){
        if(Array.isArray(obj)){
            return [...obj];
        }
        return {...obj};
    }

    const secObj=newObj(obj);
    // function checks if object is nested and copy nested objects
    function copyNest(secObj){
        // check if object is array and repleace nested values
        if (Array.isArray(secObj)){
            secObj.forEach((value,index)=>{
                Array.isArray(value)?secObj[index]=newObj(value):0;
                copyNest(secObj[index]);
            })
        }
        // check all properties of object and repleace them if they are nested objects
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

/// tests

// let obj={
//     prop1:'text1',
//     prop2: 'text2',
//     prop3: 12345,
//     prop4:{
//         prop41:67,
//         prop42:{
//             prop421: 'value'
//         },
//         prop5:[1,2,3,[4,5,[6],{prop6:'value2'}]]
//     }
// };

// console.log(copyObj(obj)===obj)
// console.log(copyObj(obj).prop4===obj.prop4)
// console.log(copyObj(obj).prop4.prop42===obj.prop4.prop42)
// console.log(copyObj(obj).prop4.prop5===obj.prop4.prop5)
// console.log(copyObj(obj).prop4.prop5[3]===obj.prop4.prop5[3])
// console.log(copyObj(obj).prop4.prop5[3][2]===obj.prop4.prop5[3][2])
// console.log(copyObj(obj).prop4.prop5[3][3]===obj.prop4.prop5[3][3])
// console.log(obj.prop4.prop5[3][3])
// console.log(copyObj(obj).prop4.prop5[3][3])
// console.log(copyObj(obj).prop4)
// console.log(obj.prop4)