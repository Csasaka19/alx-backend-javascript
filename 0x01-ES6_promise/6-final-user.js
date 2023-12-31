import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => (
      values.map((l) => ({
        status: l.status,
        value: l.status === 'fulfilled' ? l.value : String(l.reason),
      }))
    ));
}
