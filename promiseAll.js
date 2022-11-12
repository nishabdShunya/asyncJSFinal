/* Additional Sharpener Task One
I want you to create one more promise called updateUserLastActivityTime. Every time the user creates a post, this promise should be parallely called (should execute in 1 second). When both the promises (createPost and updateLastUserActivityTime resolve), I want you to console log all the posts created and lastActivityTime of the user. */
let posts = [
    { title: 'Post One', body: 'This is Post One' },
    { title: 'Post Two', body: 'This is Post Two' }
];

const user = {
    name: 'Vegeta',
    lastActivityTime: new Date()
};

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        })
        document.querySelector('main').innerHTML = output;
    }, 1000);
};

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve()
            }
            else {
                reject('Error:Something went wrong')
            }
        }, 2000);
    });
};

console.log(`User last activity time before updating: ${user.lastActivityTime}`);

function updateUserLastActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date()
            resolve(user.lastActivityTime)
        }, 1000);
    });
};

Promise.all([createPost({ title: 'Post Three', body: 'This is Post Three' }), updateUserLastActivityTime()])
    .then(([postCreated, timeUpdated]) => {
        getPost(); // Displaying posts on the DOM
        posts.forEach((post) => {
            console.log(post);  // Logging posts onto the Console
        });
        console.log(`User last activity time after updating: ${timeUpdated}`);
    });