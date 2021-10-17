import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import useMaintainState from "./hooks/useMaintainState";


const ProtectedRoute = ({ component, user, ...rest }: any) => {
    
    // When first booting up the user object is null or undefined
    const routeComponent = (props: any) => (
        (user !== null && user !== undefined && Object.keys(user).length !== 0 )
            ? React.createElement(component, props)
            : <Redirect to={{ pathname: '/Login' }} />
    );


    return <Route {...rest} render={routeComponent} />;
};

export default ProtectedRoute;