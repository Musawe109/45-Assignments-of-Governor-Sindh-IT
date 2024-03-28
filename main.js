"use strict";
//Assignment 1
// storing a person name in Lower Case
let personName = "Ali Ahmed Bangash";
console.log("LowerCase:", personName.toLowerCase());
// storing a person name in Upper Case
console.log("UpperCase:", personName.toUpperCase());
//storing a person name in Title Case
console.log("TitleCase:", personName.replace(/\b\w/g, c => c.toUpperCase()));
