import { feedInit } from "./feed.js";

class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateonSubmit();
  }
  validateonSubmit() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const currUser = JSON.parse(localStorage.getItem('currUser')) || {};
      const signinUsername = this.form.username.value.toLowerCase();
      const signinPassword = this.form.password.value;
      if (isUserAuthenticated(signinUsername, signinPassword)) {
        currUser.username = signinUsername;
        currUser.password = signinPassword;
        localStorage.setItem('currUser', JSON.stringify(currUser));
        location.hash = '#feed';
      } else {
        document.getElementById("loginAlert").style.display = "block";
        this.form.reset();
      }
    });
  }
}

window.addEventListener('hashchange', () => {
  //FIXME: crutch. w/o timeout getElement returns null value
  if (location.hash === '#login') setTimeout(loginInit, 100);
  if (location.hash === '#feed') setTimeout(feedInit, 100);
});
window.addEventListener('load', () => {
  //FIXME: crutch. w/o timeout getElement returns null value
  if (location.hash === '#login') setTimeout(loginInit, 100);
  if (location.hash === '#feed') setTimeout(feedInit, 100);
});


const loginInit = () => {
  const form = document.getElementById('authForm');
  if (form) {
    const fields = ['username', 'password'];
    const validator = new Login(form, fields);
  }
}
//FIXME
setTimeout(loginInit, 100);

export const signout = () => {
  localStorage.removeItem('currUser');
  location.hash = '#login';
}

export function isUserAuthenticated(username, password) {
  return !!(JSON.parse(localStorage.getItem('users')) || [])
    .find(user => user.username === username && user.password === password);
}
