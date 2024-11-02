function sayMyname(){
    // console.log("k");
    // console.log("i");
    // console.log("r");
    // console.log("t");
    // console.log("i");
}

//sayMyname()

///******** */ isko asa karne se ye result = undefine de de raha hai..

// function addtwonumber(number1,number2) { //jo value de rahe hai wo parameters hai
//     console.log(number1+number2);
// }

///or

function addtwonumber(number1,number2) { //jo value de rahe hai wo parameters hai
    // let result = number1+number2
    // return result
//////////////////////////or direct....
    return number1+number2   
}


const result = addtwonumber(3,4) ///value paas--argument
// console.log("result: ",result);

 function loginusermessage(username){
    if(!username){ //// or username===undefine (both is same...)
//        console.log("please enter a user name");
        return
    }
    return `write ${username} just logged in`
}
// console.log(loginusermessage("kirti")) /// dirtect print kr rahe hai without log kiye to wo print nii kr raha hai... 
//console.log(loginusermessage()); //value pass ni kr rahe to undefine dega

// ***rest operator or spread operator (val1 and val2 take 1st and 2nd value rest value goes inside num in array form...)

function calculatecartprice(val1,val2, ...num1){
    return num1

}
//console.log(calculatecartprice(200,400,500,700));

//@@@@@@@@@@function with  object//////

const user = { ////object
    username: "kirti",
    price: 166
}

function handleobj(anyobj){ ///function 
//    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}
////call fuction method.....

//handleobj(user)

handleobj({
    username:"sam",
    price:399
})

////@@@@@ Array with function.........
const myarray = [200,300,400,600]
function returnsecondvalue (getarray) {
    return getarray[1]  // index given hai....
}

//console.log(returnsecondvalue(myarray));
//console.log(returnsecondvalue([200,300,400,600]));

