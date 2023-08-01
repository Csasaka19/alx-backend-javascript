export default function getListStudentIds(arg) {
  if (arg instanceof Array) {
    return arg.map((arg) => arg.id);
  }
  return [];
}
