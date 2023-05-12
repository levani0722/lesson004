//task3 - deep copy of object

function copyObj(obj){
    function newObj(obj){
        return {...obj};
    }

    const secObj=newObj(obj);
    function copyNest(secObj){
        for (const key in secObj ){
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
/*შენიშვნა
თუ ობიექტში იქნება ჩასმული მასივები, შეიძლება შეიქმნას პრობლემები
*/

/// tests

// let obj={
//     prop1:'text1',
//     prop2: 'text2',
//     prop3: 12345,
//     prop4:{
//         prop41:67,
//         prop42:{
//             prop421: 'value'
//         }
//     }
// };

// console.log(copyObj(obj)===obj)
// console.log(copyObj(obj).prop4===obj.prop4)
// console.log(copyObj(obj).prop4.prop42===obj.prop4.prop42)
// console.log(copyObj(obj).prop4)
// console.log(obj.prop4)