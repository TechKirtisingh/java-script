//////// array    ////

//It store multiple items under a single variable name
// In js arrays aren't primitive
// Arrays are resizeable and can contain a mix of different datatype
//arrays are Zero-Indexed
//**  JS array-copy operations create shallow copies(A shallow copy of an object is a copy whose properties share the same reference(point to the same underlying values)as those of the source object from which the copy are made.)****(matlb jo bhi chage karenge wo original me change hoga).

const myarray = [9,1,2,3,4,5,6,7]
const myhero = ["sarukh","prabhash","naagraj"]
const myarray2 = new Array (1,2,3,4,5,8,9)
console.log(myarray[0]);



/////     ARRAY METHOD //////




// //@@@@@  i)push (to add element)

// myarray.push(6)
// console.log(myarray);

// myarray2.push(16)
// console.log(myarray2);


// //@@@@@  ii)pop (to remove last element) 

// myarray.pop()
// console.log(myarray);

// myarray2.pop()
// console.log(myarray2);


// //@@@@ iii)unshift(element insert at first postion) and shift (remove first element)

// myarray.unshift(8)
// console.log(myarray);
// myarray.shift()
// console.log(myarray);

///@@@@  iv)includes (check wheather no. is there or not)

// console.log(myarray.includes(8));
// console.log(myarray.includes(0));

// //@@@@  v).join (covert array in string and write array in string formate)
// inside bracket you can use specified separator to separate array in string formate...

const newarray = myarray.join(';')
console.log(myarray);
console.log(newarray);
console.log(typeof (newarray));


/////@@@@ vi)  slice(isme kewal index value hi print ) and splice(original me us index ki value nikal dete hai(change) aur last index bhi print hoga) me diiferece or Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements


// console.log((" A ", myarray));

// const myn1 = myarray.slice(1,3)
// console.log(myn1);

// console.log((" B ", myarray));
// const myn2 = myarray.splice(1,3)
// console.log(myn2);

// console.log((" C ", myarray));


// //////@@@@  vii) %%%%%%%%%%  push and concatinate an array %%%%%%%%///////

// //push(ADD New elements to the array.Appends new elements to the end of an array, and returns the " new length" of the array.)

// const marvelhero = ["thor","ironman","spiderman"]
// const hero = ["prabash","nagarjun","akshyakumar"]
// marvelhero.push(hero)
// console.log(marvelhero);

// ///@@@@@@ viii)  concat(Combines two or more arrays. This method returns a new array without modifying any existing arrays)

// const allhero = marvelhero.concat(hero)
// console.log(allhero);

///@@@@@ ix)  spread {symbol ...____, ..._____ ,..._____} (bikhar jayega) (act as a concat)(diff is we add infite no. of array) or [<<<same as concat>>>>]

// const all_newhero = [...marvelhero, ...hero]
// console.log(all_newhero);

// @@@@@ x) flat(Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.)
///agar box ke andar box ho to.......un sab ko convert kr denge ek array me by using flat


// const anarray = [1,2,3,[4,5,6],6,[7,8,[3,4,6]]]
// const realarray = anarray.flat(Infinity) /// (kitne depth hai hm infinite likh diye hai uski jagah pe)
// console.log((realarray));


//@@@@ xi)   isArray(""pata karenge ki array hai ki nahi us name se.."")
//@@@@ xii)  Array.from (""wo ek array banna deta hai"")

// console.log(Array.isArray("KirtiSingh"));
// console.log(Array.from("KirtiSingh"));

// //interesting case (because ye ek empty box de dega){hame ise batana padega ki hm keys ka array banaye ya value ka...}
// console.log(Array.from({name:"kirti"}));

// //@@@@ xiii) (Array.of) convert differnt elemnt in an array

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3));


