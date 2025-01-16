document.getElementById('fetchPostsBtn').addEventListener('click', fetchPostsAndComments);

function fetchPostsAndComments() {

  // Get the User ID from the input field

  const userId = document.getElementById('userId').value;
  
  if (!userId) {
    alert('Please enter a User ID');
    return;
  }

  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = ''; // Clear any previous posts or comments

  // Fetch posts based on User ID using .then()

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((posts) => {
      // Check if posts exist for the given User ID

      if (posts.length === 0) {
        postsContainer.textContent = 'No posts found for this User ID.';
        return;
      }

      // Iterate over each post and fetch comments for each post

      posts.forEach((post) => {
        // Create and display each post
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `;
        postsContainer.appendChild(postDiv);

        // Fetch comments for this post using .then()

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
          .then((response) => response.json())
          .then((comments) => {

            // Create a div for comments

            const commentsDiv = document.createElement('div');
            commentsDiv.classList.add('comments');

            // Display comments for the post

            comments.forEach((comment) => {
              const commentDiv = document.createElement('div');
              commentDiv.classList.add('comment');
              commentDiv.innerHTML = `
                <strong>${comment.name}</strong> (${comment.email}):
                <p>${comment.body}</p>
              `;
              commentsDiv.appendChild(commentDiv);
            });

            // Append the comments to the post

            postDiv.appendChild(commentsDiv);
          })
          .catch((error) => {
            console.error('Error fetching comments:', error);
            postsContainer.textContent = 'Failed to load comments. Please try again later.';
          });
      });
    })
    .catch((error) => {
      console.error('Error fetching posts:', error);
      postsContainer.textContent = 'Failed to load posts. Please try again later.';
    });
}





