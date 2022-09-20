import { autoroute } from "./autorouting.js";


const pageTitle = 'Tiny Blog';
const routes = {
  404: {
    template: '../pages/404.html',
    style: '',
    title: '404 | ' + pageTitle,
  },
  '/': {
    template: '../pages/menu.html',
    style: '../pages/menu.css',
    title: pageTitle,
  },
  login: {
    template: '../pages/login.html',
    style: '../pages/login.css',
    title: 'Log in | ' + pageTitle,
  },
  feed: {
    template: '../pages/feed.html',
    style: '../pages/feed.css',
    title: 'Feed | ' + pageTitle,
  },
};

const locationHandler = async () => {
  console.log('Redirect to', window.location.hash);
  var location = window.location.hash.replace('#', '');
  if (location.length == 0) {
    location = '/';
  }
  const route = routes[location] || routes['404'];
  const cssLink = document.getElementById('pageStyle');
  cssLink.href = route.style;
  const html = await fetch(route.template).then((response) => response.text());
  document.getElementById('root').innerHTML = html;
  document.title = route.title;
};
window.addEventListener('hashchange', locationHandler);
locationHandler();

window.addEventListener('hashchange', autoroute);
autoroute();
