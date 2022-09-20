import { signout } from "./login.js";

export const feedInit = () => {
  const currUser = JSON.parse(localStorage.getItem('currUser'));

  document.querySelector('#currUsername').innerHTML = capitalize(currUser.username);
  const signoutButton = document.getElementById('signoutButton');
  if (signoutButton) {
    signoutButton.addEventListener('click', signout)
  }

  feedRender();

  const deleteBtns = document.querySelectorAll('.delete_post_btn');
  deleteBtns.forEach(btn => btn.addEventListener('click', deletePost));

  const editBtns = document.querySelectorAll('.edit_post_btn');
  editBtns.forEach(btn => btn.addEventListener('click', editPost));

  document.querySelector('#newPostForm').addEventListener('submit', addPost);
}

const feedRender = () => {
  const currUser = JSON.parse(localStorage.getItem('currUser'));
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.forEach(post => post.date = new Date(post.date));
  posts.reverse();
  const main = document.querySelector('main');
  main.innerHTML = '';
  posts.forEach(post => {
    const html =
    `<div class="card post mb-1" data-post-id="${post.id}">
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
              ${currUser.username === post.username || currUser.username === "admin"
                ? `
                  <li><button class="dropdown-item edit_post_btn" data-post-id="${post.id}" data-bs-toggle="modal" data-bs-target="#editPostModal">Edit</button></li>
                  <li><button class="dropdown-item delete_post_btn" data-post-id="${post.id}">Delete</button></li>
                  `
                : ``}
            </ul>
          </div>
        </div>
        <h6 class="card-subtitle mb-2 text-muted">${capitalize(post.username)} ${post.date.toLocaleString()}</h6>
        <p class="card-text">${post.content}</p>
        <p class="card-text text-muted">${post.tags.join(', ')}</p>
      </div>
    </div>`
    main.innerHTML += html;
  })
}


const deletePost = (e) => {
  const id = e.target.dataset.postId;
  const posts = JSON.parse(localStorage.getItem('posts')).filter(post => post.id != id);
  localStorage.setItem('posts', JSON.stringify(posts));
  document.querySelectorAll('.post').forEach(post => {
    if (post.dataset.postId == id) post.remove();
  })
}

const addPost = (e) => {
  e.preventDefault();
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const newPost = {
    id: posts.length,
    username: JSON.parse(localStorage.getItem('currUser')).username,
    date: new Date(),
    title: e.target.newPostTitle.value,
    tags: e.target.newPostTags.value.split(/,\s*/g),
    content: e.target.newPostContent.value
  }
  posts.push(newPost);
  localStorage.setItem('posts', JSON.stringify(posts));
  bootstrap.Modal.getInstance(document.querySelector('#newPostModal')).hide();
  feedInit()
}

const editPost = (e) => {
  const id = +e.target.dataset.postId;
  let posts = JSON.parse(localStorage.getItem('posts'));
  const post = posts.find(post => post.id === id);
  const editPostForm = document.getElementById("editPostForm");
  editPostForm.editPostTitle.value = post.title;
  editPostForm.editPostContent.value = post.content;
  editPostForm.editPostTags.value = post.tags.join(", ");
  editPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const i = posts.findIndex(post => post.id === id);
    posts[i].title = e.target.editPostTitle.value;
    posts[i].content = e.target.editPostContent.value;
    posts[i].tags = e.target.editPostTags.value.split(/,\s*/g);
    localStorage.setItem('posts', JSON.stringify(posts));
    bootstrap.Modal.getInstance(document.querySelector('#editPostModal')).hide();
    feedInit()
  })
}

const capitalize = (name) => {
  return name[0].toUpperCase() + name.slice(1);
}
