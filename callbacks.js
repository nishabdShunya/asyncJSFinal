/* Additional Sharpener Task One
Make a new function call create4thPost for adding one more new post "Post Four". create4thPost should take createPost as a callback function. Once the post is created all the 4 posts should be displayed too. */
let posts = [
    { title: 'Post One', body: 'This is Post One' },
    { title: 'Post Two', body: 'This is Post Two' }
];

function getPost() {
    let output = '';
    setTimeout(() => {
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        })
        document.querySelector('main').innerHTML = output;
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This is Post Three' }, getPost);

function create4thPost(callback) {
    setTimeout(() => {
        callback({ title: 'Post Four', body: 'This is Post Four' }, getPost);
    }, 2000)
}
create4thPost(createPost);