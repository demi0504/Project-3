import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-bulma-components/dist/react-bulma-components.min.css';
//AuthProvider providing states that we want to be global
//Now the entire application should have access to user and isAuthenticated states
import AuthProvider from "./Context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
