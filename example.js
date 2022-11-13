/* SOME IMP POINTS ABOUT ASYNCHRONICITY IN JAVASCRIPT
1. JavaScript is a synchronous single threaded language.
2. Why we want to introduce asynchronicity in JS? Because we want to continue our life and not wait for the zomato order or stiched clothes from tailor and so on. Whenever they are resolved/rejected we will get to know about it. Then we can decide what to do.
3. Asynchronicity can be introduced via - 1) callbacks, 2) promises, and 3) promises combined with async-await. The last method is the best one because it makes the code appear as a synchronous code in an asynchronous world.
Now, we will look at an example to understand asynchronicity in JavaScript.

EXAMPLE TASK
1. Buy a Car
2. Plan a Trip
3. Go to Manali
4. Visit Rohtang Pass
*/

/* CALLBACK METHOD-1
function tripToManali() {
    function buyCar() {
        setTimeout(() => {
            console.log('bought a car');
            function planTrip() {
                setTimeout(() => {
                    console.log('trip planned');
                    function goManali() {
                        setTimeout(() => {
                            console.log('reached Manali');
                            function visitRohtang() {
                                setTimeout(() => {
                                    console.log('visited Rohtang Pass');
                                }, 3000)
                            }
                            visitRohtang();
                        }, 2000)
                    }
                    goManali();
                }, 1000)
            }
            planTrip();
        }, 4000)
    }
    buyCar();
}

tripToManali();

CALLBACK METHOD-2
function buyCar(callback1, callback2, callback3) {
    setTimeout(() => {
        console.log('bought a car');
        callback1(callback2, callback3);
    }, 4000);
}

function planTrip(callback2, callback3) {
    setTimeout(() => {
        console.log('trip planned');
        callback2(callback3);
    }, 1000)
}

function goManali(callback3) {
    setTimeout(() => {
        console.log('reached Manali');
        callback3();
    }, 2000)
}

function visitRohtang() {
    setTimeout(() => {
        console.log('visited Rohtang Pass');
    }, 3000)
}

buyCar(planTrip, goManali, visitRohtang);

PROBLEMS WITH CALLBACK METHODS
1. Callback Hell - Nested Callback functions makes the interpretation of code difficult
2. Pyramid of Doom - Code grows horizontally: reduces readability and increases confusion
3. Inversion of Control - Programmer no longer controls the program and becomes dependent on the callback function which now controls the program.
4. Code looks ugly

To solve these problems Promises were introduced.
*/

/* PROMISES
function buyCar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('bought a car');
        }, 4000);
    })
}

function planTrip() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('trip planned');
        }, 1000)
    })
}

function goManali() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('reached Manali');
        }, 2000)
    })
}

function visitRohtang() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('visited Rohtang Pass');
        }, 3000)
    })
}

buyCar()
    .then((msg) => {
        console.log(msg);
        planTrip()
            .then((msg) => {
                console.log(msg);
                goManali()
                    .then((msg) => {
                        console.log(msg);
                        visitRohtang()
                            .then(msg => console.log(msg))
                    })
            })
    });

NOTE: Although, promises solved all the problems associated with callbacks, it gave rise to new problem "promise hell". Also, code's readability has improved but it is still not perfect as code is growing horizontally.

To solve these problems Async-Awaits were introduced.
*/

/* ASYNC-AWAIT with PROMISES */
function buyCar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (!error) {
                resolve('bought a car');
            } else {
                reject('Error: Insufficient budget');
            }
        }, 4000);
    })
}

function planTrip() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (!error) {
                resolve('trip planned');
            } else {
                reject('Error: Urgent business meeting');
            }
        }, 1000)
    })
}

function goManali() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (!error) {
                resolve('reached Manali');
            } else {
                reject('Error: Landslide occured');
            }
        }, 2000)
    })
}

function visitRohtang() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            if (!error) {
                resolve('visited Rohtang Pass');
            } else {
                reject('Error: Forgot Trek Gears');
            }
        }, 3000)
    })
}

async function tripToManali() {
    try {
        const taskOne = await buyCar();
        console.log(taskOne);
        const taskTwo = await planTrip();
        console.log(taskTwo);
        const taskThree = await goManali();
        console.log(taskThree);
        const taskFour = await visitRohtang();
        console.log(taskFour);
    } catch (error) {
        console.log(error);
    }
}

tripToManali()
    .then(() => {
        setTimeout(() => {
            console.log('trip over');
        }, 2000)
    })

/* POINTS TO REMEMBER ABOUT ASYNC-AWAIT
1. ASYNC-AWAIT are used with promises.
2. await can be used only inside an async function.
3. await can be prefixed only before a promise.
4. async function also returns a promise. (That is why you were able to use .then after tripToManali())
5. Use try catch block to handle errors. (Assign true to error variable to see the difference. In whichever function you assign true, the catch block will catch the error message in the reject call of that function and log it to the console. If two functions return the reject error message then the catch block will catch the former one.)
*/