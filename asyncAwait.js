/* Just as YouTuber does: Async-Await & Error Handling */
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => { setTimeout(() => { reject('ticket'); }, 3000); });
    let ticket;
    try {
        ticket = await promiseWifeBringingTicks;
    }
    catch (err) {
        ticket = 'sad face'
    }
    return ticket;
};

preMovie().then((msg) => console.log(`person3: shows ${msg}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');