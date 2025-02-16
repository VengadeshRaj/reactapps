import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FrRoutes from './Routes';
import PageLayout from './fr-components/PageLayout/PageLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageLayout>
      <FrRoutes />
    </PageLayout>
  </React.StrictMode>
);

reportWebVitals();
