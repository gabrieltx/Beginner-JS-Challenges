const classA = [
    {
        name: "Jose",
        grade: 8
    },
    {
        name: "Pedro",
        grade: 7
    },
    {
        name: "Ana",
        grade: 4
    }
];

const classB = [
    {
        name: "Joao",
        grade: 2
    },
    {
        name: "Carlos",
        grade: 0
    }
];

function calculateaverage(students) {
    
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length;
    return average
}

const averageA = calculateaverage(classA)
const averageB = calculateaverage(classB)

function SendMsg(average, Class) {
    
    if (average > 5) {
        console.log(`The average of ${Class} was ${average}, congrats!`)
    }
    else {
        console.log(`The average of ${Class} was ${average}`)
    }
}

function MarkFlunk(student) {
   
    student.flunked = false;
    if (student.grade < 5) {
        student.flunked = true;
    }
}

function SendrMsgRep(student) {
    
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
    }
}

function studentsflunked(students) {
    
    for (let student of students) {
        MarkFlunk(student);
        SendrMsgRep(student);
    }
}

SendMsg(averageA, 'ClassA')
SendMsg(averageB, 'ClassB')
studentsflunked(classA)
studentsflunked(classB)
