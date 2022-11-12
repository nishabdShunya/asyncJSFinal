/* Just as the YouTuber Does */
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

createPost({ title: 'Post Three', body: 'This is Post Three' })
    .then(getPost)
    .catch(errMsg => console.log(errMsg));