// How to do a Ajax call to get WebApi result?

// Old type of  method:

// By XMLHttpRequest()

// const request = XMLHttpRequest();

// request.open('GET', 'url')

// request.send()
// - this should be inside the event listener in call back function

export const posts = [
    {title:'Post One',body :'This is post one'},
    {title:'Post Two',body :'This is post Tow'},
]

export function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
    return 'success';
}

function createPost(post){
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

// getPosts()

// createPost({
//     title:'Post Three',
//     body:'This is post three'
// });

//After the above code only post 1 and 2 is printed but it wont print
//  the 3rd post bcz, get post will stop after 1s but create post took 2 s to 
// complete the process

// op : Post 1
//      POst 2

// user "callback" in this case

function createPostByCallback(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPostByCallback({
        title:'Post Three',
        body:'This is post three'
    },getPosts)

// op:Post One
//    Post Two
//    Post Three
