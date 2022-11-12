/* Additional Sharpener Task One
Create a new function called delete post which uses promises and deletes in 1 second (processing time - mimic it with setimeout). Everytime you call it, it should delete the last element of the array.
Continue deleting the elements up till all the elements are deleted from the array. Now when you delete again an error would be thrown, catch the error and console log in the browser -> Array is empty now. You dont have to use for loop as there are only 3 posts. Just call delete post 3 times. */
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
                getPost();
                deletePost()
                    .then(() => {
                        getPost();
                        deletePost()
                            .then(() => {
                                getPost();
                                deletePost()
                                    .then(() => { })
                                    .catch(error => console.log(error));
                            })
                            .catch(error => console.log(error));
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    })
    .catch(errMsg => console.log(errMsg));