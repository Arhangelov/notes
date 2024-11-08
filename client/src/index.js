import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';

//Context
import { NotesProvider } from './store/NotesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NotesProvider>
        <App />
      </NotesProvider>
    </Router>
  </React.StrictMode>
);

