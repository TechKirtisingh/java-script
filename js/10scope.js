function one(){
    const username = "kumkum"
//    console.log("welcome back");
    
    function two(){
        const website = "youtube"
//        console.log(username);  
    }
//    console.log(website); //define outside the scope
    two()
}
one()

/////+++++++++++++interesting++++++++++++++////

//console.log(addone(5));
function addone (num){
    return num + 1
}
// console.log(addone(5));

/// fuction kaise declare karte hai ispe depend karta hai
/// agar ek var ke sath function declare karenge to wo ise hm upper call kr ke print nii kr payenge...
//console.log(addtwo(3));
const addtwo = function(numb){
    return numb + 2
}
// console.log(addtwo(3));

