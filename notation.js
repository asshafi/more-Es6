const student = {
    name: 'kolim udding',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemisty:65
    },
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chenistry '];
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);