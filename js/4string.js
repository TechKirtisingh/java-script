// const name="kirti"
// const repocount = 50

// //console.log(name+repocount+"value");

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

//// method to write string
//// diffent method is used as a string

const gamenam = new String ('kittu Singh')

console.log(gamenam[0]); // get index 0 element
console.log(gamenam.__proto__);
console.log(gamenam.length); // .length direct call karo ya " .__length__" kr ke call kr sakte hai
console.log(gamenam.toUpperCase()); // convert all the element in upper case
console.log(gamenam.split('')); 
// console.log(gamenam.charAt(8)); // kis position pe kon sa character hai ye pata karte hai..
// console.log(gamenam.indexOf('t')); // kon sa char kis postion pe hai (by index).


// we use substring to create a new string aur directly we use this 

// const newString = gamenam.substring(0,4) // yaha 4 tk hai to kewal 3 index tk hi print hoga
// console.log(newString);
// //////////////////////////   or           /////////////////////////////
// console.log(gamenam.substring(0,5)); // yaha 4 index tk hi print hoga

///////////  slice string (.....we can give negative value also.....)   ///////

// const anotherstring = gamenam.slice(4,9)
// console.log(anotherstring);

/////// TRIM   (USED TO REDUCE STARTING AND ENDING SPACE)    ////////

// const newstringone = "    kirti    "
// console.log(newstringone);
// console.log(newstringone.trim());

////////////   REPLACE    ////////

const url ="https://kirti.com/kirti%20singh"
console.log(url.replace('%20','-'));

console.log(url.includes('kirti'));
