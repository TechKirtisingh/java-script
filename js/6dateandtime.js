// let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toLocaleString()); /// date ke sath time bhi print hota hai
// console.log(mydate.toDateString()); // sirf day aur date print hoga
// console.log(typeof (mydate));

//let myCreateddate = new Date(2023, 9 , 22)
// console.log(myCreateddate.toDateString());

////////         Time             ///////////

// let mytimestamp = Date.now()
// console.log(mytimestamp); //// milisec value deti hai 
// console.log(myCreateddate.getTime());
// console.log(Math.floor(Date.now()/1000)); // mili sec ko sec me convert

let newdate = new Date()
console.log(newdate.getDay());
console.log(newdate.getMonth());
newdate.toLocaleString('default',{weekday: "long",
    
})

