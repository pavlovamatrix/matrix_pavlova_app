import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import { App } from './components/App/App';
import { setupStore } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
export const store = setupStore();
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
