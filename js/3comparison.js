// console.log(2>1);
// console.log(2<=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

//^^^^  we got prblm b/c  
//// console.log("2">1); /// string is treat as a number...


///####  the reason is that an equality check == and comparisons <,>,>=,<= work differently
//** COMPARISONS CONVERT NULL TO A NUMBER, TREATING IT AS 0.


// console.log(null>0);  //// false 
// console.log(null==0); // false
// console.log(null>=0);  ///that's why true


////    ===  (triple equal to) (it check not only value but also check the datatype)


///// use of SYMBOL::------>
///   both symbol act as a new symbol and a unique symbol
// const id = Symbol("123")
// const id2 = Symbol("123")
// console.log(id==id2); // ***return false***

/////// Stack(Primitive)  ,  Heap(Non Primitive)

///////////$$$$$$$$$$$  STACK   $$$$$$$$$$$$$$$$//////////////


// isme agar value change kr rahe hai to wo kewal iske copy me change hoga na ki pure me....(original me)
// check this example yaha myyoutname me jo value haiwo fix hai hm equal karne ke baad bhi agar anothername me change kiye hai to wo kewal another name me change hoga
let myyoutname="kirtidotcom"
let anothername = myyoutname
anothername = "kittudotcom"
console.log(anothername);
console.log(myyoutname);


////?????????? HEAP ???????????/////
/// changes in orignal value ......

let userone ={
    email: "user@google.com",
    upid:  "user@ybl"
}
let usertw0 = userone 
/// yaha pr hm usertwo ki value change kiye hai hai to jo usertwo ki vaue denge wahi user 1 ki bhi value ho jati hai hai...
///yahi hai difference stack aur heap me  
 usertwo.email = "kirtis@gmail.com" 
console.log(usertwo.email);
console.log(userone.email);
 