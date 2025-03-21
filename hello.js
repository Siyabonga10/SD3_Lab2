'use strict' // don't forget this, it won't be shown in future code samples

const students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
  },
  {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  }
]

const removeStudentRecord = function (student) {
  const index = students.findIndex(function (studentFromList) {
    return studentFromList.name === student.name && studentFromList.studentNumber === student.studentNumber && studentFromList.yearOfStudy === student.yearOfStudy
  })
  if (index !== -1) { delete students[index] }
}

const Kiren = {
  name: 'Kiren',
  studentNumber: 567893,
  yearOfStudy: 4
}

removeStudentRecord(Kiren)

console.log(students)
