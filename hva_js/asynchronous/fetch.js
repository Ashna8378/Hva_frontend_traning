// fetch

// const url = "https://jsonplaceholder.typicode.com/postss";

// fetch(url)
// .then((response)=>{
//     // console.log("then")
//     // console.log(response)
//     if(response.ok){
//     return response.json()

//     }else{
//         throw new Error("something went wrong!!!")
//     }
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log("inside catch")
//     console.log(error)
// })

// fetch will be rejected only when it has network issue 


// post methods


const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url,{
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "baar",
        userId: 1,
    }),
    headers:{
        "Content-type": "application/json"
    }
})
.then((response)=>{
    // console.log("then")
    // console.log(response)
    if(response.ok){
    return response.json()

    }else{
        throw new Error("something went wrong!!!")
    }
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("inside catch")
    console.log(error)
})