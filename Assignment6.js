/*Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"*/
const courses = ["javascript", "react", "node", "mongodb", "express"];
let namFil = courses.filter(c => c.length > 5)
console.log(namFil);
let namMap = courses.map(c => c.toUpperCase())
console.log(namMap);
let nameRed = namMap.reduce((acc, c) => acc + " | " + c)
console.log(nameRed);
let namFind = courses.find(c => c == "react")
console.log(namFind);
let namFindInd = courses.findIndex(c => c == "node")
console.log(namFindInd);

