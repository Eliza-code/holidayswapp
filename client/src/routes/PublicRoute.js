import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, ...rest }) => {
    const { isAuth } = useSelector((state)=> state.userReducer);

    return (
        <Route
            {...rest}
            component={(props) =>
            !isAuth ? (
                <Component {...props} />
            ) : (
                <Redirect to="/signin" />
            )}
        />
    )
}

export default PublicRoute;