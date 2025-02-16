import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Route from './Route';
import PageLayout from './fr-components/PageLayout/PageLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageLayout>
      <Route />
    </PageLayout>
  </React.StrictMode>
);

reportWebVitals();
