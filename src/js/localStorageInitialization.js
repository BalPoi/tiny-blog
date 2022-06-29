const initUsers = () => {
  localStorage.setItem('users', JSON.stringify(users));
  console.log('Users: ', users);
}
const initCurrUser = () => {
  localStorage.setItem('currUser', JSON.stringify(currUser));
  console.log('Current: ', currUser);
}
const initRemembering = flag => localStorage.setItem('isUserRemembered', JSON.stringify(flag));

let users = [
  {username: 'pavel', password: '1234'},
  {username: 'igar', password: 'igar'},
  {username: 'admin', password: 'adminpassword'},
  {username: 'user', password: 'userpassword'},
];

let currUser = {username: 'pavel', password: '1234'};
