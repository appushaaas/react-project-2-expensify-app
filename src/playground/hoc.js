

import React from 'react';
import ReactDOM from 'react-dom';
//import { prependOnceListener } from 'cluster';

const INFO = (props) => (
  <div>
  <h1>Info</h1>
  <p>The info is:{props.info}</p>
  </div>
);


const withAdminWarning = (WrappedComponent) => {
 
    return(props) => (
          <div>
          {props.isAdmin && <p>This is private information.Please dont share!</p>}
          <WrappedComponent {...props}/>
          </div>
    );
};


const requireAuthentication = (WrappedComponent) => {
    return(props) => (
          <div>
          {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please login to view the information.</p>)}
         </div>
    );
};

const AdminInfo = withAdminWarning(INFO);
const AuthInfo = requireAuthentication(INFO);
//ReactDOM.render(<AdminInfo isAdmin = { true } info = {"These are the informations available."}/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated = { true } info = {"These are the informations available."}/>, document.getElementById('app'));