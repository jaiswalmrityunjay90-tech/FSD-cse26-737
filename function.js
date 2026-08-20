// function displaystd(data) {
//     console.log(student.name);
//     console.log(student.age);
// }

// let student = {
//     name: "mohit",
//     age: 20
// };

// displaystd(student);
// let student_arr=[
//     {
//         name: "mohit",
//         age : 20
//     },
    
//     {
//         name: "mukul",
//         age : 20
//     },
    
//     {
//         name: "sachin",
//         age : 20
//     }
// ]
// function displaystd(data) {
//     for(let student of data ){
//         console.log(student.name,student.age);

//     }
// }
// displaystd(student_arr);
let student = {
    name: "RAHUL",
    marks: [90, 40, 50]
};

function displaystd(student) {
    console.log(student.name);
    console.log(student.marks);
}

function calctotal(student) {
    let total = 0;

    for (let mark of student.marks) {
        total += mark;
    }

    return total;
}

displaystd(student);

let result = calctotal(student);
console.log(result);