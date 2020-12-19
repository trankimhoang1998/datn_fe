import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkRole } from "../helper/checkRole";

export function PrivateRouteAdmin(props) {
  const { component: Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={() => {
        if (checkRole() === "admin") return <Component></Component>;
        else {
          return <Redirect to="/login"></Redirect>;
        }
      }}
    ></Route>
  );
}

export function PrivateRouteEmployer(props) {
  const { component: Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={() => {
        if (checkRole() === "employer") return <Component></Component>;
        else {
          return <Redirect to="/login"></Redirect>;
        }
      }}
    ></Route>
  );
}

export function PrivateRouteCandidate(props) {
  const { component: Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={() => {
        if (checkRole() === "candidate") return <Component></Component>;
        else {
          return <Redirect to="/login"></Redirect>;
        }
      }}
    ></Route>
  );
}

export function PrivateRouteCv(props) {
  const { component: Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={() => {
        if (checkRole() === "candidate") return <Component></Component>;
        else {
          return <Redirect to="/login"></Redirect>;
        }
      }}
    ></Route>
  );
}
