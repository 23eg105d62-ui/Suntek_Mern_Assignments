/*Student Performance Dashboard

You are working on a college result analysis system.

Tasks:




*/
const students = [
    { id: 1, name: "Ravi", marks: 78 },
    { id: 2, name: "Anjali", marks: 92 },
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Sneha", marks: 88 },
    { id: 5, name: "Arjun", marks: 40 }
];

//filter() students who passed (marks ≥ 40)


let passed = students.filter(studentObj => studentObj.marks >= 40)
console.log(passed);
/*map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D*/
let grades = students.map(studentObj => {
    let grade;
    if (studentObj.marks >= 90) {
        grade = 'A'
    }
    else if (studentObj.marks >= 75) {
        grade = 'B'
    }
    else if (studentObj.marks >= 60) {
        grade = 'C'
    }
    else {
        grade = 'D'
    }
    return { studentObj, grade }
})
console.log(grades);
//reduce() to calculate average marks
let sum = students.reduce((acc, studentObj) => acc + studentObj.marks, 0)
let avg = sum / students.length
console.log(avg);
//find() the student who scored 92
let a = students.find(studentObj => studentObj.marks == 92)
console.log(a);
//findIndex() of student "Kiran"
let b = students.findIndex(studentObj => studentObj.name == "Kiran")
console.log(b);
