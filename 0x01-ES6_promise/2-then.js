export default function handleResponseFromAPI(promise){
    promise = new Promise((resolve, reject) => {
        if (promise){
            resolve({
                status: 200,
                body: 'Success'
            });
        }
        else{
            reject(new Error());
        }
    });
    return promise.then(() => {
        console.log('Got a response from the API');
    });
}