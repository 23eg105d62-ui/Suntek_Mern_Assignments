
const marks = {
    maths: 78,
    physics: 65,
    chemistry: 82,
    english: 55
};

/*Tasks:
    
Calculate total marks
Calculate average marks
Find the highest scoring subject
Add a new subject computer: 90*/
let sum = 0;
for (let v in marks) {
    sum += marks[v];
}
let avg = sum / Object.keys(marks).length;

let highestMarks = marks[0]
for (let v in marks) {
    if (marks[v] > highestMarks) {
        highestMarks = marks[v]
        highestSubject = v;
    }
}
console.log("Total Marks:", sum);
console.log("Average Marks:", avg);

marks.computer = 90;
console.log("Marks after adding computer:", marks);