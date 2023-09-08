
// these are posts
import { posts,getPosts } from "./modules/required.js";
import { Store } from "./OOPs.js";

// promise
function createPosts(post){
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        posts.push(post);
        const err = false;
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

// Promise.all() usage

const p1 = Promise.resolve('fist promies');
const p2 = 20;
const p3 = new Promise((resolve,reject)=>{
    setTimeout(resolve, 2000,'Goodbye');
})

const p4 = fetch('https://jsonplaceholder.typicode.com/todos').then(value=>{return value.json()});

//Promise.all([p1,p2,p3,p4]).then(value=>{console.log(value)})


//elagent way of doing the above task without then() using
// asynch functions and await keyword
async function fetchUser(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json();
   return data;
}

// console.log(fetchUser());


//from oops file code testing

const cust = new Store("MahaGanapati General store",
[,{
    name:'banana',price:20
},{
    name:'cucumber',price:5
},{
    name:'watermelon',price:50
}],
6
);

cust.DisplayItems();
console.log('---------------------');
console.log(cust.totalCost());
console.log(cust.discountCalc());
for(let i of cust.items){
    console.log(i);
}

const name = '   rama   ';
console.log(name.trim().indexOf('a',2))
//op:3
console.log(name.concat('krishna').trim().replaceAll(' ',''));
//op:ramakrishna
console.log(name.trim().padStart(8).charAt(0));
// o/p:''
const sentence = 'This is a poem';
console.log(sentence.trim().split(' ',2))

console.log(sentence.at(-1));


console.log(sentence.includes('poe'))