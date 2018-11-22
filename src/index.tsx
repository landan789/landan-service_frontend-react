import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import indexIndexRoutes from '@/routers/index/index';

import './index.scss';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router routes={indexIndexRoutes} />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();