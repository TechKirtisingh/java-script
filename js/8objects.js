// singleton (constructutor se banega to object hamesha hi singleton banega)     {or}
// Object.create(singleton ki tarah kam karta hai)

// object literals(mtlb object singleton ki tarah nii banta hai)

// const mySym = Symbol("key1")

// const jsUser ={  // key:value (pair me likhte hai)
//     name:"kirti",
//     "fullname":"Kirti Singh", // agar hm kabhi double quotes ka use karte hai to use hm (.) kr ke hii call kr sakte isley square[] ka use nii karenge 
//     age:18,
//     [mySym] : "mykey1",  // square bracket use karna padta hai kuki wo "mysym" ko string datatype ki tarah treat kr raha hai jb ki hame 'symboldatatype'ki tarah use karna hai;
//     location:"jaipur",
//     email:"kirti@google.com",
//     isLoggedin: false,
//     lastloginDays: ["monday","saturday"]
// } 

// console.log(jsUser.email); /// basically hm dot se prefer krte hai........
// console.log(jsUser["email"]);///with square notation hi allowed hai  
// console.log( jsUser[mySym]);//special case to call in square.... 
// console.log(jsUser.fullname);


// jsUser.email="kittu@gmail.com"
// //Object.freeze(jsUser) /// object.freeze se hm value ko freez or lock kr sakte hai mtlb hm change nii kr sakte hai
// jsUser.email="kittu@chatgpt.com"
// console.log(jsUser);

/// fuction ko hm variable ki tarah nhi treat kr sakte hai ///

// jsUser.greeting = function(){
//     console.log("Hello JS user");
    
// }
// console.log(jsUser.greeting);//agar()use na kare to wo [Function (anonymous)] return kr deta hai{aur freeze kr denge to undefine bata dega}

// jsUser.greetingtwo = function(){
//     console.log(`Hello JS user myself ${this.fullname} and my age is ${this.age}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());

 
///<<<<  how to declare object in singleton and with the help ofconstructor

//two way declare object:------->>>>>>

// //i)
// const instaUser = new Object()  // singleton object
// // // OR ii)
 const instaUser = {}   // non singleton object

instaUser.id = "123abc"
instaUser.name = "sammy"
instaUser.isloogedin = false

// console.log(instaUser);

// const regularuser ={
//     email:"some@gmail.com",
//     fullname:{    // act as a object....
//         userfullname:{ //// inside this it also act as object 
//             firstname:"kirti",
//             lastname:"singh"
//         }

//     }
// }

// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname.firstname);

//// Combining two objects......

// const obj1 ={1:"a",2:"b"}
// const obj2 ={3:"c",4:"d"}

// const obj3 =  {obj1,obj2} /// asa karenge to alag alg object ek me dikhenge eg...  {obj1{},obj2{}}
// console.log(obj3);

// //  i) first method hua

// const obj4 = Object.assign({},obj1,obj2) 

// i) {} ek rule (taki agar hm two se jayada object banaye to wo store kare ){act as a target}aur object.assign kr ke karenge to wo dono object ko merge kr dega{act as a source (all the object)}
// console.log(obj4);

// //  ii) 2nd method 

// const obj5 = {...obj1, ...obj2}
// console.log(obj5);



//// jb database se value aati hai tb /////{array ke andar bahut der saare objects hai yaha pr....}

const users =[
    {
        id: 1,
        email: "kirti@gmai.com"
    },
    {
        id: 1,
        email: "kirti@gmai.com"
    },
    {
        id: 1,
        email: "kirti@gmai.com"
    },
]

console.log(users[1].email);  // jo value chahiye box ke through hm value bata rahe hai kon si chahiye....
console.log(instaUser);

//// making key and value in array form....

// console.log(Object.keys(instaUser)); // make key in array form
// console.log(Object.values(instaUser)); // make value in array form
// console.log(Object.entries(instaUser)); // make key value in array form 
// console.log(instaUser.hasOwnProperty('age')); // check weather it is avialable aur not...

/////^^^^^^^^^  OBJESTS DESTRUCTURING AND JSON API   /////

const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "kirti"
}
//course.courseInstructor

///or another method...to call value..
///by destructuring...
const {price} = course
console.log(price);

//// API can get in array form like [{},{},{}] and also can get in object form without name {"key": "value"}both are in double quotes
//eg... 
// {
//     "name": "kirti",
//     "coursename1":"JS in hindi",
//     "price":"free"
// }
 