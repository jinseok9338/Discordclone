import React from "react";
import { Redirect, Route } from "react-router-dom";
import useMaintainState from "./hooks/useMaintainState";

const ProtectedRoute = ({ component, user, ...rest }: any) => {

    const routeComponent = (props: any) => (
        Object.keys(user).length !==0
            ? React.createElement(component, props)
            : <Redirect to={{ pathname: '/Login' }} />
    );
    return <Route {...rest} render={routeComponent} />;
};

export default ProtectedRoute;