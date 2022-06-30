const initUsers = () => {
  localStorage.setItem('users', JSON.stringify(users));
  console.log('Users: ', users);
}
const initCurrUser = () => {
  localStorage.setItem('currUser', JSON.stringify(currUser));
  console.log('Current: ', currUser);
}
const initRemembering = flag => localStorage.setItem('isUserRemembered', JSON.stringify(flag));
const initPosts = () => localStorage.setItem('posts', JSON.stringify(posts));

const users = [
  {username: 'pavel', password: '1234'},
  {username: 'igar', password: 'igar'},
  {username: 'admin', password: 'adminpassword'},
  {username: 'user', password: 'userpassword'},
];

const currUser = {username: 'pavel', password: '1234'};

const posts = [
  {
    username: "Admin",
    date: new Date(),
    title: "Laboris cupidatat ut aute aliquip cillum.",
    tags: ["tag1", "tag2", "tag3"],
    content: "Enim veniam commodo fugiat fugiat in ex aliquip incididunt ullamco ad excepteur ad. Sint adipisicing dolor elit amet sunt mollit pariatur cupidatat ipsum. Eu nisi laborum labore proident ad fugiat nulla occaecat pariatur nulla deserunt. Consectetur reprehenderit laboris nostrud officia ex aliquip proident consequat pariatur mollit enim est ad. Laboris duis cillum id anim tempor irure laborum exercitation aliquip.",
  },
  {
    username: "pavel",
    date: new Date(),
    title: "Exercitation aliqua proident velit excepteur laboris eiusmod irure ea veniam.",
    tags: ["tag1", "tag2", "tag3"],
    content: "Velit id eiusmod mollit dolor. Consequat cupidatat magna cillum ut. Occaecat adipisicing deserunt dolore dolor aute nostrud. Veniam qui commodo et consectetur aliquip culpa cillum deserunt magna ea ad. Velit pariatur cillum sit est id ullamco.",
  },
  {
    username: "Admin",
    date: new Date(),
    title: "Et voluptate magna aliqua dolore nulla sit enim elit.",
    tags: ["tag1", "tag2", "tag3"],
    content: "Sunt amet deserunt ad deserunt fugiat exercitation tempor tempor id ipsum velit deserunt deserunt. Ex cupidatat duis commodo ullamco adipisicing laborum irure officia nisi minim. Lorem ut occaecat aliquip sunt mollit laboris consectetur qui ex veniam sit commodo exercitation cillum.",
  },
  {
    username: "ighar",
    date: new Date(),
    title: "Dolor qui pariatur labore nostrud.",
    tags: ["tag1", "tag2", "tag3"],
    content: "Sint id consectetur officia amet magna elit elit sint id veniam. Ea reprehenderit mollit cillum excepteur. Et aliquip ea irure incididunt id mollit sunt ipsum Lorem ex anim. Culpa ad dolore nisi Lorem adipisicing aliquip officia magna. Mollit cillum eiusmod Lorem minim consequat in cillum eu officia duis esse officia incididunt aliquip.",
  },
  {
    username: "pavel",
    date: new Date(),
    title: "Exercitation adipisicing aliqua nisi elit nisi cupidatat excepteur exercitation mollit.",
    tags: ["tag1", "tag2", "tag3"],
    content: "Aute laboris fugiat culpa sint dolore cupidatat enim consectetur minim. Amet officia deserunt magna esse amet adipisicing sint id culpa nulla. Laboris do do nisi adipisicing proident id consectetur. Eiusmod irure Lorem occaecat eiusmod tempor Lorem et. Qui qui aliqua laboris ex incididunt adipisicing. Aliquip deserunt mollit sunt tempor esse sit labore aute labore laboris labore.",
  },
];
