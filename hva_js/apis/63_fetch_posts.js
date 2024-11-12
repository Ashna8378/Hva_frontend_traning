const postsContainer = document.getElementById("posts");
const url = 'https://jsonplaceholder.typicode.com/posts';

// Fetch and display posts function
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            // Display post details
            postDiv.innerHTML = `
                <p><strong>User ID:</strong> ${post.userId}</p>
                <p><strong>Post ID:</strong> ${post.id}</p>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            // Append each post div to the container div
            postsContainer.appendChild(postDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
        postsContainer.textContent = 'Failed to load posts. Please try again later.';
    });

    



