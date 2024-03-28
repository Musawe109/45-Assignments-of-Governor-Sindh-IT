"use strict";
//Assignmnet 1
//storing a person name in lower case
let userName = "Musawer Bangash";
console.log("LowerCase", userName.toLowerCase());
//storing a person name in upper case
console.log("UpperCase", userName.toUpperCase());
//storing a person name in title case
console.log("TitleCase", userName.replace(/\b\w/g, d => d.toUpperCase()));
