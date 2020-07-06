import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '../../../react-auth0-spa';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth0();
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isAuthenticated ?
                <Component {...props} />
                : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;
