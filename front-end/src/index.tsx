import ReactDOM from 'react-dom';

import './index.scss'
import App from './component/app/App';
import HomePage from './component/pages/homePage/HomePage'
import ProfilePage from './component/pages/profilePage/ProfilePage'

import { StrictMode } from 'react';
import { StoreProvider } from './component/store/Store'
import { Router, RouteComponentProps } from '@reach/router'

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <StrictMode>
    <StoreProvider>
      <Router>
        <App path="/">
          <RouterPage pageComponent={<HomePage />} path="/" />
          <RouterPage pageComponent={<ProfilePage />} path="/profile" />
        </App>
      </Router>
    </StoreProvider>
  </StrictMode>,
  document.getElementById('root')
);
