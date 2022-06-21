import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import Navbar from './components/Navbar';
import App from './App';
import store from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <Navbar />
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
);
