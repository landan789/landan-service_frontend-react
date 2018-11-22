import App from '@/App';
import Game from '@/pages/Game/index';
import Home from '@/pages/Home/index';
import User from '@/pages/User/index';

const _ = {
  path: '/',
  component: App,
  indexRoute: {
    onEnter: (nextState: any, replace: any) => replace('/home')
  }
};

const game = {
  path: '/game',
  component: App,
  indexRoute: { component: Game }
  // childRoutes: [
  //   { path: 'about', component: About },
  //   {
  //     path: 'inbox',
  //     component: Inbox,
  //     childRoutes: [{
  //       path: 'messages/:id',
  //       onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
  //     }]
  //   },
  //   {
  //     component: Inbox,
  //     childRoutes: [{
  //       path: 'messages/:id', component: Message
  //     }]
  //   }
  // ]
};

const home = {
  path: '/home',
  component: App,
  indexRoute: { component: Home }
};

const user = {
  path: '/user',
  component: App,
  indexRoute: { component: User }
};

let index = [
  _,
  home,
  game,
  user
];

export default index;