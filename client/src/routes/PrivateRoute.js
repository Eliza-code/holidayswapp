import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useSelector((state) => state.userReducer);

  return (
    <Route {...rest}>
        {isAuth ? (
          <Component />
        ) : (
          <Redirect to="/signin" />
        )}
      </Route>     
  );
};

export default PrivateRoute;
