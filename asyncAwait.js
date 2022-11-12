/* Additional Sharpener Task One
Create a new promise called getColdDrinks which come after husband gets butter. Integrate the code in promises' code */
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife: i have the tickets');
    console.log(`husband: we should go in`);
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject) => {
        resolve(`${t} popcorn`);
    });
});

const getButter = getPopcorn.then((t) => {
    console.log(`husband: i got some popcorn`);
    console.log(`husband: we should go in`);
    console.log('wife: I need butter on popcorn');
    return new Promise((resolve, reject) => {
        resolve(`${t} butter`);
    });
});

const getColdDrink = getButter.then((t) => {
    return new Promise((resolve, reject) => {
        resolve(`${t} cold-drink`);
    });
})

getColdDrink.then((t) => console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');