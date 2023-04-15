import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import BookmarkApp from './store/bookmark/bookmarks';
import { legacy_createStore as configureStore } from 'redux';

const store = configureStore(BookmarkApp)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

