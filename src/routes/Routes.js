import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  PrivateRouteAdmin,
  PrivateRouteEmployer,
  PrivateRouteCandidate,
  PrivateRouteCv
} from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import {
  publicRoutes,
  privateRouteAdmin,
  privateRouteEmployer,
  privateRouteCandidate,
  privateRouteCv,
} from "./routeConfigs";
const Routes = () => {
  return (
    <Switch>
      {/* <Redirect exact from="/" to="/overview"></Redirect> */}
      {publicRoutes.map((element, index) => {
        let temp = element.subroutes.map((e, i) => e.path);
        return (
          <Route
            key={index}
            exact={element.subroutes.some((r) => r.exact)}
            path={temp}
          >
            <element.layout>
              <Switch>
                {element.subroutes.map((element, index) => (
                  <PublicRoutes {...element}></PublicRoutes>
                ))}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      {privateRouteEmployer.map((element, index) => {
        let temp = element.subroutes.map((e, i) => e.path);
        return (
          <Route
            key={index}
            exact={element.subroutes.some((r) => r.exact)}
            path={temp}
          >
            <element.layout>
              <Switch>
                {element.subroutes.map((element, index) => (
                  <PrivateRouteEmployer {...element}></PrivateRouteEmployer>
                ))}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      {privateRouteCandidate.map((element, index) => {
        let temp = element.subroutes.map((e, i) => e.path);
        return (
          <Route
            key={index}
            exact={element.subroutes.some((r) => r.exact)}
            path={temp}
          >
            <element.layout>
              <Switch>
                {element.subroutes.map((element, index) => (
                  <PrivateRouteCandidate {...element}></PrivateRouteCandidate>
                ))}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      {privateRouteAdmin.map((element, index) => {
        let arrayRoute = element.subroutes.map((e, i) => e.path);
        return (
          <Route key={index} exact path={arrayRoute}>
            <element.layout>
              <Switch>
                {element.subroutes.map((element, index) => {
                  return <PrivateRouteAdmin {...element}></PrivateRouteAdmin>;
                })}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      {privateRouteCv.map((element, index) => {
        let arrayRoute = element.subroutes.map((e, i) => e.path);
        return (
          <Route key={index} exact path={arrayRoute}>
            <element.layout>
              <Switch>
                {element.subroutes.map((element, index) => {
                  return <PrivateRouteCv {...element}></PrivateRouteCv>;
                })}
              </Switch>
            </element.layout>
          </Route>
        );
      })}
      <Route path="*" render={() => <Redirect to="/not-found-404"></Redirect>}></Route>
    </Switch>
  );
};

export default Routes;
