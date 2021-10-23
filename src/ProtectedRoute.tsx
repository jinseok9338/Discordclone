import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const ProtectedRoute = ({ component, user, ...rest }: any) => {
  const currentUser = useAuth();
  console.log(currentUser);
  // When first booting up the user object is null or undefined
  const routeComponent = (props: any) =>
    currentUser ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/Login" }} />
    );

  return <Route {...rest} render={routeComponent} />;
};

export default ProtectedRoute;
