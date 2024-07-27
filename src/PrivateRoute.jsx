// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       localStorage.getItem('token') ? (
//         <Component {...props} />
//       ) : (
//         <Navigate to="/login" />
//       )
//     }
//   />
// );

// export default PrivateRoute;

// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = localStorage.getItem('token'); // Replace this with your authentication logic

//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;