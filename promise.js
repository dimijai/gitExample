const posts =[
    {title:"Post One", body:"This is post 1", createdAt: new Date().getTime()},
    {title:"Post Two", body:"This is post 2", createdAt: new Date().getTime()}
]

function getPosts()
{
        let output='';
        for(let i=0;i<posts.length;i++)
        {
            output+= `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago </li>`;
        }
        document.body.innerHTML = output;
        
}


function createPost(post,post4)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            posts.push(post,{...post4,});

         const error= false
         if(!error){
            resolve()
         }
         else{reject("Error:something went wrong")}

        }, 2000);
     });
    }
function removePost()
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

            if(posts.length>0)
            {
resolve(posts.pop())
            }
            else{reject("Array is empty now")}

        }, 1000);
    })
      }
createPost({title:"Post Three", body:"This is post 3", createdAt: new Date().getTime()}, 
           {title:"Post Four", body:"This is post 4", createdAt: new Date().getTime()})
     .then(()=>{
      getPosts()
    removePost().then(()=>{
       getPosts()
        removePost().then(()=>{
            getPosts()
            removePost().then(()=>{
                getPosts()
                removePost().then(()=>{
             getPosts()
                removePost().then(()=>{})

                .catch((err)=>{console.log("inside catch block",err)
            })
            })

    })
})
})
     }) 
     