export default function getStudentsByLocation(arg, city) {
  if (arg instanceof Array) {
    return arg.filter((arg) => arg.location === city);
  }
  return [];
}
