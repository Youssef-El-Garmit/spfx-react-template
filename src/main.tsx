import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// React 17 doesn't have createRoot, use render directly
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
