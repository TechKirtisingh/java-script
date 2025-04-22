// const name="kirti singh"
// const course = "btech"

// //console.log(name+repocount+"value");

// console.log(`Hello my name is ${name} and my repo count is ${course}`);

// console.log(`Hello everyone myself ${name} and currently i am doing ${course}`);


//// method to write string
//// diffent method is used as a string

// const gamename = new String ('kittu Singh')

// console.log(gamename[0]); // get index 0 element
// console.log(gamename.__proto__);
// console.log(gamename.length); // .length direct call karo ya " .__length__" kr ke call kr sakte hai
// console.log(gamename.toUpperCase()); // convert all the element in upper case
// console.log(gamename.split('')); 
// console.log(gamename.charAt(8)); // kis position pe kon sa character hai ye pata karte hai..
// console.log(gamename.indexOf('t')); // kon sa char kis postion pe hai (by index).


//// we use substring to create a new string aur directly we use this 

// const newString = gamename.substring(0,4) // yaha 4 tk hai to kewal 3 index tk hi print hoga
// console.log(newString);
// // //////////////////////////   or           /////////////////////////////
// console.log(gamename.substring(0,5)); // yaha 4 index tk hi print hoga

///////////  slice string (.....we can give negative value also.....)   ///////

// const anotherstring = gamename.slice(4,9)
// console.log(anotherstring);

// /////// TRIM   (USED TO REDUCE ......STARTING AND ENDING.......  SPACE)    ////////

// const newstringone = "  kirti  singh  "  //// bich ka space gayab ""nii"" hoga...
// console.log(newstringone);
// console.log(newstringone.trim());

////////////   REPLACE    ////////

// const url ="https://kirti.com/kirti%20singh"
// console.log(url.replace('%20','-'));
// console.log(url.includes('kirti')); //check kr rahi hu hai ki nii??
