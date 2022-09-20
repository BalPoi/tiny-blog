import { isUserAuthenticated } from "./login.js";

export const autoroute = () => {
  const currUser = JSON.parse(localStorage.getItem('currUser')) || {};
  const isAuthenticated = isUserAuthenticated(currUser.username, currUser.password);

  if (!currUser) {
    location.hash = '#login';
  } else if (isAuthenticated) {
    location.hash = '#feed';
  } else if (location.hash === '#feed' && !isAuthenticated) {
    location.hash = '#login';
  }
}
