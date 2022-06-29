class Login {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.validateonSubmit();
  }

  validateonSubmit() {
    console.log('validationInit');
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const currUser = JSON.parse(localStorage.getItem('currUser')) || {};
      // const users = JSON.parse(localStorage.getItem('users'));
      const signinUsername = this.form.username.value;
      const signinPassword = this.form.password.value;
      // console.log(isUserAuthenticated(signinUsername, signinPassword));
      if (isUserAuthenticated(signinUsername, signinPassword)) {
        currUser.username = signinUsername;
        currUser.password = signinPassword;
        localStorage.setItem('currUser', JSON.stringify(currUser));
        location.hash = '#feed';
        console.log(`Signed in correctly as ${signinUsername}:${signinPassword}`);
      } else {
        alert('The username or password is incorrect. Try again.');
        console.log('The username or password is incorrect. Try again.');
        this.form.reset();
      }


      // this.form.submit();
    });
  }
}

window.addEventListener('hashchange', () => {
  //FIXME: crutch. w/o timeout getElement returns null value
  if (location.hash === '#login') setTimeout(loginInit, 100);
  if (location.hash === '#feed') setTimeout(feedInit, 100);
  console.log(location.hash);
});

const loginInit = () => {
  const form = document.getElementById('authForm');
  // console.log(form);
  if (form) {
    const fields = ['username', 'password'];
    const validator = new Login(form, fields);
  }
}

const feedInit = () => {
  const singoutButton = document.getElementById('signoutButton');
  // console.log(singoutButton);
  if (singoutButton) {
    singoutButton.addEventListener('click', signout)
  }
}

const signout = () => {
  localStorage.removeItem('currUser');
  location.hash = '#login';
}

export function isUserAuthenticated(username, password) {
  // console.log(username, password);
  return !!JSON.parse(localStorage.getItem('users'))
    .find(user => user.username === username && user.password === password);
}
