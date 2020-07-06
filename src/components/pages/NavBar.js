import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import FrontComponent from './front/FrontComponent'
import LoginComponent from "./login/LoginComponent"

const NavBar = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <div style={{height: '100%'}}>
            
            {!isAuthenticated ? <LoginComponent /> : <FrontComponent />}
            
           

            
        </div>
    );
   
};

export default NavBar;