// const authForm = document.getElementById('authForm');
// console.log(authForm);
// const authorize = (e) => {
//   // console.log(e);
//   e.preventDefault();
//   alert(e);
// }
// authForm.addEventListener('submit', authorize)

const currUser = JSON.parse(window.localStorage.getItem('currUser'));
const users = JSON.parse(window.localStorage.getItem('users'));

if (!currUser) {
  location.hash = '#login';
} else if (users.find(user => user.login === currUser.login && user.password === currUser.password)) {
  location.hash = '#feed';
}
