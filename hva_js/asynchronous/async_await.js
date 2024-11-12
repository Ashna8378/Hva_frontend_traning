
const url = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(){   // async functions always return promise 
      const response = await fetch(url)
      if(!response.ok){
        throw new Error("Something went wrong")
      }
      const data = await response.json()             // also returns promise so we can use await to pause the execution 
      return data 
}

getPosts() 
     .then((mydata)=>{
        console.log(mydata)
     })
     .catch((error)=>{
        console.log(error)
     })
   
// const returned = getPosts()

// console.log(returned)

// fetch(url)
//      .then((response)=>{
//         return response.json()
//      })
//      .then((data)=>{
//         console.log(data)
//      })


