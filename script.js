
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {  posts.forEach(data => {
      var apiContainer = document.getElementById('api');

      var post = document.createElement('div');
      post.classList.add('post', 'col-md-12');
      post.innerHTML = `
      
           <h2>${data.title}</h2>
           <p>${data.body}</p>
           <button class="bu" data-post-id="${data.id}">Show Comments</button>
           <p class="comments" id="comments-${data.id}"></p>
         
        `;


        apiContainer.appendChild(post);
        post.querySelector('button').addEventListener('click', function() {

        const postId = this.getAttribute('data-post-id');
        const commentsContainer = document.getElementById(`comments-${postId}`);
      if (commentsContainer.innerHTML=== ``){
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(comments => { comments.forEach(comment => {
          
          const commentElement = document.createElement('div');
          commentElement.classList.add('comment');
          commentElement.innerHTML=`
          <p><strong>${comment.name} 
                    (${comment.email})      
          </strong></p>
          <p>${comment.body}</p>
          `;

          commentsContainer.appendChild(commentElement);
        });

        });
      }

    else{
      commentsContainer.innerHTML= ``;
    }
  });
});
  });
