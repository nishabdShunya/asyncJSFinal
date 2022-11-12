/* Additional Sharpener Task Two
Create a new promise called getColdDrinks which come after husband gets butter. Integrate the code in asyncAwait code. */
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => { setTimeout(() => { resolve('ticket'); }, 3000); });

    const getPopcorn = new Promise((resolve, reject) => { resolve('popcorn'); });

    const addButter = new Promise((resolve, reject) => { resolve('butter'); });

    const getColdDrinks = new Promise((resolve, reject) => { resolve('cold-drinks') });

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

    let coldDrinks = await getColdDrinks;

    console.log(`husband: wait! i have also got some ${coldDrinks}, grab them`);
    console.log(`wife: yeah sure! thanks darling`);

    return ticket;
};

preMovie().then((msg) => console.log(`person3: shows ${msg}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');