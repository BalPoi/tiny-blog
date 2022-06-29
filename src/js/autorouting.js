import { isUserAuthenticated } from "./login.js";

export const autoroute = () => {
  const currUser = JSON.parse(localStorage.getItem('currUser')) || {};
  const isUserRemembered = JSON.parse(localStorage.getItem('isUserRemembered')) || {};
  const isAuthenticated = isUserAuthenticated(currUser.username, currUser.password);

  // console.log('isAuthenticated:',isAuthenticated,'currUser:', currUser);

  if (!currUser && !isUserRemembered) {
    location.hash = '#login';
  } else if (isAuthenticated) {
    location.hash = '#feed';
  } else if (location.hash === '#feed' && !isAuthenticated) {
    location.hash = '#login';
  }
}
