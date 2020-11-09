import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initialState, reducer } from './reducer';
import DataLayerProvider from './contexts/DataLayer';

ReactDOM.render(
  <React.StrictMode>
    <DataLayerProvider initialState={initialState} reducer={reducer}>
      <App />
    </DataLayerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
