/////     object with array loop      ///////


const myobj = {
    js: "javascript",
    ccp: "C++",
    py: "python",
    rb: "ruby",
    swift: "swift by app",
    DSA: "data structure"
}

for (const key  in myobj) {  //////{{here print key}}
    // console.log(key);  

}

// console.log("\n");

for (const key  in myobj) {  /////{{{here we print value}}}
//    console.log(myobj[key]);  
}

///////    {{{{{ARRAY}}}}}   ///////

const prog = ["js","c","py","DSA","cpp","rb"]

for (const key in prog) {
    // console.log(key);  
    // console.log(prog[key]);  
}



/////   {{{for in loop in map()}}}

// const map = new Map()  // hare Map() should be in capital letter..
// map.set('IN','India');
// map.set('USA', 'United State of America');
// map.set('Fr' , 'France');
// map.set('IN' , 'India');
// map.set('UK' , 'United Kingdom');
// map.set('HP' , 'Himachal Pradesh')

// for (const key in map) {
//     console.log(key); // iterable {{{nii}}} hai map me...    
// }




/////////// (((((((.......FILTER MAP AND REDUCE.....)))))))

const coding = ['js','py','cpp','rb','java']
const value = coding.forEach((item) => {
//    console.log(item);
//    return item;  ////// for each doesn't return thr value
})
//console.log(value); /// undefine show kr raha hai isley kuki....foreach doesn't return the value...

const mynums = [1,2,3,4,5,6,7,8,9,10]

/// filter return the value....

const newnum=mynums.filter((num)=>num>4)
//console.log(newnum);


//(((   it show an empty box[] BUT HERE WE USE RETURN TO GET RESULT   )))
const newnums=mynums.filter((num)=>{ //// as here we local scope is there due to paranthesis 
    return num>4       ///for this we have to use {{{RETURN KEYWORD}}}
})
console.log(newnums);

