//task2 - replace properties chain by destructuring syntax
//chain: user.banks[2].address.city

function cityOfUser(user){
    ({banks:[,,{address:{city=undefined}}]}=user);
    return city
}

// თუ არ გავითვალისწინებთ პირობას, რომ მიღებული პარამეტრის სახელი უნდა იყოს user, შეგვიძლია დესტრუქტურირება მოვახდინოთ პირდაპირ პარამეტრების შესაყვან ველში
/* function cityOfUser({banks:[,,{ address:{city=undefined}}]}){
     return city;
 }*/

/// შემოწმება

// let user1={banks:[1,2,{
//     name:'someone',
//     id: 'unknown',
//     address:{
//        city: "tbilisi"
//     }}]
// };
// console.log(cityOfUser(user1))
// console.log(user1.banks[2].address.city)