// 1. GET Request to Fetch All Posts---------------------

const url =  "https://jsonplaceholder.typicode.com/posts"

fetch(url)
   .then((response)=>{
    console.log(response)
    console.log('status Code', response.status)
    return response.json()
   })
   .then((data)=>{
    console.log('All data',data)
   })
   .catch((error)=>{
    console.log("Error:", error)
   })

// 2. GET Request to Fetch a Specific Post ----------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/posts/1')
   .then((response)=>{
      return response.json()
   })
   .then((data)=>{
      console.log("Single Post:", data)
   })
   .catch((error)=>{
      console.log("Error",error)
   })

// 3. POST Request to Create a New Post------------------------------------------

fetch('https://jsonplaceholder.typicode.com/posts',{
   method:'POST',
   headers: {
      'Content-Type':'application/json'
   },
   body: JSON.stringify({
        title: "My New Post",
        body: "This is the content of my new post",
        userID: 1
   })
})
  .then((response)=>{
   return response.json()
  })
  .then((data)=>{
   console.log("Created Post",data)
  })
  .catch((error)=>{
   console.log('Error', error)
  })

//   4. PUT Request to Update a Post (Full Update)---------------

fetch('https://jsonplaceholder.typicode.com/posts/1', {
   method: 'PUT',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({
     title: "Updated Post",
     body: "This is the updated content.",
     userId: 1
   })
 })
   .then(response => response.json())
   .then(data => {
     console.log('Updated Post:', data);  // Logs the updated post
   })
   .catch(error => {
     console.error('Error:', error);
   });
 
  //  5. PATCH Request to Partially Update a Post

   fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: "Partially Updated Title"
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Partially Updated Post:', data);  // Logs the partially updated post
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
   // 6. DELETE Request to Delete a Post-------------------------

   fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    })
      .then(response => {
        console.log('Delete Status:', response.status);  // Should log 200 or 204
      })
      .catch(error => {
        console.error('Error:', error);
      });

      


