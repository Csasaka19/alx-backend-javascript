export default function updateStudentGradeByCity(arg, city, newGrades) {
  const initialGrade = { grade: 'N/A' };

  if (arg instanceof Array) {
    return arg
      // Filter by city first
      .filter((arg) => arg.location === city)
      /*Use map to update array*/
      .map((arg) => ({
        id: arg.id,
        firstName: arg.firstName,
        location: arg.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === arg.id)
          .pop() || initialGrade).grade,
      }));
  }
  return [];
}
