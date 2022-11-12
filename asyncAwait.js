/* Just as YouTuber does */
// Using async await await in the example
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => { setTimeout(() => { resolve('ticket'); }, 3000); });

    const getPopcorn = new Promise((resolve, reject) => { resolve('popcorn'); });

    const addButter = new Promise((resolve, reject) => { resolve('butter'); });

    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: i have the ${ticket}`);
    console.log(`husband: we should go in`);
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log(`husband: we should go in`);
    console.log('wife: I need butter on popcorn');

    let butter = await addButter;

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log(`wife: lets go`);

    return ticket;
};

preMovie().then((msg) => console.log(`person3: shows ${msg}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');

// NOTE: Async function always returns a promise
// NOTE: Await can be used only inside an async function