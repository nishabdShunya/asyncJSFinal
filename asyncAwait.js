/* Additional Sharpener Task Three
Convert the createPost, deletePost you wrote previously into async await completely. */
let posts = [
    { title: 'Post One', body: 'This is Post One' },
    { title: 'Post Two', body: 'This is Post Two' }
];

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        })
        document.querySelector('main').innerHTML = output;
    }, 1000)
}

async function createPost(post) {
    const postCreatePromise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve('Promise Resolved');
            }
            else {
                reject('Error:Something went wrong');
            }
        }, 2000);
    });
    try {
        getPost();
    }
    catch (error) {
        console.log(error);
    }
};

async function deletePost() {
    const postDeletePromise = await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length != 0) {
                resolve(posts.pop());
            }
            else {
                reject('Array is Empty Now');
            }
        }, 1000);
    });
    try {
        console.log('This is the deleted post: ', postDeletePromise);
        getPost();
    }
    catch (error) {
        console.log(error);
    }
};

createPost({ title: 'Post Three', body: 'This is Post Three' })
    .then(deletePost).catch(err => console.log(err))
    .then(deletePost).catch(err => console.log(err))
    .then(deletePost).catch(err => console.log(err))
    .then(deletePost).catch(err => console.log(err))
    .then(() => {
        createPost({ title: 'Post Four', body: 'This is Post Four' })
            .then(deletePost).catch(err => console.log(err))
            .then(deletePost).catch(err => console.log(err))
    })
    .catch(err => console.log(err));