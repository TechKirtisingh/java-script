"use strict"; // treat all JS code as newer version

// alert(3+3) // we are using node js

console.log(3+3)
console.log("kittu")
let name="kirti"
let age =19
let islog =false
let state = null

console.table([name,age,islog]);

///// some datatypes you should know  ::--->> 

// number => 2 to power 53
//bigint  (when no. is too long)
//string => ""
//boolean =>true/false
//null=>standalone value(mtlb value abhi aya hi nii hai)
//undefine ((value not assign))
//symbol ((used for unique))


////<<<<<<   Summary (datatype)  >>>>>>///////////

/* 
- interview related questions 

- primitive and non primitive (call by value, call by reference)

- primitive:7 (call by value)

- string, number, boolean, null, undefined, symbol , BigInt

- non primitive:3 (call by reference)

- arrays, object, function 

- dynamically type vs statically type

- js is dynamically typed

- const id = Symbol("123")

- const anotherId = Symbol("123")

- id === anotherId => false

- array, object, function overview 

- typeof datatyped is available on documentation  */