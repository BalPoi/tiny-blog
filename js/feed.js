import { isUserAuthenticated, signout } from "./login.js";

export const feedInit = () => {
  const signoutButton = document.getElementById('signoutButton');
  // console.log(signoutButton);
  if (signoutButton) {
    signoutButton.addEventListener('click', signout)
  }

  const posts = JSON.parse(localStorage.getItem('posts'));
  posts.forEach(post => post.date = new Date(post.date));
  console.log(posts);


  const main = document.querySelector('main');
  // const postTemplate = await fetch('/components/post.html').then((response) => response.text());
  posts.forEach(post => {
    const html =
    `${post.username} ${post.date.toLocaleString()}<br>
    ${post.title}<br>
    ${post.tags.join(', ')}<br>
    ${post.content}<br>
    <br>`
    main.innerHTML += html;
  });

}




// window.addEventListener('DOMContentLoaded', () => {
//   const main = document.querySelector('#posts');
//   console.log(main);
// });
