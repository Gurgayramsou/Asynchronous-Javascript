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
    }, 3000);
    return 'success';
}