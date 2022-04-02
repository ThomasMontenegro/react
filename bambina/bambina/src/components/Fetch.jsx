let correct = true;

const Fetch = (time,task) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            if (correct) {
                resolve(task);
            } else {
                reject("error");
            }
}, time)})};

export default Fetch;