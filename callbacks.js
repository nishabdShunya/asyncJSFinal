/* Additional Sharpener Task Three
Update the value of timestamp every second. */
let posts = [
    { title: 'Post One', body: 'This is Post One', createdAt: Math.floor((new Date().getTime()) / 1000) },
    { title: 'Post Two', body: 'This is Post Two', createdAt: Math.floor((new Date().getTime()) / 1000) }
];
let intervalID;
function getPost() {
    clearInterval(intervalID);
    intervalID = setInterval(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} | created ${Math.floor((new Date().getTime()) / 1000) - post.createdAt} seconds ago</li>`;
        })
        document.querySelector('main').innerHTML = output;
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({ ...post, createdAt: Math.floor((new Date().getTime()) / 1000) });
        callback();
    }, 2000);
}

function create4thPost(callback) {
    setTimeout(() => {
        callback({ title: 'Post Four', body: 'This is Post Four' }, getPost);
    }, 2000)
}

getPost();
createPost({ title: 'Post Three', body: 'This is Post Three' }, getPost);
create4thPost(createPost);