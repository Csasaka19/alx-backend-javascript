export default function getStudentIdsSum(arg) {
  if (arg instanceof Array) {
    return arg.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
