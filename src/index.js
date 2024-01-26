import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './app/App';
import LanguageProvider from './app/containers/LanguageProvider';
import { translationMessages } from './app/i18n';
import { store } from './app/store';
import './app/utils/importImages';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = (messages) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <LanguageProvider messages={messages}>
          <App />
        </LanguageProvider>
      </Provider>
    </React.StrictMode>,
  );
};
render(translationMessages);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
