//// if  ///

// if (condition){
//     //statement
//     //comparison (<,>,<=,>=,==,!=,===(check type also),!==)
// }


const temp = 50;
if(temp<80){
//    console.log("less than 80");
}
else{
//    console.log("temp. greater than 80");
}
//console.log("executed");

 const score = 200;

if (score>100){
    const mood = "happy"
//    console.log(`he is very ${mood}`);    
}

///########   NERST IF ELSE #########///

const balance = 1000;
if (balance<500) {
//    console.log("less than 500");   
}else if(balance<750){
//    console.log("less than 750"); 
}else if (balance<900){
//    console.log("less than 900");
}else{
//    console.log("greater than 1200"); 
}

////$$$$$$ LOGICAL OPERATORS $$$$$$$$$$$////

const money=true
const cash = false
const card = true

if(money&&card&&cash&&2!=3){
//    console.log("allow to payment");
}
if (money||cash) {
//    console.log("payment done");
}

///////////  SWITCH /////////////

// switch (key) {
//     case value:      
//         break;
//     default:
//         break;
// }

 const month=2

switch (month) {
    case 1:
//        console.log("1st month january, newyear");
        break;
     case 2:
//        console.log("2nd month Feburary, jay bhai birthday");
        break;
    case 3:
//        console.log("3rd month march, celebration month");
        break;
    case 4:
//        console.log("1st month april, new syllabus is start");
      break;
    case 5:
//        console.log("3rd month may , summer is on the way ");
        break;
    case "june":
//        console.log("1st month june, my day");
      break
    default:
//        console.log("waiting for fav. season winter");
        break;
}



////////// truly and falsy value..........

////1--- falsy value.....
//// false , 0 , -0 , BigInt 0n , "", null , undefine , NaN

////2---  truthy values........
////"0" , 'false', " " , [] , {} , function(){}

// check array hai ki nii..

const array = []
    if(array.length===0){
//        console.log("empty array"); 
    }

//// empty object ko....

const obj={}
if (Object.keys(obj).length===0) { ///pahale object ko liye phir key call kr ke array bana diye now after array .length se check kiye... 
//    console.log("empty object");
}

////summary...........
/// false==0 -->{true} ,, false==''-->>{true} ,, 0==''-->>{true}

///// Nullish Coalescing Operator (??): null undefine

let val1;
val1=5??10
val1= null??10
//console.log(val1);


///// TERNIARY OPERSTOR ////
// CONDITION ? TRUE : FALSE

const price = 100
//price<=80 ? console.log("less than 80") : console.log("more than 80")


