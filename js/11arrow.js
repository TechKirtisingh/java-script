const user ={
    username: "kirti",
    price:999,

    welcomemessage: function(){
//        console.log(`${this.username } , welcome to website`); // this make current contest in function
//        console.log(this); /// jo bhi current value hai uski baat karta hai.....sabko hi print karega kirti aur sam dono ke saath pura hi message ayega.. 
    }
}

user.welcomemessage()
user.username="sam" ///ye context hai...
user.welcomemessage() /// aur ye change hogya

//console.log(this); // outside the function give empty current contest...

///agar hm this ko function ke andar print karenge to wo kai dheer saari value ko batayega

function chai(){
    let username = "kirti"
//    console.log(this); 
//   console.log(this.username); // ye undefine print kr de raha hai..
    
}
chai()

///+++++++++++ARROW++++++++++++///

//// ---syntax---  ////
//// datatype name=() =>{}


const chai = () => {
    let username = "kumkum"
    console.log(this); // same empty paranthises  ayega
}

///+++++++EXPLICIT RETURN (when we write return keyword..)
////IF WE USE CURLY BRACKET THEN WE HAVE TO WRITE RETURN..........

const addtwo = (num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,6));

/////############3 IMPLICIT RETURN (WE DON'T HAVE TO USE CURLY BRACKET {})

const add2 = (num1,num2)=>  num1 + num2

//////OR BUT{IF WE USE SMALL BRACKET code will run...}

const add1 = (num1,num2)=>  (num1 + num2)

console.log(add2(6,1));

console.log(add1(4,5));

//////but object ko retur karne ke liye curly bracket ka use karna hi padega...
const addto = (num1,num2)=>  ({usernam: "kirti singh"})

//// immediately invoked function.......

(function chaicup () {
    console.log(`kumkum`); // same empty paranthises  ayega
})()

()() 
//// first () is a fuction definetion and 2nd () is fuction call ////???example {it act like..} chai()

