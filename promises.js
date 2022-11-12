/* Additional Sharpener Task Two
Try creating a post (post four) and once the post is created, call delete post after 1 second and delete post 4.
How would you do it? Write the code. */
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

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length != 0) {
                resolve(posts.pop());
            }
            else {
                reject('Array is Empty Now');
            }
        }, 1000);
    });
};

createPost({ title: 'Post Three', body: 'This is Post Three' })
    .then(() => {
        getPost();
        deletePost()
            .then(() => {
                getPost()
                deletePost()
                    .then(() => {
                        getPost();
                        deletePost()
                            .then(() => {
                                getPost();
                                createPost({ title: 'Post Four', body: 'This is Post Four' })
                                    .then(() => {
                                        getPost();
                                        deletePost()
                                            .then(getPost)
                                            .catch(msg => console.log(msg));
                                    })
                                    .catch(err => console.log(err));
                            })
                            .catch(msg => console.log(msg));
                    })
                    .catch(msg => console.log(msg));
            })
            .catch(msg => console.log(msg));
    })
    .catch(err => console.log(err));