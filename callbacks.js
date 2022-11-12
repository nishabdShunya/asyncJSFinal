/* Additional Sharpener Task Two
Lets also record when the post was created. So now onwards whenever. a new post is created  add a new key called createdAt in each post. CreatedAt should have the timestamp of  when the post was created. So now your post object would look like { title, body, createdAt}
On the screen show the user how long back each of the post was created in seconds ago. Just add "{ current timestamp  - postcreated At timestamp }" on each of the post. It should look like the following:
Post 1 created x seconds ago
Post 2 created y seconds ago
Post 3 created z seconds ago */
let posts = [
    { title: 'Post One', body: 'This is Post One', createdAt: Math.floor((new Date().getTime()) / 1000) },
    { title: 'Post Two', body: 'This is Post Two', createdAt: Math.floor((new Date().getTime()) / 1000) }
];

function getPost() {
    setTimeout(() => {
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