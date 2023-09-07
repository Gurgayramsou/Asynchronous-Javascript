
// these are posts
import { posts,getPosts } from "./modules/required.js";

// promise
function createPosts(post){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        posts.push(post);
        const err = true;
        if(!err){
            resolve();
        }
        else{
            reject("Some error happened!");
        }
    }, 3000);
   })
}

createPosts(
    {title:'Post Three',body :'This is post three'}
).then(getPosts()).catch(err=>{console.log(err)})