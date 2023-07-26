import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";
export function handleProfileSignup(firstName, lastName, fileName){
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
        for (const value of values) {
            if (value.status === 'fulfilled') {
                console.log(value.value.body);
            } else {
                console.log(value.reason.message);
            }
        }
    });

}