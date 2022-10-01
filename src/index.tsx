import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ProjectListContextProvider } from './store/project-list-context';
import { DeviceListContextProvider } from './store/device-list-context';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <DeviceListContextProvider>
    <ProjectListContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProjectListContextProvider>
  </DeviceListContextProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
