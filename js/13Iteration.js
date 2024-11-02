//// FOR LOOP ////

for (let i = 0; i <10 ; i++) {
    const value = i; 
    if(value==5){
//        console.log("number is 5");  
    }
//    console.log(value);    
}

for (let i = 0; i <= 10; i++) {
//    console.log(`outer loop are ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`inner loop are ${j} and inner loop ${i}`);  
//        console.log(i + "*" + j + "=" + i*j);
    }
}

let myarray = ["flash","batman","superman"]
//console.log(myarray.length);
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
//    console.log(element);  
}

/// break and continue ////

////// BREAK ///////

for (let i = 0; i <20 ; i++) {
    const element = i;
    if(i==5){
        break;
    }
//    console.log(element);  
}

////// CONTINUE ////

for (let i = 0; i <20 ; i++) {
    const element = i;
    if(i==5){
//        console.log("best num..");
        continue;
    }
//    console.log(element);  
}

///////////////      WHILE    ////////////////

let i=0
while (i<=8) {
//    console.log(`value of i is ${i}`);
    i+=2
}

let myarray1 = ["flash","batman","superman"]

let arr=0
while (arr<myarray1.length) {
//    console.log(`value is ${myarray1[arr]}`);
    arr = arr + 1;
}

///////////////   DO   WHILE    ////////////////

let score=11;
do{
//    console.log(`score is ${score}`);
    score++;
 }while (score<=10); 
