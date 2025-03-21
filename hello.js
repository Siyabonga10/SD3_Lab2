'use strict' // don't forget this, it won't be shown in future code samples

const ELEN4010 = {
  courseCode: 'ELEN4010'
}

const ELEN3009 = {
  courseCode: 'ELEN3009'
}

const ELEN2003 = {
  courseCode: 'ELEN2009'
}

const ELEN1003 = {
  courseCode: 'ELEN1009'
}

const getCourseSummary = function (course) {
  let yos = ''
  if (course.courseCode.includes('40')) { yos = '4th' } else if (course.courseCode.includes('30')) { yos = '3rd' } else if (course.courseCode.includes('20')) { yos = '2nd' } else { return 'Course not found.' }

  return `${course.courseCode} is offered in the ${yos} year of study.`
}

console.log(getCourseSummary(ELEN4010))
console.log(getCourseSummary(ELEN3009))
console.log(getCourseSummary(ELEN2003))
console.log(getCourseSummary(ELEN1003))
