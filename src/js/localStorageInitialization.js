const localStorageInit = () => {
  window.localStorage.setItem('users', JSON.stringify(users));
  console.log(users);
}

let users = [
  {login: 'pavel', passwod: '1234'},
  {login: 'igar', passwod: 'igar'},
  {login: 'admin', passwod: 'adminpassword'},
  {login: 'user', passwod: 'userpassword'},
];
