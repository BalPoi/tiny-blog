import { isUserAuthenticated, signout } from "./login.js";

export const feedInit = () => {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.forEach(post => post.date = new Date(post.date));
  // console.log(posts);
  const currUser = JSON.parse(localStorage.getItem('currUser'));

  const signoutButton = document.getElementById('signoutButton');
  // console.log(signoutButton);
  if (signoutButton) {
    signoutButton.addEventListener('click', signout)
  }

  const main = document.querySelector('main');
  // const postTemplate = await fetch('/components/post.html').then((response) => response.text());
  posts.forEach(post => {
    const html =
    `<div class="card post" data-post-id="${post.id}">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">${post.title}</h5>

        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><button class="dropdown-item disabled" >Share</button></li>
            <li><button class="dropdown-item disabled" >Report</button></li>
            ${currUser.username === post.username
              ? `<li><button class="dropdown-item delete_post_btn" data-post-id="${post.id}">Delete</button></li>`
              : ``}
          </ul>
        </div>

      </div>
      <h6 class="card-subtitle mb-2 text-muted">${post.username} ${post.date.toLocaleString()}</h6>
      <p class="card-text">${post.content}</p>
      <p class="card-text text-muted">${post.tags.join(', ')}</p>
    </div>
  </div>`
  main.innerHTML += html;
  });
  const deleteBtns = document.querySelectorAll('.delete_post_btn');
  // console.log(deleteBtns);
  deleteBtns.forEach(btn => btn.addEventListener('click', deletePost));
  // deleteBtns.forEach(btn => console.log(btn));
}

const deletePost = (e) => {
  const id = e.target.dataset.postId;
  // console.log(id);
  const posts = JSON.parse(localStorage.getItem('posts')).filter(post => post.id != id);
  // console.log(posts);
  localStorage.setItem('posts', JSON.stringify(posts));
  document.querySelectorAll('.post').forEach(post => {
    if (post.dataset.postId == id) post.remove();
  })
}
