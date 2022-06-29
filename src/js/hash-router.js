import { autoroute } from "./autorouting.js";


const pageTitle = 'Tiny Blog';
// create an object that maps the url to the template, title, and description
const routes = {
  404: {
    template: '/pages/404.html',
    style: '',
    title: '404 | ' + pageTitle,
  },
  '/': {
    template: '/pages/index.html',
    style: '/pages/index.css',
    title: pageTitle,
  },
  login: {
    template: '/pages/login.html',
    style: '/pages/login.css',
    title: 'Log in | ' + pageTitle,
  },
  feed: {
    template: '/pages/feed.html',
    style: '/pages/feed.css',
    title: 'Feed | ' + pageTitle,
  },
};

// create a function that watches the url and calls the urlLocationHandler
const locationHandler = async () => {
  // get the url path, replace hash with empty string
  var location = window.location.hash.replace('#', '');
  // if the path length is 0, set it to primary page route
  if (location.length == 0) {
    location = '/';
  }
  // get the route object from the routes object
  const route = routes[location] || routes['404'];
  // link required css styles
  const cssLink = document.getElementById('pageStyle');
  cssLink.href = route.style;
  // get the html from the template
  const html = await fetch(route.template).then((response) => response.text());
  // set the content of the content div to the html
  document.getElementById('root').innerHTML = html;
  // set the title of the document to the title of the route
  document.title = route.title;
};
// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener('hashchange', locationHandler);
// call the urlLocationHandler to load the page
locationHandler();

window.addEventListener('hashchange', autoroute);
autoroute();
