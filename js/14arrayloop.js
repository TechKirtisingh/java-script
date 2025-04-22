 ///////   for of loop   /////////

////  for of statement loops through the values of an iterable object.It lets you loop over iterable data structures such as Arrays, Strings,"""Maps""", NodeLists, and more:

// ["","",""] ---> array ke andar string...
// [{},{},{}] ---> array ke andar objects....

//// work on array

const arr = [1,2,3,4,5,6]
for (const i of arr) {
//    console.log(i);  
}

///work on elements.......

const greeting = "hello worlds!";
for (const j of greeting) {
//   console.log(j);
}

/////////   map    //////////
////  map is some how work as object.. holds key-value pairs 
/// remember the original order of the insertion.. but obj. don't remeber the order of insertion....
/// unique map in the collection no duplicate value..


const map = new Map()  // hare Map() should be in capital letter..
map.set('IN','India');
map.set('USA', 'United State of America');
map.set('Fr' , 'France');
map.set('IN' , 'India');
map.set('UK' , 'United Kingdom');
map.set('HP' , 'Himachal Pradesh')
//console.log(map);

//console.log(map.get('IN'));

map.set('IN','Indonasia');
//console.log(map.get('a'));

//console.log(`size of the map is ${map.size}`);

map.delete('USA');
//console.log(map);

/// hm for of me normally ITERATION ki jagah key likhe to wo result me """array formate me print karega"""

// for (const [key , value] of map) { /// we use ""[key , value]"" to destructre array at the place of iteration
//     console.log(key , ':-' , value );
// }

////// OBJECTS.........

const myobj = {
    'game1':'NFS',
    'game2':'spiderman',
    'game3':'BGMI'
}

/// IF WE USE """FOR OF LOOP""" IT SHOW OUTPUT::-->>>  myobj is not iterable {{..obj NOT WORK in loop..}}
// for (const [key , value] of myobj) { 
//    console.log(key , ':-' , value );
// }

///////////// {{{{{{FOR EACH LOOP}}}}}}

////forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
////Performs the specified action for each element in an array.

//// callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
//// thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.


const coding = ['js','py','cpp','rb','java']

////  use of function

coding.forEach(function(value){
//    console.log(value);
})

////   use of arrow 

coding.forEach((items) => {
//    console.log(items);    
})

//// printMe() parameter::-->> print the value

function printMe(item){
   // console.log(item);
}

//coding.forEach(printMe)  ////printme() function ki tarah km nii krega...


coding.forEach((item , index , arr) => {
//    console.log(item, index, arr);    
})

/// first creating an array then make obj inside it....

const mycode = [
    {
        langname: "javascript",
        langfilename: "js",
    } ,
    {
        langname: "java",
        langfilename: "j",
    } ,
        {
        langname: "python",
        langfilename: "py",
    } ,
]

mycode.forEach( (items) =>{
    // console.log(items.langname); /// yaha pe jb item ko ascess kr rhe hai to wo object ka ascess hai na ki kewal item ka... 
    // console.log(items.langfilename);
})

 