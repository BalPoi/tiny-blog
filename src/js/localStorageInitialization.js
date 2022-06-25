const initUsers = () => {
  window.localStorage.setItem('users', JSON.stringify(users));
  console.log('Users: ', users);
}
const initCurrUser = () => {
  window.localStorage.setItem('currUser', JSON.stringify(currUser));
  console.log('Current: ', currUser);
}
let users = [
  {login: 'pavel', password: '1234'},
  {login: 'igar', password: 'igar'},
  {login: 'admin', password: 'adminpassword'},
  {login: 'user', password: 'userpassword'},
];

let currUser = {login: 'pavel', password: '1234'};
